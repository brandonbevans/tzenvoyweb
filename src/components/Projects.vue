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
            townHallDescription: "Now that Tezos' voting is in full swing, there needs to be a way to allow delegators" +
                " to voice their opinion to their bakers. This is essential for a republic. TownHall aims to provide a " +
                "forum for delegators to discuss and share their opinions of votes to their bakers and other delegators." +
                " TownHall will turn baking into more than just a business model, now they will be able to meet their" +
                " political responsibility that they owe to delegators.<br><br>" +
                "TownHall will also be cryptographically protected. You will only be able to see the discussion of your baker's TownHall, " +
                "and you'll use your Tezos wallet to prove which TownHall you belong to."
        })
    }
</script>

<style scoped>

</style>