<template>
  <section class="menu-bar">
    <div 
      class="menu-bar__wrapper"
      :style="{height: `${heightCard}px`}"
    >
      <h3 class="menu-bar__title">Характеристики:</h3>
      <section class="menu-bar__inputs">
        <InputRadio nameInput="all" valueInput="all">Все</InputRadio>
        <InputRadio nameInput="only-difference" valueInput="only-difference">Только отличия</InputRadio>
      </section>
      <section class="menu-bar__buttons">
        <ButtonWhite>Добавить товар</ButtonWhite>
        <ButtonWhite :buttonType="buttonClear">Очистить список</ButtonWhite>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import ButtonWhite from "../UI/ButtonWhite.vue";
import InputRadio from "../UI/InputRadio.vue";

@Component({
  components: {
    ButtonWhite,
    InputRadio,
  },
})
export default class CharacteristicsBarComponent extends Vue {
  @Prop({required: false}) heightCard: number;

  buttonClear: boolean = true;

  mounted() {
   
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

    border: 1px solid #e9e9e9;

    background-color: white;

    padding: 16px;
  }

  &__title {
    @include fontUnify(16, 22, 600);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    margin-bottom: 16px;
  }

  &__inputs {
    @include flex-container(column, flex-start, flex-start);
    
    gap: 16px;
  }

  &__buttons {
    @include flex-container(column, flex-start, stretch);
    gap: 24px;
  }
}
</style>
 