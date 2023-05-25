<template>
    <div class="filter-card" :class="{ '_sold': item.is_sold }">
        <div class="filter-card__img" :style="{backgroundImage:`url(${item.img})`}"></div>

        <div class="filter-card__body">
            <div class="filter-card__title" v-html="item.title"></div>

            <div class="filter-card__bottom" v-if="!item.is_sold">
                <div class="filter-card__price">
                    <div class="filter-card__old-price" v-if="item.oldprice">{{item.oldprice}} $</div>
                    <div class="filter-card__new-price" v-if="item.price">{{item.price}} $</div>
                </div>

                <VButton @click.native="addItem" :is-loading="isLoading" :title="buttonTitle"></VButton>
            </div>

            <div class="filter-card__status" v-else>
                Продана на аукционе
            </div>
        </div>
    </div>
</template>

<script>
    import VButton from '../common/VButton.vue';
    import axios from 'axios';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "FIlterCard",

        data() {
            return {
                isLoading: false,
            };
        },

        props: {
            item: {
                type: Object,
                default: () => ({}),
            },
        },

        components: {
            VButton,
        },


        methods: {
            ...mapActions({
                addToCart: 'addToCart',
                removeFromCart: 'removeFromCart',
            }),

            addItem() {
                this.isLoading = true;

                axios.get('https://jsonplaceholder.typicode.com/posts/1')
                    .then(() => {
                        setTimeout(() => { 
                            if (this.itemStatus) {
                                this.removeFromCart(this.item.id);
                                alert('Товар успешно удален из корзины!');
                            } else {
                                this.addToCart(this.item.id);
                                alert('Товар успешно добавлен в корзину!');
                            }
    
                            this.isLoading = false;
                        }, 500);
                    })
                    .catch(() => {
                        setTimeout(() => {
                            alert('Товар не был добавлен в корзину, попробуйте позже.');
                            this.isLoading = false;
                        }, 500);
                    });
            }
        },

        computed: {
            ...mapGetters({
                cart: 'cart',
            }),

            itemStatus() {
                return this.cart.includes(this.item.id);
            },

            buttonTitle() {
                return this.itemStatus ? 'В&nbsp;корзине' : 'Купить';
            },
        },
    };
</script>

<style lang="scss" scoped>
    .filter-card {
        width: 280px;
        min-width: 280px;
        height: 100%;

        &._sold {
            opacity: .6;
        }

        &__img {
            width: 100%;
            height: 160px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        &__body {
            padding: 20px 24px;
            border: 1px solid #e1e1e1;
            border-top: none;
        }

        &__title {
            margin-bottom: 22px;
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            color: #343030;
        }

        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__old-price {
            font-weight: 300;
            font-size: 14px;
            line-height: 150%;
            text-decoration-line: line-through;
            color: #a0a0a0;
        }

        &__new-price {
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
        }

        &__status {
            height: 48px;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            color: #343030;
        }
    }
</style>