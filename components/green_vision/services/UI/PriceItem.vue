<template>
  <div class="price-item">
    <SvgIcon class="price-item__check" :icon="icons['check-price']" />
    <span class="price-item__text">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  components: {
    SvgIcon,
  },
})
export default class PriceItemComponent extends Vue {}
</script>

<style lang="scss" scoped>
.price-item {
    @include flex-container(row, flex-start, start);

    gap: 16px;

    &__check {
        width: 24px;
        height: 24px;

        flex: 0 0 auto;

        color: #009B3E;
    }

    &__text {
        @include fontUnify(18, 25, 500);
        letter-spacing: 0.02em;
        color: #1F1F1F;

        @include bigMobile {
          @include fontUnify(16, 22, 400);
        }
    }
}
</style>
