<template>
    <v-card>
    <v-card color="grey darken-2" id="rewards">
        <v-container grid-list-md text-xs-center>
            <v-layout align-center>
                <v-flex xs12>
                    <h2 class="headline">Report Generator</h2>
                    <div>Enter your Tezos address to generate a CSV with all of your received rewards:</div>
                    <input v-model="address" placeholder="Your address"><v-btn @click="generateReport">Generate</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
    <v-card color="grey darken-2" id="rewards2">
        <v-container grid-list-md text-xs-center>
            <v-layout align-center>
                <v-flex xs12>
                    <h2 class="headline">Report Generator, Other Baker</h2>
                    <div>Enter your Tezos address to generate a CSV with all of your received rewards:</div><br>
                    <input v-model="bAddress" placeholder="Baker's PAYOUT address"><br><br>
                    <input v-model="address" placeholder="Your address"><br><v-btn @click="generateReport2">Generate</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
    </v-card>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ReportGenerator",
        data: function() {
            return {
                address: "",
                bAddress: "",
                txData: [],
                rows: []
            }
        },
        methods: {
            generateReport: function() {
                axios.get("https://api.tzkt.io/v1/Accounts/" + this.address + "/operations?limit=1000", {

                    })
                    .then(response => {
                        if (response.status === 200) {
                            this.txData = response.data.filter(tx =>
                                typeof tx.sender !== 'undefined' &&
                                typeof tx.target !== 'undefined' &&
                                tx.status === "applied" &&
                                (
                                tx.sender.address === "tz1i9imTXjMAW5HP5g3wq55Pcr43tDz8c3VZ" ||
                                tx.sender.address === "tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh") &&
                                tx.target.address === this.address
                            )
                            this.convertToCsv(this.txData)
                        } else {
                            //generate error
                        }
                    })
            },
            generateReport2: function() {
                axios.get("https://api.tzkt.io/v1/Accounts/" + this.address + "/operations?limit=1000", {

                })
                    .then(response => {
                        if (response.status === 200) {
                            this.txData = response.data.filter(tx =>
                                typeof tx.sender !== 'undefined' &&
                                typeof tx.target !== 'undefined' &&
                                tx.status === "applied" &&
                                tx.sender.address === this.bAddress &&
                                tx.target.address === this.address
                            )
                            this.convertToCsv(this.txData)
                        } else {
                            //generate error
                        }
                    })
            },
            convertToCsv: function(txs) {
                let rows = txs.map(tx => ({
                    timestamp: tx.timestamp,
                    amount: tx.amount / 1000000,
                    destination: tx.target.address,
                    sender: tx.sender.address
                })).filter(x => x.amount > 0)
                // rows.forEach(row => {
                //     row.amount = row.amount / 1000000
                // })

                let csvContent = "data:text/csv;charset=utf-8,";
                let headers = ["Transaction Type", "Buy Amount", "Buy Currency", "Date"]
                csvContent += headers.join(",") + "\r\n"
                rows.forEach(rowObject => {
                    let row =
                        "Income" + "," +
                        rowObject.amount + "," +
                        "XTZ" + "," + new Date(rowObject.timestamp).toISOString()
                    csvContent += row + "\r\n";
                })
                let encodedUri = encodeURI(csvContent);
                let link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "delegator_rewards.csv");
                document.body.appendChild(link);
                link.click()
            }
        }
    }
</script>

<style scoped>

</style>