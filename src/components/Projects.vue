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
                        <h4 class="subheading"><b>BakeToBank</b></h4>
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
            townHallDescription: "Once USDTZ comes into fruition I'd like to build a solution for delegators to split their rewards in XTZ and USDTZ, effectively being able to take payout in cash."
        })
    }
</script>

<style scoped>

</style>