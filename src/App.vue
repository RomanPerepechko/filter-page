<template>
    <div id="app">
        <TheHeader />
        <FilterPage />
    </div>
</template>

<script>
    import TheHeader from './components/common/TheHeader.vue';
    import FilterPage from './pages/FilterPage.vue';

    export default {
        name: "App",

        components: {
            FilterPage,
            TheHeader,
        },
    };
</script>

<style lang="scss" module>
#app {
}
</style>
