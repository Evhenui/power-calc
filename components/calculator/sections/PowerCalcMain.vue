<template>
  <section class="calc-body">
    <UpsCalculation class="calc-body__section" />
    <BatteryCalculation class="calc-body__section" />
    <UptimeCalculation class="calc-body__section" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import UpsCalculation from "@/components/calculator/sections/UpsCalculation.vue";
import BatteryCalculation from "@/components/calculator/sections/BatteryCalculation.vue";
import UptimeCalculation from "@/components/calculator/sections/UptimeCalculation.vue";

@Component({
  components: {
    UpsCalculation,
    BatteryCalculation,
    UptimeCalculation,
  },
})
export default class PowerCalcMainComponent extends Vue {}
</script>
  
<style lang="scss" scoped>
.calc-body {
  margin-bottom: 48px;

  &__section {
    border-bottom: 1px solid #8a8a8a;

    padding-top: 48px;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
  