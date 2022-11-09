<template>
  <div class="header-calc">
    <p class="header-calc__main-description">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({})
export default class PowerCalcHeaderComponent extends Vue {}
</script>
  
<style lang="scss" scoped>
.header-calc {
  border-radius: 16px;

  background-color: var(--color-blue-white);
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

  padding: 32px 24px;
  margin-bottom: 16px;

  &__main-description {
    max-width: 820px;
    width: 100%;

    @include fontUnify(20, 24, 600);
    text-align: center;
    letter-spacing: 0.02em;
    color: var(--color-ink-base);

    margin: 0 auto;

    @include bigMobile {
      @include fontUnify(16, 22, 400);
    }
  }
}
</style>
  