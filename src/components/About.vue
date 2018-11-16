<template>
    <v-layout align-center column justify-center id="about">
        <v-card flat width="50%">
            <v-container align-center md3>
                <v-layout align-center justify-center>
                    <v-flex xs12 flexbox>
                        <span v-text=bakingDescription ></span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-layout>
</template>

<script>
    export default {
        name: "About",
        data: function() {
            return {
                bakingDescription: "We're a group of Tezos fanatics who will continue to develop products on the" +
                    " Tezos network. By delegating to us, you're joining a team that will scale with the growth of" +
                    " the Tezos ecosystem. We will continue to grow and participate with the network as it matures." +
                    " If you have project ideas, have questions about the delegation process, or want to reach out" +
                    " for any other reason - please reach out."
            }
        }
    }
</script>

<style scoped>

</style>