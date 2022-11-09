<template>
  <section class="calc-section">
        <TitleSection>Расчет времени автономной работы ИБП</TitleSection>

        <section class="calc-section__body">
          <form class="calc-section__form-without-checkboxes" action="">
            <section class="calc-section__inputs-wrapper">
              <section class="calc-section__inputs-enter">
                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help">
                    <h3 class="calc-section__subtitle source-power">Нагрузка, W:</h3>
                    <HelperButton
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </HelperButton>
                  </div>

                  <InputPower 
                    :errorState = "stateInput.load"
                    typeInput="number"
                    maxSize="6" 
                    inputId="w" 
                    v-model.number="calculationUPSRuntime.load"
                  >W</InputPower>
                </div>

                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help switch">
                    <h3 class="calc-section__subtitle source-power">КПД инвертора:</h3>
                    <HelperButton>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </HelperButton>
                    <InputSwitch v-model="stateSwitch.switchBackupTime" />
                  </div>

                  <InputPower 
                    :errorState = "stateInput.inverterEfficiency"
                    typeInput="number"
                    maxSize="6" 
                    :isDisable="!stateSwitch.switchBackupTime" 
                    inputId="persent" 
                    v-model.number="calculationUPSRuntime.inverterEfficiency">%
                    </InputPower>
                </div>

                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help">
                    <h3 class="calc-section__subtitle source-power">Номинальное напряжение АКБ:</h3>
                  </div>

                  <InputPower 
                    :errorState = "stateInput.ratedBatteryVoltage"
                    typeInput="number"
                    maxSize="6" 
                    inputId="v" 
                    v-model.number="calculationUPSRuntime.ratedBatteryVoltage">V
                  </InputPower>
                </div>

                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help">
                    <h3 class="calc-section__subtitle source-power">Ёмкость АКБ:</h3>
                  </div>

                  <InputPower 
                    :errorState = "stateInput.batteryCapacity"
                    typeInput="number"
                    maxSize="6" 
                    inputId="ah" 
                    v-model.number="calculationUPSRuntime.batteryCapacity">Ah
                  </InputPower>
                </div>
              </section>

              <ButtonOrange @getResult="getResultCalculationUPS">Рассчитать</ButtonOrange>
            </section>

            <div class="calc-section__data-input-section">
              <h3 class="calc-section__subtitle source-power result">Время работы ИБП:</h3>
              <InputPower 
                typeInput="text"
                inputId="time"
                v-model.number="calculationUPSRuntimeResult"
                >часов</InputPower>
            </div>
          </form>

          <PowerCalcRecommendation>Рекомендуемые АКБ:</PowerCalcRecommendation>
        </section>
      </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import InputPower from '@/components/calculator/UI/InputPower.vue'
import InputCheckbox from '@/components/calculator/UI/InputCheckbox.vue'
import HelperButton from '@/components/calculator/UI/HelperButton.vue'
import ButtonOrange from '@/components/calculator/UI/ButtonOrange.vue'
import TitleSection from "@/components/calculator/sections/TitleSection.vue"
import PowerCalcRecommendation from "./PowerCalcRecommendation.vue";
import InputSwitch from "../UI/InputSwitch.vue";

@Component({
  components: {
    TitleSection, 
    InputPower, 
    InputCheckbox, 
    HelperButton, 
    ButtonOrange, 
    PowerCalcRecommendation, 
    InputSwitch
  }
})

export default class PowerCalculatorComponent extends Vue {

  calculationUPSRuntimeResult: string =  '';

  calculationUPSRuntime = {
    load: '',
    inverterEfficiency: 0.8,
    ratedBatteryVoltage: '',
    batteryCapacity: '',
  };
  stateSwitch = {
    switchBatteryCapacity: false,
    switchBackupTime: false,
  };
  stateInput = {
    load: false,
    inverterEfficiency: false,
    ratedBatteryVoltage: false,
    batteryCapacity: false,
  };

  getResultCalculationUPS() {
    let watch:number;
    let resultState:boolean = false;
    let integer:Number;
    let fraction:Number;
    let sum:Number;

    for (const key in this.calculationUPSRuntime) {
      if(this.calculationUPSRuntime[key] === '') {
        this.stateInput[key] = true;
        resultState = false;    
      } else {
        this.stateInput[key] = false;
          resultState = true;
      }
    }
            
    if (+ this.calculationUPSRuntime.load > 1 && this.calculationUPSRuntime.load !== ''){
      watch = +(((+ this.calculationUPSRuntime.ratedBatteryVoltage * + this.calculationUPSRuntime.ratedBatteryVoltage ) / + this.calculationUPSRuntime.load) * (this.calculationUPSRuntime.inverterEfficiency / 100)).toFixed(2);
    } else {
      watch = +(((+ this.calculationUPSRuntime.ratedBatteryVoltage * + this.calculationUPSRuntime.ratedBatteryVoltage ) / + this.calculationUPSRuntime.load) * (this.calculationUPSRuntime.inverterEfficiency)).toFixed(2);
    }

    if(watch <= 1) {
      this.calculationUPSRuntimeResult = `${Math.ceil(+ watch * 60)}min`;
    } else if (watch > 1) {
      integer = Math.floor(Number(watch));
      fraction = + (+ watch - + integer).toFixed(2);
      sum = (+ fraction * 60);
      this.calculationUPSRuntimeResult = `${integer}h ${sum}min`;
    }
  }
}

</script>

<style lang="scss" scoped>
.calc-section {
  &__inputs-wrapper {
    @include flex-container(column, flex-start, null);
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
    gap: 16px;
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

    @include mobile {
      max-width: 100%;
    }
  }
}
</style>