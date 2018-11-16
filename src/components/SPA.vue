<template>
    <v-content>
        <v-parallax :src="require('@/assets/bake.jpg')" height="800">
            <TopBar />
            <Title />
        </v-parallax>
        <v-layout column>
            <v-flex>
                <Projects />
            </v-flex>
            <v-flex>
                <RewardCalculator />
            </v-flex>
            <v-flex>
                <About />
            </v-flex>
        </v-layout>
        <Footer />
    </v-content>
</template>

<script>
    import TopBar from '@/components/TopBar'
    import Title from '@/components/Title'
    import About from '@/components/About'
    import Projects from '@/components/Projects'
    import RewardCalculator from "@/components/RewardCalculator"
    import Footer from '@/components/Footer'
    export default {
        name: 'SPA',
        components: {RewardCalculator, TopBar, Title, About, Projects, Footer}
    }
</script>

<style>

</style>