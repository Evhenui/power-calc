<template>
  <section class="calc-body">
    <title-section>Расчет источника бесперебойного питания (расчет ИБП)</title-section>
    <input-checkbox 
      inputType="regular-sinusoid" 
      v-model="checkboxes.correctSineUPS"
    >
    ИБП с правильной синусоидой
    </input-checkbox>
    <power-calc-recommendation>Рекомендуемые ИБП:</power-calc-recommendation>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import UpsCalculation from '@/components/calculator/sections/UpsCalculation.vue';
import BatteryCalculation from '@/components/calculator/sections/BatteryCalculation.vue';
import UptimeCalculation from '@/components/calculator/sections/UptimeCalculation.vue';

import TitleSection from "@/components/calculator/sections/TitleSection.vue"
import PowerCalcRecommendation from "./PowerCalcRecommendation.vue";
import InputCheckbox from "@/components/calculator/UI/InputCheckbox.vue"

@Component({
  components: {
    UpsCalculation,
    BatteryCalculation,
    UptimeCalculation,
    TitleSection,
    PowerCalcRecommendation,
    InputCheckbox
  }
})
export default class PowerCalcMainComponent extends Vue {
  checkboxes = {
    correctSineUPS: false
  }
}
</script>
  
<style lang="scss" scoped>
.calc-body {

	&__section {
      border-bottom: 1px solid #8a8a8a;

        &:last-child {
            border-bottom: none;
        }

	}

}
</style>
  