<template>
    <div class="count-tooltip">
        {{ count }}
    </div>
</template>

<script>
    export default {
        name: 'CountTooltip',

        props: {
            count: {
                type: Number,
                default: 0,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .count-tooltip {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: $tooltip;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #fff;
        user-select: none;
    }
</style>