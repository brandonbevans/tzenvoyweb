<template>
  <v-app>
    <Header />
    <v-content class="grey lighten-3">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        name: "App",
        components: {Header}
    }
</script>
