<template>
    <div id="app">
        <TheHeader />
            <main>
                <FilterPage />
            </main>
        <TheFooter />
    </div>
</template>

<script>
    import TheFooter from './components/common/TheFooter.vue';
    import TheHeader from './components/common/TheHeader.vue';
    import FilterPage from './pages/FilterPage.vue';

    export default {
        name: "App",

        components: {
            FilterPage,
            TheHeader,
            TheFooter,
        },
    };
</script>

<style lang="scss" module>
    #app {
        //
    }
</style>
