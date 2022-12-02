<template>
    <nav class="availability">
        <ButtonStatus :status="status.buttonStatus.inStock" />
        <div class="availability__suggestions">
            <Delivery :status="status.services.delivery" />
            <Credit :status="status.services.credit" />
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
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
    @Prop({ required: true }) status: any;
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
    