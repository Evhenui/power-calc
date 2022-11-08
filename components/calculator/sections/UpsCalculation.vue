<template>
  <section class="calc-section">
    <TitleSection
      >Расчет источника бесперебойного питания (расчет ИБП)</TitleSection
    >
    <section class="calc-section__body">
      <form class="calc-section__form" action="">
        <section class="calc-section__select">
          <div class="calc-section__checkbox">
            <InputCheckbox
              inputType="line-interactive"
              v-model="checkboxes.interactiveUPSLine"
            >
              ИБП линейно интерактивные
            </InputCheckbox>
            <HelperButton
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</HelperButton
            >
          </div>

          <div class="calc-section__checkbox">
            <InputCheckbox
              inputType="regular-sinusoid"
              v-model="checkboxes.correctSineUPS"
            >
              ИБП с правильной синусоидой
            </InputCheckbox>
            <HelperButton
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</HelperButton
            >
          </div>

          <div class="calc-section__checkbox">
            <InputCheckbox inputType="smart" v-model="checkboxes.smartUPS">
              Smart ИБП Online
            </InputCheckbox>
            <HelperButton
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</HelperButton
            >
          </div>

          <div class="calc-section__checkbox">
            <InputCheckbox inputType="hybrid" v-model="checkboxes.gibridUPS">
              ИБП гибридный MPPT с правильной синусоидой
            </InputCheckbox>
            <HelperButton
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</HelperButton
            >
          </div>

          <div class="calc-section__checkbox">
            <InputCheckbox inputType="mppt" v-model="checkboxes.mpptUPS">
              ИБП MPPT с правильной синусоидой
            </InputCheckbox>
            <HelperButton
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</HelperButton
            >
          </div>

          <div class="calc-section__checkbox">
            <InputCheckbox
              v-if="!checkboxes.selectAll"
              inputType="all"
              v-model="checkboxes.selectAll"
              @input="selectAllCheckboxes"
              >Выбрать все
            </InputCheckbox>
            <InputCheckbox
              v-else
              inputType="all"
              v-model="checkboxes.selectAll"
              @input="selectAllCheckboxes"
              >Снять выделение
            </InputCheckbox>
          </div>
        </section>

        <section class="calc-section__inputs">
          <div>
            <h3 class="calc-section__subtitle">
              Суммарная мощность приборов, подключаемые к ИБП:
            </h3>
            <InputPower
              typeInput="number"
              maxSize="6"
              inputId="w"
              v-model.number="calculationUPS.instrumentPower"
              >W
            </InputPower>
          </div>

          <div class="calc-section__need-power">
            <h3 class="calc-section__subtitle">Необходимая мощность ИБП:</h3>
            <div class="calc-section__general-wrapper">
              <InputPower
                typeInput="text"
                maxSize="6"
                inputId="w"
                v-model.number="calculationUPS.powerUPSW"
                >W
              </InputPower>
              <InputPower
                typeInput="text"
                maxSize="6"
                inputId="va"
                v-model.number="calculationUPS.powerUPSVA"
                >VA
              </InputPower>
            </div>
          </div>

          <ButtonOrange>Рассчитать</ButtonOrange>
        </section>
      </form>
      <PowerCalcRecommendation>Рекомендуемые ИБП:</PowerCalcRecommendation>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import InputPower from "@/components/calculator/UI/InputPower.vue";
import InputCheckbox from "@/components/calculator/UI/InputCheckbox.vue";
import HelperButton from "@/components/calculator/UI/HelperButton.vue";
import ButtonOrange from "@/components/calculator/UI/ButtonOrange.vue";
import TitleSection from "@/components/calculator/sections/TitleSection.vue";
import PowerCalcRecommendation from "./PowerCalcRecommendation.vue";

@Component({
  components: {
    InputPower,
    InputCheckbox,
    HelperButton,
    ButtonOrange,
    TitleSection,
    PowerCalcRecommendation,
  },
})
export default class UpsCalculationComponent extends Vue {

  checkboxes = {
    interactiveUPSLine: false,
    correctSineUPS: false,
    smartUPS: false,
    gibridUPS: false,
    mpptUPS: false,
    selectAll: false,
  };
  calculationUPS = {
    instrumentPower: "",
    powerUPSW: "",
    powerUPSVA: "",
    result: "",
  };

  selectAllCheckboxes() {
    for (const key in this.checkboxes) {
      if (this.checkboxes.selectAll) {
        this.checkboxes[key] = true;
      } else {
        this.checkboxes[key] = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calc-section {
  border-bottom: 1px solid #8a8a8a;

  &__body {
    margin-bottom: 48px;
  }

  &__form {
    @include flex-container(row, space-between, null);
    margin-bottom: 56px;

    @include bigMobile {
      flex-direction: column;
      gap: 49px;
      margin-bottom: 48px;
    }
  }

  &__select {
    @include flex-container(column, null, null);
    gap: 24px;
  }

  &__checkbox {
    @include flex-container(row, null, center);
    gap: 16px;
  }

  &__inputs {
    @include flex-container(column, null, left);
    gap: 56px;

    max-width: 678px;
    width: 100%;

    @media (max-width: 1250px) {
      max-width: 343px;
    }
    @include bigMobile {
      row-gap: 32px;
    }
  }

  &__subtitle {
    letter-spacing: 0.02em;
    @include fontUnify(20, 28, 400);
    color: #2b2b2b;

    margin-bottom: 24px;

    @media (max-width: 1250px) {
      max-width: 330px;
    }
    @include bigMobile {
      @include fontUnify(16, 22, 400);
    }
  }

  &__general-wrapper {
    @include flex-container(row, null, left);
    gap: 24px;
    flex-wrap: wrap;
  }
}
</style>