<template>
  <div class="calc">
    <div class="calc__wrapper">
      <PowerCalcHeader>
        С помощью данного калькулятора можно ориентировочно рассчитать
        необходимую ёмкость аккумулятора для источника бесперебойного питания.
      </PowerCalcHeader>
      <PowerCalcMain />
      <PowerCalcFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import PowerCalcHeader from "@/components/calculator/sections/PowerCalcHeader.vue";
import PowerCalcMain from "@/components/calculator/sections/PowerCalcMain.vue";
import PowerCalcFooter from "@/components/calculator/sections/PowerCalcFooter.vue";

@Component({
  components: {
    PowerCalcHeader,
    PowerCalcFooter,
    PowerCalcMain,
  },
})
export default class PowerCalculatorComponent extends Vue {}
</script>
  
<style lang="scss" scoped>
.calc {
  @include flex-container(column, center, center);

  @extend %padding-wrp;

  &__wrapper {
    @extend %width-main;
  }
}
</style>
  