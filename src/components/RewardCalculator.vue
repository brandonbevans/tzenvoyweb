<template>
    <v-card color="grey darken-2" id="rewards">
        <v-container grid-list-md text-xs-center>
            <v-layout align-center>
                <v-flex xs12>
                    <h2 class="headline">Rewards Calculator</h2>
                    <div>Enter your KT address to see your rewards:</div>
                    <input v-model="ktAddress" placeholder="KT1....."><v-btn @click="renderRewardsTable">Calculate</v-btn>
                </v-flex>
                <v-flex>
                    <v-data-table :headers=headers :items=cycles
                                  :pagination.sync=pagination class="elevation-1"
                                  :rows-per-page-items=[-1]
                    >
                        <template slot="no-data">
                            <v-alert :value="true" :type=rowDisplay>
                                Please enter a KT address that's staking to TzEnvoy
                            </v-alert>
                        </template>
                        <template slot="items" slot-scope="props">
                            <tr :class=getStatusClass(props.item.status.status)>
                                <td>{{ props.item.cycle }}</td>
                                <td>{{ (parseFloat(props.item.balance)*1E-6).toFixed(3) }}</td>
                                <td>{{ calcReward(props.item.balance, props.item.staking_balance, props.item.rewards) }}
                                    {{ maybeEstimated(props.item.status.status) }}</td>
                                <td>{{ getStatusText(props.item.status.status) }}</td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "RewardCalculator",
        data: function() {
            return {
                ktAddress: "",
                rewardsRate: .8995,
                cycles: [],
                headers: [
                    { text: 'Cycle', value: 'cycle'},
                    { text: 'Balance at Snapshot', value: 'balance' },
                    { text: 'Rewards', value: 'reward' },
                    { text: 'Status', value: 'status' },
                ],
                pagination: {
                    descending: true
                },
                rowDisplay: "info"
            }
        },
        methods: {
            renderRewardsTable: function() {
                axios
                    .get("https://api6.tzscan.io/v3/delegator_rewards/"+this.ktAddress)
                    .then(response => {
                        if (response.status === 200) {
                            this.cycles = response.data.filter(row =>
                                row.delegate.tz === "tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh"
                            )
                            if (this.cycles.length < 1) {
                                this.rowDisplay = "error"
                            }
                        } else {
                            this.rowDisplay = "error"
                        }
                    })

            },
            calcReward: function(balance, totalBalance, rewards) {
                return ((parseInt(balance)/parseInt(totalBalance))*this.rewardsRate*parseInt(rewards) * 1E-6).toFixed(3)
            },
            maybeEstimated: function(status) {
                if (status === "cycle_pending" || status === "cycle_in_progress") {
                    return " (Estimated)"
                } else {
                    return ""
                }
            },

            getStatus: function(status) {
                switch(status) {
                    case "cycle_pending":
                        return {text: "Pending", class: "grayRow"}
                    case "cycle_in_progress":
                        return {text: "In Progress", class: "blueRow"}
                    case "rewards_pending":
                        return {text: "Frozen", class: 'navajoWhiteRow'}
                    case "rewards_delivered":
                        return {text: "Delivered", class: 'oliveDrabRow'}
                    default:
                        return {text: "Unknown", class: 'unknown'}
                }
            },

            getStatusText: function(status) {
                return this.getStatus(status).text
            },

            getStatusClass: function(status) {
                return this.getStatus(status).class
            }

        }
    }
</script>

<style scoped>
    ::placeholder {
        color: black
    }

    .grayRow {
        background-color: rgba(128, 128, 128, 0.5);
    }

    .blueRow {
        background-color: rgba(100, 149, 237, 0.5);
    }

    .navajoWhiteRow {
        background-color: rgba(255, 222, 173, 0.5);
    }

    .oliveDrabRow {
        background-color: rgba(107, 142, 35, 0.5);
    }

</style>