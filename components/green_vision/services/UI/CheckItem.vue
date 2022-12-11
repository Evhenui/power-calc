<template>
  <div class="item">
    <SvgIcon class="item__check" :icon="icons['check-price']" />
    <span class="item__text">
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
export default class CheckItemComponent extends Vue {}
</script>

<style lang="scss" scoped>
.item {
  @include flex-container(row, flex-start, start);

  gap: 16px;

  &__check {
    width: 24px;
    height: 24px;

    flex: 0 0 auto;

    color: #009b3e;
  }

  &__text {
    @include fontUnify(18, 25, 500);
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @include bigMobile {
      @include fontUnify(16, 22, 400);
    }
  }
}
</style>
