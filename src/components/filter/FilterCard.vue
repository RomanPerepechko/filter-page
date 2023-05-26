<template>
    <div class="filter-card" :class="{ '_sold': item.is_sold }">
        <div class="filter-card__img" :style="{ backgroundImage:`url(${item.img})` }"></div>

        <div class="filter-card__body">
            <h2 class="filter-card__title" v-html="item.title"></h2>

            <div class="filter-card__bottom" v-if="!item.is_sold">
                <div class="filter-card__price">
                    <h6 class="filter-card__old-price" v-if="item.oldprice">{{ splitPrice(item.oldprice) }} $</h6>

                    <h3 class="filter-card__new-price" v-if="item.price">{{ splitPrice(item.price) }} $</h3>
                </div>

                <VButton @click.native="addItem" :is-loading="isLoading" :is-in-cart="itemStatus" :title="buttonTitle"></VButton>
            </div>

            <h3 class="filter-card__status" v-else>
                Продана на аукционе
            </h3>
        </div>
    </div>
</template>

<script>
    import VButton from '../UI/VButton.vue';
    import axios from 'axios';
    import { mapActions, mapGetters } from 'vuex';
    import { splitThousands } from '@/assets/js/utils';

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

            splitPrice(price) {
                return splitThousands(price);
            },

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
            border: 1px solid $border-color;
            border-top: none;
        }

        &__title {
            margin-bottom: 22px;
        }

        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__old-price {
            text-decoration-line: line-through;
            color: $hint;
        }

        &__status {
            height: 48px;
        }
    }
</style>