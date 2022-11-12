<template>
  <section class="menu-bar">
    <div 
      class="menu-bar__wrapper"
      :style="{height: heightCard}"
    >
      <div class="menu-bar__section-wrapper">
        <h3 class="menu-bar__title">Характеристики:</h3>
        <div class="menu-bar__inputs">
          <InputSwitch v-model="switchState" />
          <span class="menu-bar__switch-title">Только отличия</span>
        </div>
      </div>
      <section class="menu-bar__buttons">
        <ButtonWhite :state="state">Добавить товар</ButtonWhite>
        <ButtonWhite :buttonType="buttonClear" :state="state">Очистить список</ButtonWhite>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import ButtonWhite from "../UI/ButtonWhite.vue";
import InputRadio from "../UI/InputRadio.vue";
import InputSwitch from "@components/calculator/UI/InputSwitch.vue";

@Component({
  components: {
    ButtonWhite,
    InputRadio,
    InputSwitch
  },
})


export default class CharacteristicsBarComponent extends Vue {
  @Prop({required: false}) heightCard: number;

  buttonClear: boolean = true;
  switchState: boolean = false;
  state: boolean = false;
  sizeMobileWindow: number = 860;

  changeSize(size:number) {
    this.state = window.innerWidth <= size ? true : false;
  }

  mounted() {
    this.changeSize(this.sizeMobileWindow);
    window.addEventListener('resize', () => {
      this.changeSize(this.sizeMobileWindow)
    });
  }

}
</script>
 
<style lang="scss" scoped>
.menu-bar {

  &__wrapper {
    --height: auto;

    max-width: 274px;
    width: 100%;
    height: var(--height);

    @include flex-container(column, space-between, left);

    border: 1px solid #e9e9e9;

    background-color: white;

    padding: 16px;

    @media (max-width: 860px) {
      max-width: 100%;
      height: auto;

      border: none;
      border-radius: 8px;

      gap: 24px;
    }
  }

  &__section-wrapper {
    @include flex-container(column, flex-start, left);
    gap: 16px;
  }

  &__title {
    @include fontUnify(16, 22, 600);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    @media (max-width: 860px) {
      display: none;
    }
  }

  &__inputs {
    @include flex-container(row, flex-start, center);
    
    gap: 16px;
  }

  &__switch-title {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__buttons {
    @include flex-container(column, flex-start, stretch);
    gap: 24px;

    @media (max-width: 860px) {
      @include flex-container(row, center, center);
    }
  }
}
</style>
 