<template>
    <v-content fluid>
        <v-parallax :src="require('../assets/bake.jpg')" height="800">
            <v-toolbar flat class="transparent" absolute>
                <v-toolbar-title extension>Lucky Stakes</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <router-link to="#delegate" tag="button"><v-btn flat ripple>Delegate</v-btn></router-link>
                    <router-link to="#rewards" tag="button"><v-btn flat ripple>Reward Calculator</v-btn></router-link>
                    <router-link to="#about" tag="button"><v-btn flat ripple>About</v-btn></router-link>
                </v-toolbar-items>
            </v-toolbar>
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
            <v-layout align-center column justify-center>
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
        </v-parallax>
    </v-content>
</template>

<script>
    export default {
        name: 'FrontPage',
        data: function() {
            return {
                tzscanLink: "https://tzscan.io/tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh",
                tzscan: "tzscan",
                bakingAddress: "tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh",
                showCopy: "hidden",
                bakingDescription: "We're a group of Tezos fanatics who will continue to develop products on the Tezos" +
                        " network. By delegating to us, you're joining a team that will scale with the growth of the " +
                        " Tezos ecosystem. We will continue to grow and participate with the network as it matures."

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

<style>
    .clickable {
        cursor: pointer;
    }
</style>