<template>
  <section class="calc-section">
        <title-section>Расчет времени автономной работы ИБП</title-section>

        <section class="calc-section__body">
          <form class="calc-section__form-without-checkboxes" action="">
            <section class="calc-section__inputs-wrapper">
              <section class="calc-section__inputs-enter">
                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help">
                    <h3 class="calc-section__subtitle source-power">Нагрузка, W:</h3>
                    <helper-button
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                  </div>

                  <input-power 
                    :errorState = "stateInput.load"
                    typeInput="number"
                    maxSize="6" 
                    inputId="w" 
                    v-model.number="calculationUPSRuntime.load"
                  >W</input-power>
                </div>

                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help switch">
                    <h3 class="calc-section__subtitle source-power">КПД инвертора:</h3>
                    <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </helper-button>
                    <input-switch v-model="stateSwitch.switchBackupTime" />
                  </div>

                  <input-power 
                    :errorState = "stateInput.inverterEfficiency"
                    typeInput="number"
                    maxSize="6" 
                    :isDisable="!stateSwitch.switchBackupTime" 
                    inputId="persent" 
                    v-model.number="calculationUPSRuntime.inverterEfficiency">%
                    </input-power>
                </div>

                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help">
                    <h3 class="calc-section__subtitle source-power">Номинальное напряжение АКБ:</h3>
                  </div>

                  <input-power 
                    :errorState = "stateInput.ratedBatteryVoltage"
                    typeInput="number"
                    maxSize="6" 
                    inputId="v" 
                    v-model.number="calculationUPSRuntime.ratedBatteryVoltage">V
                  </input-power>
                </div>

                <div class="calc-section__data-input-section">
                  <div class="calc-section__input-help">
                    <h3 class="calc-section__subtitle source-power">Ёмкость АКБ:</h3>
                  </div>

                  <input-power 
                    :errorState = "stateInput.batteryCapacity"
                    typeInput="number"
                    maxSize="6" 
                    inputId="ah" 
                    v-model.number="calculationUPSRuntime.batteryCapacity">Ah
                  </input-power>
                </div>
              </section>

              <button-orange @getResult="getResultCalculationUPS" />
            </section>

            <div class="calc-section__data-input-section">
              <h3 class="calc-section__subtitle source-power result">Время работы ИБП:</h3>
              <input-power 
                typeInput="text"
                inputId="time"
                v-model.number="calculationUPSRuntimeResult"
                >часов</input-power>
            </div>
          </form>

          <power-calc-recommendation>Рекомендуемые АКБ:</power-calc-recommendation>
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

  getResultCalculationUPS():void {
    let watch:number;
    let resultState:boolean = false;

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

      let integer:Number;
      let fraction:Number;
      let sum:Number;

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
    column-gap: 16px;

  }

  &__data-input-section {
    max-width: 327px;
    width: 100%;

    @include bigMobile {
      max-width: 343px;

    }
  }

  &__subtitle {
    letter-spacing: 0.02em;
    @include fontUnify(20, 28, 400);
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
    @include flex-container(row, null, baseline);
    gap: 24px;
    flex-wrap: wrap;

    max-width: 1380px;
    width: 100%;

    @include bigMobile {
      flex-direction: column;
      gap: 32px;
      
    }

  }

}
</style>