<template>
    <v-layout align-center column justify-center id="about" class="scroll-y">
        <v-card flat width="50%">
            <v-container align-center md3>
                <v-layout align-center justify-center>
                    <v-flex xs12 flexbox>
                        <span v-text=emailAddress ></span>
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
                bakingDescription: "",
                emailAddress: "Contact: tzenvoy@gmail.com"
            }
        }
    }
</script>

<style scoped>

</style>