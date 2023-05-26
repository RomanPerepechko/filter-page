<template>
    <div class="footer-contacts">
        <div class="footer-contacts__phone" v-if="phone">
            <PhoneIcon class="footer-contacts__icon"/>

            <a :href="`tel:+${phone}`">+{{ formattedPhone }}</a>
        </div>

        <div class="footer-contacts__address" v-if="address">
            <LocationIcon class="footer-contacts__icon"/>

            <span>{{ address }}</span>
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

        computed: {
            formattedPhone() {
                return this.phone.replace(/[^0-9]/gim, '')
            },
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
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #555555;
        }

        &__address {
            margin-left: 40px;
        }
    }
</style>