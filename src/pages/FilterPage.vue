<template>
    <div class="filter-page">
        <div class="filter-page__wrapper">
            <h1>Картины эпохи Возрождения</h1>

            <FilterList />
        </div>
    </div>
</template>

<script>
    import FilterList from '@/components/filter/FilterList.vue';

    export default {
        name: "FilterPage",

        components: {
            FilterList,
        },
    };
</script>

<style lang="scss" scoped>
    .filter-page {
        width: 100%;
        min-width: 1280px;
        
        &__wrapper {
            width: 100%;
            height: 500px;
            max-width: 1280px;
            min-width: 1280px;
            margin: 0 auto;
            padding: 45px 0;
        }

        h1 {
            margin-bottom: 40px;
        }
    }
</style>