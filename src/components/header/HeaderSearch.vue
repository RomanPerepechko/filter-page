<template>
    <div class="header-search">
        <VInput class="header-search__input" v-model="searchQuery" :value="searchQuery" placeholder="Поиск по названию картины"/>

        <VButton title="Найти"/>
    </div>
</template>

<script>
    import VInput from '../common/VInput.vue';
    import VButton from '../common/VButton.vue';
    import { mapActions } from 'vuex';

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

        watch: {
            searchQuery(newVal) {
                this.setSearchQuery(newVal.toLowerCase());
            },
        },

        methods: {
            ...mapActions({
                setSearchQuery: 'setSearchQuery',
            }),
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