<template>
  <section class="offers">
    <div class="offers__wrapper">
      <h1 class="offers__title">
        <slot name="title"></slot>
      </h1>
      <div class="offers__items">
        <slot name="item"></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class OffersComponent extends Vue {}
</script>

<style lang="scss" scoped>
.offers {
  &__wrapper {
    @include flex-container(column, center, center);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    padding: 32px;
    gap: 64px;

    @include bigMobile {
      gap: 24px;
    }
  }

  &__title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    text-align: center;
    color: #1f1f1f;

    @include bigMobile {
      @include fontUnify(16, 19, 700);
    }
  }

  &__items {
    @include flex-container(row, center);
    flex-wrap: wrap;

    gap: 24px;
  }
}
</style>
    