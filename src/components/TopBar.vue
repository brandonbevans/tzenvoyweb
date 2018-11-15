<template>
    <v-toolbar flat class="transparent">
        <v-toolbar-title extension>Lucky Stakes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link to="#delegate" tag="button"><v-btn flat ripple>Delegate</v-btn></router-link>
            <router-link to="#rewards" tag="button"><v-btn flat ripple>Reward Calculator</v-btn></router-link>
            <router-link to="#about" tag="button"><v-btn flat ripple>About</v-btn></router-link>
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