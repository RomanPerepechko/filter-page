<template>
    <header class="header">
        <div class="header__wrapper">
            <SiteLogo />
            
            <SiteLinks :links="links" class="header__links"/>

            <HeaderSearch class="header__search"/>

            <CartStatus class="header__status" :count="cart.length"/>
        </div>
    </header>
</template>

<script>
    import CartStatus from '../header/CartStatus.vue';
    import SiteLinks from './SiteLinks.vue';
    import HeaderSearch from '../header/HeaderSearch.vue';
    import SiteLogo from './SiteLogo.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: "TheHeader",

        data() {
            return {
                links: [
                    { url: '/catalog', title: 'Каталог', },
                    { url: '/delivery', title: 'Доставка', },
                    { url: '/pay', title: 'Оплата', },
                    { url: '/contacts', title: 'Контакты', },
                    { url: '/galery', title: 'О галерее', },
                ]
            }
        },

        components: {
            SiteLogo,
            SiteLinks,
            HeaderSearch,
            CartStatus
        },

        computed: {
            ...mapGetters({
                cart: 'cart',
            }),
        },
    };
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        min-width: 1280px;
        border-bottom: 1px solid #E1E1E1;

        &__wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            max-width: 1280px;
            min-width: 1280px;
            margin: 0 auto;
            padding: 24px 0;
        }

        &__links {
            margin-left: 48px;
        }

        &__search {
            margin-left: auto;
        }

        &__status {
            margin-left: 32px;
        }
    }
</style>