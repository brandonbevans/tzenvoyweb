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
                " to voice their opinion to their bakers. The ability for incumbents (bakers) to get input and correspond with their constituents is imperative for any " +
                "functional republic. TownHall aims to provide a " +
                "forum for delegators to discuss and share their opinions to their bakers and other delegators." +
                " TownHall will turn baking into more than just a business model, now they will be able to meet the" +
                " political responsibility that they owe to their delegators.<br><br>" +
                "TownHall will also be cryptographically protected. You will only be able to see the discussion of your baker's TownHall, " +
                "and you'll use your Tezos wallet to prove which TownHall you belong to.<br><br>In the future, I hope " +
                "that running a baker in stealth mode isn't enough. For a higher level of self governance, bakers also " +
                "have a responsibility to represent the collective opinion of their constituents.<br><br>" +
                "<h3>TzTownhall is live!</h3><br>" +
                "Check it out here <a href='http://www.tztownhall.com'>here</a> "
        })
    }
</script>

<style scoped>

</style>