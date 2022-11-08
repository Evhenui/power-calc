<template>
  <section class="menu-bar">
    <div class="menu-bar__wrapper">
      <h3 class="menu-bar__title">Характеристики:</h3>
      <section class="menu-bar__inputs">
        <InputRadio>Все</InputRadio>
        <InputRadio>Только отличия</InputRadio>
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
import ButtonWhite from "../UI/ButtonWhite.vue";
import InputRadio from "../UI/InputRadio.vue";

@Component({
  components: {
    ButtonWhite,
    InputRadio,
  },
})
export default class CharacteristicsBarComponent extends Vue {
  buttonClear: boolean = true;
}
</script>
 
<style lang="scss" scoped>
.menu-bar {
  &__wrapper {
    max-width: 274px;
    width: 100%;

    padding: 16px;

    background-color: white;

    border: 1px solid #e9e9e9;
  }

  &__title {
    @include fontUnify(16, 22, 600);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    margin-bottom: 16px;
  }

  &__inputs {
  }

  &__buttons {
    @include flex-container(column, flex-start, stretch);
    gap: 24px;
  }
}
</style>
 