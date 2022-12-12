<template>
  <div class="input">
    <div class="input__wrapper">
      <input class="input__data-input" />
      <!--    <span class="input__units">
        <slot></slot>
      </span>
      <div class="input__input-error">
        <span class="input__error-text">Ошибка: данные некорректны</span>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class InputServicesComponent extends Vue {}
</script>

<style lang="scss" scoped>
.input {
  &__wrapper {
  }

  &__data-input {
    width: 100%;

    background-color: white;

    border: 1px solid #e3e5e6;
    border-radius: 8px;

    padding: 16px;
  }
}
</style>
  