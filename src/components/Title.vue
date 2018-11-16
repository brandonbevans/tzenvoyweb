<template>
    <v-layout
            align-center
            column
            justify-center
    >
        <h1 class="display-4 font-weight-bold mb-3">Lucky Stakes</h1>
        <v-card flat >
            <v-container fill-height class="clickable"
                         v-clipboard:copy=bakingAddress
                         v-clipboard:success=onCopy>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline" v-text=bakingAddress></span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <a :href=tzscanLink target="_blank" class="text--darken-1 white--text">tzscan</a>
        <div class="text-xs-center" :style="{ visibility: showCopy }">
            <v-chip dark color="success" >Copied</v-chip>
        </div>
    </v-layout>
</template>

<script>
    export default {
        name: "Title",
        data: function() {
            return {
                bakingAddress: "tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh",
                tzscanLink: "https://tzscan.io/tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh",
                showCopy: "hidden"
            }
        },
        methods: {
            onCopy: function () {
                this.showCopy = "visible"
                setTimeout(() => this.showCopy = "hidden", 600)
            }
        }
    }
</script>

<style scoped>

</style>