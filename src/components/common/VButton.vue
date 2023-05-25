<template>
    <div class="button" :class="{'_in-cart': isInCart}">
        <transition name="fade">
            <span v-if="!isLoading" v-html="title"></span>

            <VLoader class="button__loader" v-else/>
        </transition>
    </div>
</template>

<script>
    import VLoader from './VLoader.vue';

    export default {
        name: "VButton",

        props: {
            isLoading: {
                type: Boolean,
                default: false,
            },

            title: {
                type: String,
                default: '',
            },

            isInCart: {
                type: Boolean,
                default: false,
            },
        },

        components: {
            VLoader,
        },
    };
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 48px;
        padding: 14px 30px;
        background: #382e2b;
        color: #f4f6f9;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        user-select: none;
        cursor: pointer;
        transition: $default-transition;
        box-sizing: border-box;

        &._in-cart {
            background: #5b3a32;
        }

        &:hover {
            background: #776763;
        }
    }
</style>