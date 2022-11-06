<template>
    <section class="calc-enter-section">
        <!-- <title-section>Расчет источника бесперебойного питания (расчет ИБП)</title-section> -->
        <section class="calc-enter-section__body">
            <form class="calc-enter-section__form" action="">
                <section class="calc-enter-section__select">
                    <div class="calc-enter-section__checkbox">
                        <input-checkbox 
                            inputType="line-interactive"
                            v-model="checkboxes.interactiveUPSLine"
                        >
                        ИБП линейно интерактивные
                        </input-checkbox
                        >
                        <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</helper-button>
                    </div>

                    <div class="calc-enter-section__checkbox">
                        <input-checkbox 
                            inputType="regular-sinusoid" 
                            v-model="checkboxes.correctSineUPS"
                        >
                        ИБП с правильной синусоидой
                        </input-checkbox>
                        <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</helper-button>
                    </div>

                    <div class="calc-enter-section__checkbox">
                        <input-checkbox 
                            inputType="smart" 
                            v-model="checkboxes.smartUPS"
                        >
                        Smart ИБП Online
                        </input-checkbox>
                        <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</helper-button>
                    </div>

                    <div class="calc-enter-section__checkbox">
                        <input-checkbox 
                            inputType="hybrid" 
                            v-model="checkboxes.gibridUPS"
                        >   
                        ИБП гибридный MPPT с правильной синусоидой
                        </input-checkbox>
                        <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</helper-button>
                    </div>

                    <div class="calc-enter-section__checkbox">
                        <input-checkbox 
                            inputType="mppt" 
                            v-model="checkboxes.mpptUPS"
                        >
                        ИБП MPPT с правильной синусоидой
                        </input-checkbox>
                        <helper-button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</helper-button>
                    </div>

                    <div class="calc-enter-section__checkbox" >
                        <input-checkbox 
                            v-if="!checkboxes.selectAll" 
                            inputType="all" 
                            v-model="checkboxes.selectAll" 
                            @input="selectAllCheckboxes"
                        >Выбрать все
                        </input-checkbox>
                        <input-checkbox 
                            v-else inputType="all"
                            v-model="checkboxes.selectAll" 
                            @input="selectAllCheckboxes"
                        >Снять выделение
                        </input-checkbox>
                    </div>
                </section>

                <section class="calc-enter-section__inputs">
                    <div>
                        <h3 class="calc-enter-section__subtitle">Суммарная мощность приборов, подключаемые к ИБП:</h3>
                        <input-power 
                            typeInput="number" 
                            inputId="w" 
                            v-model.number="calculationUPS.instrumentPower"
                        >W
                        </input-power>
                    </div>

                    <div class="calc-enter-section__need-power">
                        <h3 class="calc-enter-section__subtitle">Необходимая мощность ИБП:</h3>
                        <div class="calc-enter-section__general-wrapper">
                            <input-power 
                                typeInput="number" 
                                inputId="w" 
                                v-model.number="calculationUPS.powerUPSW"
                            >W
                            </input-power>
                            <input-power 
                                typeInput="number" 
                                inputId="va" 
                                v-model.number="calculationUPS.powerUPSVA"
                            >VA
                            </input-power>
                        </div>
                    </div>

                    <button-orange />
                </section>
            </form>
           <!--  <power-calc-recommendation>Рекомендуемые ИБП:</power-calc-recommendation> -->
        </section>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import InputPower from '@/components/calculator/UI/InputPower.vue'
import InputCheckbox from '@/components/calculator/UI/InputCheckbox.vue'
import HelperButton from '@/components/calculator/UI/HelperButton.vue'
import ButtonOrange from '@/components/calculator/UI/ButtonOrange.vue'

@Component({
  components: {
    InputPower,InputCheckbox,
    HelperButton, ButtonOrange,
  
  }
})

export default class UpsCalculationComponent extends Vue {
    checkboxes: {
                interactiveUPSLine: false,
                correctSineUPS: false,
                smartUPS: false,
                gibridUPS: false,
                mpptUPS: false,
                selectAll: false
            };
            calculationUPS: {
                instrumentPower: '',
                powerUPSW: '',
                powerUPSVA: '',
                result: ''
            };
            selectAllCheckboxes():void {
                for (const key in this.checkboxes) {
                    if(this.checkboxes.selectAll) {
                        this.checkboxes[key] = true;
                    } else {
                        this.checkboxes[key] = false;
                    } 
                }
        }
}

</script>

<style lang="scss">
.calc-enter-section {
    border-bottom: 1px solid #8a8a8a;
    padding-top: 48px;
        &__body {
            padding-bottom: 48px;
        }

        &__form {
            @include flex-container($direction: row, $spacing: space-between, $alignment: null);
            margin-bottom: 56px;
            @media (max-width: 960px) {
                flex-direction: column;
                row-gap: 49px;
                margin-bottom: 48px;
            }
        }

        &__select {
            @include flex-container($direction: column, $spacing: null, $alignment: null);
            row-gap: 24px;
        }

        &__checkbox {
            @include flex-container($direction: row, $spacing: null, $alignment: center);
            column-gap: 16px;
        }

        &__inputs {
            @include flex-container($direction: column, $spacing: null, $alignment: left);
            row-gap: 56px;
            max-width: 678px;
            width: 100%;
            @media (max-width: 1250px) {
                max-width: 343px;
            }
            @media (max-width: 960px) {
                row-gap: 32px;
            }
        }

        &__subtitle {
            letter-spacing: 0.02em;
            @include font($font-size: 20, $line-height: 28, $weight: 400);
            color: #2b2b2b;
            margin-bottom: 24px;
            @media (max-width: 1250px) {
                max-width: 330px;
            }
            @media (max-width: 960px) {
                @include font($font-size: 16, $line-height: 22, $weight: 400);
            } 
        }
        
        &__general-wrapper {
            @include flex-container($direction: row, $spacing: null, $alignment: left);
            gap: 24px;
            flex-wrap: wrap;
        }
}
</style>