<template>
    <v-content>
        <v-parallax :src="require('../assets/bake.jpg')" height="800">
            <TopBar />
            <Title />
            <About />
        </v-parallax>
    </v-content>
</template>

<script>
    import TopBar from '@/components/TopBar'
    import Title from '@/components/Title'
    import About from '@/components/About'
    export default {
        name: 'FrontPage',
        components: {TopBar, Title, About},
        data: function() {
            return {

            }
        },
        methods: {
            onCopy: function () {
                this.showCopy = "visible"
                setTimeout(() => this.showCopy = "hidden", 600)
            }
        }
    }
</script>

<style>
    .clickable {
        cursor: pointer;
    }
</style>