<template>
    <div class="cart-status">
        <CartIcon class="cart-status__icon"/>

        <CountTooltip class="cart-status__tooltip" v-if="count" :count="count"/>
    </div>
</template>

<script>
    import CartIcon from '../icons/CartIcon.vue';
    import CountTooltip from './CountTooltip.vue';

    export default {
        name: "CartStatus",

        components: {
            CartIcon,
            CountTooltip,
        },

        props: {
            count: {
                type: Number,
                default: 0,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .cart-status {
        position: relative;

        &__icon {
            opacity: 1;
            transition: $default-transition;
            cursor: pointer;
            
            &:hover {
                opacity: .6;
            }
        }

        &__tooltip {
            position: absolute;
            top: 0;
            right: -50%;
        }
    }
</style>