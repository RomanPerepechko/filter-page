<template>
    <div class="site-links">
        <a class="site-links__link" v-for="link in links" :href="link.url" :key="`link_${link.url}`" target="_blank">
            <h5>{{ link.title }}</h5>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'SiteLinks',

        props: {
            links: {
                type: Array,
                default: () => ([]),
            },
        },
    };
</script>

<style lang="scss" scoped>
    .site-links {
        display: flex;
        align-items: center;

        &__link {
            margin-right: 48px;
            transition: $default-transition;
        }
    }
</style>