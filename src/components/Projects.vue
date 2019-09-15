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
                        <h3 class="headline">Projects</h3><br><br>
                        <h4 class="subheading"><b>TownHall</b></h4>
                        <span v-html="townHallDescription"></span>
                        <div> </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "Projects",
        data: () => ({
            townHallDescription: "TownHall has essentially been added in Agora. More ideas are in the works"
        })
    }
</script>

<style scoped>

</style>