<template>
  <section class="calc-section">
    <TitleSection
      >Расчет емкости аккумуляторной батареи для источника бесперебойного
      питания</TitleSection
    >
    <section class="calc-section__body">
      <form class="calc-section__form-without-checkboxes" action="">
        <section class="calc-section__inputs-wrapper">
          <section class="calc-section__inputs-enter">
            <div class="calc-section__data-input-section">
              <div class="calc-section__input-help">
                <h3 class="calc-section__subtitle source-power">
                  Мощность ИБП:
                </h3>
                <HelperButton
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.</HelperButton
                >
              </div>

              <InputPower
                :errorState="stateInput.powerUPS"
                typeInput="number"
                maxSize="6"
                inputId="w"
                v-model.number="calculationBattery.powerUPS"
                >W</InputPower
              >
            </div>

            <div class="calc-section__data-input-section">
              <div class="calc-section__input-help switch">
                <h3 class="calc-section__subtitle source-power">
                  КПД инвертора:
                </h3>
                <HelperButton
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.</HelperButton
                >
                <InputSwitch v-model="stateSwitch.switchBatteryCapacity" />
              </div>

              <InputPower
                :errorState="stateInput.inverterEfficiency"
                typeInput="number"
                maxSize="6"
                inputId="w"
                :isDisable="!stateSwitch.switchBatteryCapacity"
                v-model.number="calculationBattery.inverterEfficiency"
                >W</InputPower
              >
            </div>

            <div class="calc-section__data-input-section">
              <div class="calc-section__input-help">
                <h3 class="calc-section__subtitle source-power">
                  Время работы:
                </h3>
              </div>

              <InputPower
                :errorState="stateInput.time"
                typeInput="number"
                maxSize="5"
                inputId="time"
                v-model.number="calculationBattery.time"
                >часов</InputPower
              >
            </div>

            <div class="calc-section__data-input-section">
              <div class="calc-section__input-help">
                <h3 class="calc-section__subtitle source-power">
                  Номинальное напряжение АКБ:
                </h3>
              </div>

              <InputPower
                :errorState="stateInput.ratedBatteryVoltage"
                typeInput="number"
                maxSize="6"
                inputId="v"
                v-model.number="calculationBattery.ratedBatteryVoltage"
                >V</InputPower
              >
            </div>
          </section>

          <ButtonOrange @getResult="getResultCalculationBattery">Рассчитать</ButtonOrange>
        </section>

        <div class="calc-section__data-input-section">
          <h3 class="calc-section__subtitle source-power result">
            Минимальная ёмкость АКБ:
          </h3>
          <InputPower
            typeInput="text"
            inputId="ah"
            v-model.number="calculationBatteryResult"
            >Ah</InputPower
          >
        </div>
      </form>
      <PowerCalcRecommendation>Рекомендуемые ИБП:</PowerCalcRecommendation>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import TitleSection from "./TitleSection.vue";
import InputPower from "@/components/calculator/UI/InputPower.vue";
import InputCheckbox from "@/components/calculator/UI/InputCheckbox.vue";
import HelperButton from "@/components/calculator/UI/HelperButton.vue";
import ButtonOrange from "@/components/calculator/UI/ButtonOrange.vue";
import PowerCalcRecommendation from "@/components/calculator/sections/PowerCalcRecommendation.vue";
import InputSwitch from "@/components/calculator/UI/InputSwitch.vue";

@Component({
  components: {
    TitleSection,
    InputPower,
    InputCheckbox,
    HelperButton,
    ButtonOrange,
    InputSwitch,
    PowerCalcRecommendation,
  },
})
export default class BatteryCalculationComponent extends Vue {

  calculationBatteryResult: string | number = "";

  calculationBattery = {
    powerUPS: "",
    inverterEfficiency: 0.8,
    time: "",
    ratedBatteryVoltage: "",
  };
  stateSwitch = {
    switchBatteryCapacity: false,
    switchBackupTime: false,
  };
  stateInput = {
    powerUPS: false,
    inverterEfficiency: false,
    time: false,
    ratedBatteryVoltage: false,
  };

  getResultCalculationBattery() {
    let a: Number;
    let Ah: Number;
    let total: Number;
    let resultState: boolean = false;

    for (const key in this.calculationBattery) {
      if (this.calculationBattery[key] === "") {
        this.stateInput[key] = true;
        resultState = false;
      } else {
        this.stateInput[key] = false;
        resultState = true;
      }
    }

    if (resultState) {
      a = + this.calculationBattery.powerUPS / + this.calculationBattery.ratedBatteryVoltage;
      Ah = + a * + this.calculationBattery.time;
      if (this.calculationBattery.inverterEfficiency > 1) {
        total = + Ah / (this.calculationBattery.inverterEfficiency / 100);
      } else {
        total = + Ah / this.calculationBattery.inverterEfficiency;
      }
      this.calculationBatteryResult = total.toFixed(0);
    }
  }
}
</script>
  
<style lang="scss" scoped>
.calc-section {
  &__body {
    margin-bottom: 48px;
  }

  &__inputs-wrapper {
    @include flex-container(column, flex-start);
    gap: 56px;

    margin-bottom: 56px;

    @include bigMobile {
      margin-bottom: 48px;
    }
  }

  &__form-without-checkboxes {
    margin-bottom: 56px;

    @include bigMobile {
      margin-bottom: 48px;
    }
  }

  &__checkbox {
    @include flex-container(row, null, center);
    column-gap: 16px;
  }

  &__data-input-section {
    max-width: 327px;
    width: 100%;

    @include bigMobile {
      max-width: 100%;
    }
  }

  &__subtitle {
    @include fontUnify(20, 28, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    &.source-power {
      margin: 0;

      @media (max-width: 1250px) {
        max-width: 330px;
      }

      @include bigMobile {
        @include fontUnify(16, 22, 400);
      }
    }
    &.result {
      margin-bottom: 24px;
    }
  }

  &__input-help {
    @include flex-container(row, null, center);
    gap: 16px;

    margin-bottom: 24px;

    &.switch {
      margin-bottom: 22px;
    }
  }

  &__inputs-enter {
    max-width: 1380px;
    width: 100%;

    @include flex-container(row, null, baseline);
    gap: 24px;
    flex-wrap: wrap;

    @include bigMobile {
      flex-direction: column;
      gap: 32px;
    }
  }
}
</style>
  