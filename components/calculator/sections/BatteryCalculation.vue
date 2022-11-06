<template>
    <section class="calc-enter-section">
        <title-section>Расчет емкости аккумуляторной батареи для источника бесперебойного питания</title-section>
            <section class="calc-enter-section__body">
                <form class="calc-enter-section__form-without-checkboxes" action="">
                    <section class="calc-enter-section__inputs-wrapper">
                    <section class="calc-enter-section__inputs-enter">
                        <div class="calc-enter-section__data-input-section">
                        <div class="calc-enter-section__input-help">
                            <h3 class="calc-enter-section__subtitle source-power">Мощность ИБП:</h3>
                            <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</helper-button>
                        </div>

                        <input-power 
                            :errorState = "stateInput.powerUPS"
                            typeInput="number" 
                            inputId="w" 
                            v-model.number="calculationBattery.powerUPS"
                        >W
                        </input-power>
                        </div>

                        <div class="calc-enter-section__data-input-section">
                        <div class="calc-enter-section__input-help switch">
                            <h3 class="calc-enter-section__subtitle source-power">КПД инвертора:</h3>
                            <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</helper-button>
                            <input-switch v-model="stateSwitch.switchBatteryCapacity" />
                        </div>

                        <input-power 
                            :errorState = "stateInput.inverterEfficiency"
                            typeInput="number" 
                            inputId="w" 
                            :isDisable="!stateSwitch.switchBatteryCapacity" 
                            v-model.number="calculationBattery.inverterEfficiency">W</input-power>
                        </div>

                        <div class="calc-enter-section__data-input-section">
                        <div class="calc-enter-section__input-help">
                            <h3 class="calc-enter-section__subtitle source-power">Время работы:</h3>
                        </div>

                        <input-power 
                            :errorState = "stateInput.time"
                            typeInput="number" 
                            inputId="time" 
                            v-model.number="calculationBattery.time">часов</input-power>
                        </div>

                        <div class="calc-enter-section__data-input-section">
                        <div class="calc-enter-section__input-help">
                            <h3 class="calc-enter-section__subtitle source-power">Номинальное напряжение АКБ:</h3>
                        </div>

                        <input-power 
                            :errorState = "stateInput.ratedBatteryVoltage"
                            typeInput="number" 
                            inputId="v" 
                            v-model.number="calculationBattery.ratedBatteryVoltage">V</input-power>
                        </div>
                    </section>

                    <button-orange @getResult="getResultCalculationBattery" />
                    </section>

                    <div class="calc-enter-section__data-input-section">
                    <h3 class="calc-enter-section__subtitle source-power result">Минимальная ёмкость АКБ:</h3>
                    <input-power typeInput="text" inputId="ah" v-model.number="calculationBatteryResult">Ah</input-power>
                    </div>
                </form>
                <power-calc-recommendation>Рекомендуемые ИБП:</power-calc-recommendation>
            </section>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import TitleSection from "./TitleSection.vue"
import InputPower from '@/components/calculator/UI/InputPower.vue'
import InputCheckbox from '@/components/calculator/UI/InputCheckbox.vue'
import HelperButton from '@/components/calculator/UI/HelperButton.vue'
import ButtonOrange from '@/components/calculator/UI/ButtonOrange.vue'
import PowerCalcRecommendation from '@/components/calculator/sections/PowerCalcRecommendation.vue'
import InputSwitch from '@/components/calculator/UI/InputSwitch.vue'

@Component({
    components: {
        TitleSection, 
        InputPower, 
        InputCheckbox, 
        HelperButton, 
        ButtonOrange,
        InputSwitch,
        PowerCalcRecommendation
    }
})
export default class BatteryCalculationComponent extends Vue {
    calculationBattery: {
        powerUPS: '',
        inverterEfficiency: 0.8, 
        time: '',
        ratedBatteryVoltage:'',
    };
    calculationBatteryResult: string | number =  '';
    stateSwitch: {
        switchBatteryCapacity: false,
        switchBackupTime: false,
    };
    stateInput: {
        powerUPS: false,
        inverterEfficiency: false, 
        time: false,
        ratedBatteryVoltage:false,
    }

    getResultCalculationBattery():void {
        let a:Number;
        let Ah:Number;
        let total:Number;
        let resultState:boolean = false;
        for (const key in (this as any).calculationBattery) {
            if((this as any).calculationBattery[key] === '') {
              (this as any).stateInput[key] = true;
              resultState = false;    
            } else {
              (this as any).stateInput[key] = false;
               resultState = true;
            }
        }
        if(resultState) {
          a = (this as any).calculationBattery.powerUPS / (this as any).calculationBattery.ratedBatteryVoltage;
          Ah = + a * (this as any).calculationBattery.time;
          if((this as any).calculationBattery.inverterEfficiency > 1){
            total = + Ah / ((this as any).calculationBattery.inverterEfficiency / 100)
          } else {
            total = + Ah / ((this as any).calculationBattery.inverterEfficiency)
          }
          (this as any).calculationBatteryResult = total.toFixed(0);
        }
      }
}
</script>
  
<style lang="scss" scoped>
.calc-enter-section {

  &__inputs-wrapper {
    @include flex-container(column, flex-start, null);
    gap: 56px;
    margin-bottom: 56px;

    @media (max-width: 960px) {
      margin-bottom: 48px;
    }

  }

  &__form-without-checkboxes {
    margin-bottom: 56px;

    @media (max-width: 960px) {
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

    @media (max-width: 960px) {
      max-width: 343px;
    }
  }

  &__subtitle {
    letter-spacing: 0.02em;
    @include font(20, 28, 400);
    color: #2b2b2b;

    &.source-power {
      margin: 0;

      @media (max-width: 1250px) {
        max-width: 330px;
      }

      @media (max-width: 960px) {
        @include font(16, 22, 400);
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

    @media (max-width: 960px) {
      flex-direction: column;
      gap: 32px;
    }

  }

}
</style>
  