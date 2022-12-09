<template>
  <div class="card-set">
    <div class="card-set__wrapper">
      <div class="card-set__amount">
        <p class="card-set__amount-text">
          <slot name="amount"></slot>
        </p>
      </div>
      <div class="card-set__image">
        <slot name="image"></slot>
      </div>
      <p class="card-set__item-name">
        <slot name="name"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class CardBasicSetComponent extends Vue {}
</script>

<style lang="scss" scoped>
.card-set {
    --gap: 16px;

    @include set-item-count-in-row(3);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    &__wrapper {
        min-height: 100%;

        @include flex-container(column, center, center);

        padding: 16px 16px 32px 16px;
    }

    &__amount {
      width: 100%;

      @include flex-container(row, end);

      margin-bottom: 32px;

      @include bigMobile {
        margin: 0;
      }
    }

    &__amount-text {
        @include fontUnify(20, 28, 400);
        letter-spacing: 0.02em;
        color: #009B3E;
    }

    &__image {
        flex: 1 1 auto;
        
        margin-bottom: 16px;
    }

    &__item-name {
        @include fontUnify(20, 28, 400);
        letter-spacing: 0.02em;
        text-align: center;
        color: black;

        @include bigMobile {
          @include fontUnify(16, 22, 400);
        }
    }
}
</style>
  