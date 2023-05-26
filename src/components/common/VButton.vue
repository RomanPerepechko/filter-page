<template>
    <div class="button" :class="{'_in-cart': isInCart}">
        <div class="button__content" v-if="!isLoading && !isInCart" v-html="title"></div>

        <div class="button__content _loader" v-if="isLoading">
            <VLoader />
        </div>

        <div class="button__content" v-if="!isLoading && isInCart">
            <CheckIcon class="button__icon"/>
            <span v-html="title"></span>
        </div>
    </div>
</template>

<script>
    import CheckIcon from '../icons/CheckIcon.vue';
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
            CheckIcon,
        },
    };
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        min-width: 112px;
        height: 48px;
        background: #382e2b;
        color: #f4f6f9;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        user-select: none;
        cursor: pointer;
        transition: $default-transition;

        &._in-cart {
            background: #5b3a32;
        }

        &:hover {
            background: #776763;
        }

        &__content {
            position: absolute;
            display: flex;
            align-items: center;

            &._loader {
                width: 20px;
                height: 20px;
            }
        }

        &__icon {
            margin-right: 4px;
        }
    }
</style>