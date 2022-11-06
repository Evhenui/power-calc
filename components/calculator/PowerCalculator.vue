<template>
     <div class="calc">
        <div class="calc__wrapper">
            <power-calc-header>С помощью данного калькулятора можно ориентировочно рассчитать необходимую ёмкость аккумулятора для источника бесперебойного питания.</power-calc-header>
            <power-calc-main/>
            <power-calc-footer/>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import PowerCalcHeader from "@/components/calculator/sections/PowerCalcHeader.vue"
import PowerCalcMain from "@/components/calculator/sections/PowerCalcMain.vue"
import PowerCalcFooter from "@/components/calculator/sections/PowerCalcFooter.vue"
@Component({
    components: {
        PowerCalcHeader,
        PowerCalcFooter,
        PowerCalcMain
    }
})
export default class PowerCalculatorComponent extends Vue {

}
</script>
  
<style lang="scss" scoped>
.calc {
  &__wrapper {
    @include width-pad-main();

    margin: 0 auto;
    padding: 0 32px 0 32px;

    @media (max-width: 960px) {
      padding: 0 16px 0 16px;
    }

  }
  
}
</style>
  