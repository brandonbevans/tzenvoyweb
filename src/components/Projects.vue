<template>
    <v-card id="projects">
        <v-layout>
            <v-container
                fluid
                grid-list-md
            >
                <v-layout wrap>
                    <v-flex xs6>
                        <v-img :src="require('@/assets/programming.jpeg')"></v-img>
                    </v-flex>
                    <v-flex xs6>
                        <h3 class="headline">Projects</h3>
                        <div>We're working on it!</div>
                        <div>If you have project ideas and/or you're not afraid of OCaml, connect with us!</div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped>

</style>