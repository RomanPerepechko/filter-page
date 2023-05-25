<template>
    <div class="filter-list">
        <FilterCard class="filter-list__item" v-for="item in items" :key="`picture_${item.id}`" :item="item"/>
    </div>
</template>

<script>
    import FilterCard from './FilterCard.vue';

    export default {
        name: 'FilterList',

        components: {
            FilterCard,
        },

        data() {
            return {
                items: [
                    { id: 1, title: '«Рождение Венеры» Сандро Боттичелли', oldprice: 2000000, price: 1000000, img: require('@/assets/img/1.png'), is_sold: false },
                    { id: 2, title: '«Тайная вечеря»  Леонардо да Винчи', oldprice: null, price: 3000000, img: require('@/assets/img/2.png'), is_sold: false },
                    { id: 3, title: '«Сотворение Адама» Микеланджело', oldprice: 6000000, price: 5000000, img: require('@/assets/img/3.png'), is_sold: false },
                    { id: 4, title: '«Урок анатомии» Рембрандт', oldprice: null, price: null, img: require('@/assets/img/4.png'), is_sold: true },
                ],
            };
        },
    }
</script>

<style lang="scss" scoped>
    .filter-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__item {
            margin-right: 32px;
        }
    }
</style>