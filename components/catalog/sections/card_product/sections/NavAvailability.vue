<template>
    <nav class="availability">
        <ButtonStatus :status="buttonStatus.inStock" />
        <div class="availability__suggestions">
            <Delivery :status="availbility.delivery" />
            <Credit :status="availbility.credit" />
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import Credit from "../UI/Credit.vue";
import Delivery from "../UI/Delivery.vue";
import ButtonStatus from "../UI/ButtonStatus.vue";

@Component({
components: {
    ButtonStatus,
    Credit,
    Delivery
},
})
export default class NavAvailabilityComponent extends Vue {
    buttonStatus: any = {
        inStock: 'in-stock',
        notAvailable: 'not-available',
        ends: 'ends',
        preOrder: 'pre-order'
    }
    availbility: any = {
        delivery: false,
        credit: false
    }
}
</script>

<style lang="scss" scoped>
.availability {
    @include flex-container(row, center, center);

    gap: 28px;

    &__suggestions {
        @include flex-container(row, center, center);

        gap: 16px;
    }
}
</style>
    