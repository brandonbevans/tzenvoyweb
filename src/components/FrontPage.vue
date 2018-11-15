<template>
    <v-content>
    <v-parallax :src="require('../assets/bake.jpg')">
        <v-toolbar flat class="transparent">
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
            <h4 class="subheading">Let's get baking</h4>
        </v-layout>
    </v-parallax>
    </v-content>
</template>

<script>
    import VContent from "vuetify/lib/components/VGrid/VContent";
    export default {
        name: 'FrontPage',
        components: {VContent},
    }
</script>

<style>
    .container {
        width: available;
    }
</style>