<template>
    <div class="header-search">
        <VInput class="header-search__input" v-model="searchQuery" :value="searchQuery" placeholder="Поиск по названию картины"/>

        <VButton title="Найти" @click.native="searchItems"/>
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
                if (newVal === '') {
                    this.setSearchQuery('');
                }
            },
        },

        methods: {
            ...mapActions({
                setSearchQuery: 'setSearchQuery',
            }),

            searchItems() {
                this.setSearchQuery(this.searchQuery.toLowerCase());
            }
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