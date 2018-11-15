<template>
  <v-app dark>
    <router-view></router-view>
    <SPA />
  </v-app>
</template>

<script>
    import SPA from '@/components/SPA'
    export default {
        name: "App",
        components: {SPA}
    }
</script>
