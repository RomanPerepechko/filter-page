<template>
    <div class="filter-page">
        <div class="filter-page__wrapper">
            <div class="filter-page__title">
                Картины эпохи Возрождения
            </div>

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
        
        &__wrapper {
            width: 100%;
            height: 500px;
            max-width: 1280px;
            margin: 0 auto;
            padding: 45px 0;
        }

        &__title {
            margin-bottom: 40px;
            font-weight: 700;
            font-size: 24px;
            line-height: 150%;
            color: #343030;
        }
    }
</style>