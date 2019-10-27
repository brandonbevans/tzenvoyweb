<template>
    <v-card color="grey darken-2" id="rewards">
        <v-container grid-list-md text-xs-center>
            <v-layout align-center>
                <v-flex xs12>
                    <h2 class="headline">Report Generator</h2>
                    <div>Enter your KT address to generate a CSV with all of your received rewards:</div>
                    <input v-model="address" placeholder="address"><v-btn @click="generateReport">Generate</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ReportGenerator",
        data: function() {
            return {
                address: "",
                txData: [],
                rows: []
            }
        },
        methods: {
            generateReport: function() {
                axios
                    .get("https://api.tzstats.com/tables/flow?address=" + this.address + "&operation=transaction&category=balance")
                    .then(response => {
                        if (response.status === 200) {
                            this.txData = response.data.filter(tx =>
                                tx[19] === "tz1i9imTXjMAW5HP5g3wq55Pcr43tDz8c3VZ" ||
                                tx[19] === "tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh"
                            )
                            this.convertToCsv(this.txData)
                        } else {
                            //generate error
                        }
                    })
            },
            convertToCsv: function(txs) {
                let rows = txs.map(tx => ({
                    timestamp: tx[3],
                    amount: tx[9],
                    destination: tx[18],
                    sender: tx[19]
                }))
                // rows.forEach(row => {
                //     row.amount = row.amount / 1000000
                // })

                let csvContent = "data:text/csv;charset=utf-8,";
                let headers = ["Timestamp", "Currency", "Amount", "Sender", "Destination", "Type", "Fee"]
                csvContent += headers.join(",") + "\r\n"
                rows.forEach(rowObject => {
                    let row = rowObject.timestamp + "," + "XTZ" + "," +
                        rowObject.amount + "," +
                        rowObject.sender + "," +
                        rowObject.destination + "," +
                        "REWARD" + "," + "0";
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