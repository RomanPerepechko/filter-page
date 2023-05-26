<template>
    <div class="footer-contacts">
        <div class="footer-contacts__phone" v-if="phone">
            <PhoneIcon class="footer-contacts__icon"/>

            <a :href="`tel:+${phone}`">
                <h5>+{{ phone }}</h5>
            </a>
        </div>

        <div class="footer-contacts__address" v-if="address">
            <LocationIcon class="footer-contacts__icon"/>

            <h5>{{ address }}</h5>
        </div>
    </div>
</template>

<script>
    import PhoneIcon from '../icons/PhoneIcon.vue';
    import LocationIcon from '../icons/LocationIcon.vue';

    export default {
        name: 'FooterContacts',

        props: {
            phone: {
                type: String,
                default: '',
            },

            address: {
                type: String,
                default: '',
            },
        },

        components: {
            PhoneIcon,
            LocationIcon,
        },
    };
</script>

<style lang="scss" scoped>
    .footer-contacts {
        display: flex;

        &__icon {
            margin-right: 8px;
        }

        &__address, &__phone {
            display: flex;
            align-items: center;
            color: $gray;
        }

        &__address {
            margin-left: 40px;
        }
    }
</style>