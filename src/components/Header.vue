<template>
    <v-toolbar flat extended>
        <v-toolbar-title extension>Liquid Stake</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link to="/tezos" tag="button"><v-btn flat ripple>Tezos</v-btn></router-link>
            <router-link to="/loom" tag="button"><v-btn flat ripple>Loom</v-btn></router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import Tezos from "./Tezos";
    import Loom from "./Loom";
    export default {
        name: 'Header',
        components: {Tezos, Loom},
    }
</script>

<style>

</style>