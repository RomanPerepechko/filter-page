<template>
    <div class="site-logo" :style="{backgroundImage:`url(${require('@/assets/img/logo.png')})`}"></div>
</template>

<script>
    export default {
        name: 'SiteLogo',
    };
</script>

<style lang="scss" scoped>
    .site-logo {
        width: 48px;
        min-width: 48px;
        height: 48px;
        background-position: center;
        background-size: contain;
    }
</style>