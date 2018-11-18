<template>
    <v-toolbar flat class="transparent" fixed>
        <v-flex xs1>
            <v-card dark flat class="transparent mt-5 pt-3">
                <v-img :src="require('@/assets/white_logo_transparent_background.png')" contain></v-img>
            </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link to="#delegate" tag="button"><v-btn flat ripple v-scroll-to="'#delegate'">Delegate</v-btn></router-link>
            <router-link to="#projects" tag="button"><v-btn flat ripple v-scroll-to="'#projects'">Projects</v-btn></router-link>
            <router-link to="#rewards" tag="button"><v-btn flat ripple v-scroll-to="'#rewards'">Reward Calculator</v-btn></router-link>
            <router-link to="#about" tag="button"><v-btn flat ripple v-scroll-to="'#about'">About</v-btn></router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>

</style>