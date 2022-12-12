<template>
  <div class="card-location">
    <div class="card-location__wrapper">
      <div class="card-location__image">
        <slot name="image"></slot>
      </div>
      <div class="card-location__items">
        <slot name="item"></slot>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class CardLocationRowComponent extends Vue {}
</script>
  
  <style lang="scss" scoped>
.card-location {
  @include bigMobile {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  &__wrapper {
    min-height: 100%;

    @include flex-container(row, flex-start, center);

    gap: 24px;

    @include bigMobile {
      @include flex-container(row, flex-start, center);

      padding: 16px 8px;
      gap: 32px;
    }
  }

  &__image {
    max-width: 134px;
    width: 100%;
    @include bigMobile {
      max-width: 70px;
    }
  }

  &__items {
    @include flex-container(column, flex-start, flex-start);

    gap: 24px;
  }
}
</style>
    