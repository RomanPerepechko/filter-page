<template>
    <div class="loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'VLoader',
    };
</script>

<style lang="scss" scoped>
    .loader {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;

        div {
            display: inline-block;
            position: absolute;
            left: 2px;
            width: 4px;
            background: rgb(178, 173, 173);
            animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

            &:nth-child(1) {
                left: 2px;
                animation-delay: -0.24s;
            }

            &:nth-child(2) {
                left: 8px;
                animation-delay: -0.12s;
            }

            &:nth-child(3) {
                left: 14px;
                animation-delay: 0;
            }
        }
    }

    @keyframes loader {
        0% {
            top: 2px;
            height: 16px;
        }

        50%,
        100% {
            top: 6px;
            height: 8px;
        }
    }
</style>