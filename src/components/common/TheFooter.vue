<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <SiteLogo />

            <SiteLinks class="footer__links" :links="links"/>
            
            <FooterContacts class="footer__contacts" phone="74959999999" address="г. Воронеж, ул. Никитина, 119А"/>
        </div>
    </footer>
</template>

<script>
    import SiteLogo from './SiteLogo.vue';
    import SiteLinks from './SiteLinks.vue';
    import FooterContacts from '../footer/FooterContacts.vue';

    export default {
        name: "TheFooter",

        components: {
            SiteLogo,
            SiteLinks,
            FooterContacts,
        },

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
    };
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        min-width: 1280px;
        background: $footer-background;

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

        &__contacts {
            margin-left: auto;
        }
    }
</style>