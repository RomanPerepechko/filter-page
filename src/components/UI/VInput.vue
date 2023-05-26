<template>
    <input class="input" :placeholder="placeholder" type="text" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
    export default {
        name: 'VInput',

        props: {
            value: {
                type: String,
                default: '',
            },

            placeholder: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style lang="scss" scoped>
    .input {
        height: 48px;
        padding: 14px 16px;
        border: 1px solid $border-color;
        outline: none;
        background: transparent;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        transition: $default-transition;

        &:focus {
            border: 1px solid $focus;
        }
    }
</style>