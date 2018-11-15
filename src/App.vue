<template>
  <v-app dark>
    <FrontPage />
    <router-view></router-view>
  </v-app>
</template>

<script>
    import FrontPage from '@/components/FrontPage'
    export default {
        name: "App",
        components: {FrontPage}
    }
</script>
