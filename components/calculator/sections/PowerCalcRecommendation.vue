<template>
  <section class="recommendation">
    <h3 class="recommendation__title">
      <slot></slot>
    </h3>
    <section class="recommendation__items"></section>
    <ButtonCatalog>Каталог</ButtonCatalog>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import ButtonCatalog from "../UI/ButtonCatalog.vue";

@Component({
  components: {
    ButtonCatalog,
  },
})
export default class PowerCalcRecommendationComponent extends Vue {}
</script>

<style lang="scss" scoped>
.recommendation {
  text-align: center;

  &__title {
    @include fontUnify(20, 30, 600);
    text-transform: uppercase;
    color: $color-main;

    margin-bottom: 24px;

    @include bigMobile {
      @include fontUnify(16, 19, 500);
    }
  }

  &__items {
    @include flex-container(row, null, left);
    flex-wrap: wrap;
    gap: 31px;
    
    margin-bottom: 14px;

    @include bigMobile {
      gap: 16px 15px;
      margin-bottom: 24px;
    }
  }
}
</style>