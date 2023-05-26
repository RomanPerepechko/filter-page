<template>
    <div class="site-links">
        <a class="site-links__link" v-for="link in links" :href="link.url" :key="`link_${link.url}`" target="_blank">
            {{ link.title }}
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
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #343030;
            transition: $default-transition;

            &:hover {
                color: #9f9f9f;
            }
        }
    }
</style>