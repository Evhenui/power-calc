<template>
  <div class="card-price">
    <div class="card-price__wrapper">
      <div class="card-price__type">
        <div class="card-price__image-wrapper">
          <slot name="image"></slot>
        </div>
        <h3 class="card-price__title">
          <slot name="title"></slot>
        </h3>
      </div>
      <h1 class="card-price__price">
        <slot name="price"></slot>
      </h1>
      <div class="card-price__serveces">
        <div
          v-for="(item, index) in values"
          :key="index"
          class="card-price__serveces-item"
        >
          <SvgIcon class="card-price__checkbox" :icon="icons['check-price']" />
          <p class="card-price__check-description">{{ item.itemName }}</p>
        </div>
      </div>
      <ButtonDetails />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import ButtonDetails from "./ButtonDetails.vue";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import { Prop } from "vue-property-decorator";

@Component({
  components: {
    ButtonDetails,
    SvgIcon,
  },
})
export default class CardPriceComponent extends Vue {
  @Prop({ required: false }) values: any;
}
</script>

<style lang="scss" scoped>
.card-price {
  --gap: 16px;

  @include set-item-count-in-row(3);

  background: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @include bigMobile {
    @include set-item-count-in-row(1);
  }

  &__wrapper {
    min-height: 100%;

    @include flex-container(column, center, center);

    padding: 32px;
    gap: 16px;
  }

  &__type {
    @include flex-container(row, center, center);

    gap: 16px;

    @include bigMobile {
      @include flex-container(column, center, center);
    }
  }

  &__image-wrapper {
  }

  &__title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: black;

    @include bigMobile {
      @include fontUnify(16, 19, 700);
    }
  }

  &__price {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: #009b3e;

    @include bigMobile {
      @include fontUnify(16, 22, 400);
    }
  }

  &__serveces {
    @include flex-container(column, flex-start);
    flex: 1 1 auto;

    gap: 24px;
    margin-bottom: 48px;

    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__serveces-item {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__checkbox {
    width: 24px;
    height: 24px;

    flex: 0 0 auto;

    color: #009b3e;
  }

  &__check-description {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: #1f1f1f;
  }
}
</style>
  