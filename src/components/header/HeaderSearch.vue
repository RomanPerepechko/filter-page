<template>
    <div class="header-search">
        <VInput class="header-search__input" :value="searchQuery" placeholder="Поиск по названию картины"/>

        <VButton title="Найти"/>
    </div>
</template>

<script>
    import VInput from '../common/VInput.vue';
    import VButton from '../common/VButton.vue';

    export default {
        name: "HeaderSearch",

        data() {
            return {
                searchQuery: '',
            };
        },
        
        components: {
            VInput,
            VButton,
        },
    };
</script>

<style lang="scss" scoped>
    .header-search {
        display: flex;
        
        &__input {
            width: 394px;
        }
    }
</style>