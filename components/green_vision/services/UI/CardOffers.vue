<template>
  <div class="card-offer">
    <div class="card-offer__wrapper">
      <div class="card-offer__image-wrapper">
        <slot name="image"></slot>
      </div>
      <h1 class="card-offer__title">
        <slot name="title"></slot>
      </h1>
      <p class="card-offer__subtitle">
        <slot name="subtitle"></slot>
      </p>
      <ButtonDetails />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import ButtonDetails from "./ButtonDetails.vue";

@Component({
  components: {
    ButtonDetails,
  },
})
export default class CardOffersComponent extends Vue {}
</script>

<style lang="scss" scoped>
.card-offer {
  --gap: 16px;

  @include set-item-count-in-row(3);

  position: relative;

  background-color: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @include bigMobile {
    @include set-item-count-in-row(1);
  }

  &__wrapper {
    min-height: 100%;

    @include flex-container(column, flex-start, center);

    padding: 139px 32px 32px 32px;

    @include bigMobile {
      padding: 123px 24px 24px 24px;
    }
  }

  &__image-wrapper {
    max-width: 192px;
    width: 100%;

    position: absolute;
    top: -50%;

    transform: translateY(50%);

    @include bigMobile {
      max-width: 148px;

      transform: translateY(65%);
    }
  }

  &__title {
    @include fontUnify(25, 35, 700);
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-align: center;
    color: black;

    margin-bottom: 16px;

    @include bigMobile {
      @include fontUnify(16, 19, 700);
    }
  }

  &__subtitle {
    flex: 1 1 auto;

    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    text-align: center;
    color: black;

    margin-bottom: 32px;
  }
}
</style>
  