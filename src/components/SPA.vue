<template>
    <v-layout >
        <!--<v-parallax :src="require('../assets/bake.jpg')" height="800">-->
            <!--<TopBar/>-->
            <Header/>
        <!--</v-parallax>-->
    </v-layout>
</template>

<script>
    import Header from "@/components/Header"
    import TopBar from '@/components/TopBar'
    export default {
        name: "SPA",
        components: {Header, TopBar}
    }
</script>

<style scoped>

</style>