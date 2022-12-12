<template>
  <div class="card-location">
    <div class="card-location__wrapper">
      <div class="card-location__image">
        <slot name="image"></slot>
      </div>
      <p class="card-location__subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class CardLocationComponent extends Vue {}
</script>

<style lang="scss" scoped>
.card-location {
  --gap: 96px;

  @include set-item-count-in-row(3);

  @include bigMobile {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  &__wrapper {
    @include flex-container(column, center, center);

    gap: 24px;

    @include bigMobile {
      @include flex-container(row, flex-start, center);

      padding: 16px 8px;
      gap: 32px;
    }
  }

  &__image {
    flex: 1 1 auto;

    @include bigMobile {
      flex: none;
    }
  }

  &__subtitle {
    @include fontUnify(20, 28, 400);
    letter-spacing: 0.02em;
    text-align: center;
    color: black;
  }
}
</style>
  