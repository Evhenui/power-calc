<template>
    <section class="calc-recommendation">
        <h3 class="calc-recommendation__title">
            <slot>lorem</slot>
            </h3>
        <section class="calc-recommendation__items">
        </section>
        <button-catalog/>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import ButtonCatalog from "../UI/ButtonCatalog.vue";
@Component({
  components: {
    ButtonCatalog
  }
})
export default class PowerCalcRecommendationComponent extends Vue {}
</script>

<style lang="scss">
.calc-recommendation {
    text-align: center;
    &__title {
      @include font($font-size: 20, $line-height: 30, $weight: 600);
      text-transform: uppercase;
      color: $color-main;
      margin-bottom: 24px;
      letter-spacing: 0.01em;
      @media (max-width: 960px) {
        @include font($font-size: 16, $line-height: 19, $weight: 500);
      }
    }
    &__items {
        @include flex-container($direction: row, $spacing: null, $alignment: left);
        flex-wrap: wrap;
        gap: 31.25px;
        margin-bottom: 14px;
        @media (max-width: 960px) {
            gap: 16px 15px;
            margin-bottom: 24px;
        }
    }
}
</style>