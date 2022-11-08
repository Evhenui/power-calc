<template>
  <div class="calc-input">
    <div :class="{ error: errorState }" class="calc-input__wrapper">
      <input
        class="calc-input__data-input"
        :type="typeInput"
        :maxLength="maxSize"
        :id="inputId"
        :disabled="isDisable"
        :value="value"
        @input="updateName"
        @focus="cl = true"
        @blur="cl = false"
      />
      <span
        :class="{
          active: cl,
          disabled: isDisable,
        }"
        class="calc-input__units"
      >
        <slot></slot>
      </span>
      <div class="calc-input__input-error">
        <span class="calc-input__error-text">Ошибка: данные некорректны</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({})
export default class InputPowerComponent extends Vue {

  @Prop({ required: true }) inputId: string;
  @Prop({ required: false }) isDisable: boolean;
  @Prop({ required: false }) errorState: boolean;
  @Prop({ required: false }) maxSize: number;
  @Prop({ required: true }) typeInput: string;
  @Prop({ required: true }) value: [Number, String];

  cl: boolean = false;

  updateName(event) {
    let maxValue: string;

    if (event.target.value.length > + this.maxSize) {
      maxValue = event.target.value = event.target.value.slice(0, +this.maxSize);
    } else {
      maxValue = event.target.value;
    }

    this.$emit("input", maxValue);
  }
}
</script>
  
<style lang="scss" scoped>
.calc-input {
  max-width: 327px;
  width: 100%;

  @include bigMobile {
    max-width: 343px;
  }

  &__wrapper {
    position: relative;
  }

  &__wrapper.error &__data-input {
    border-color: #eb1717;
  }

  &__wrapper.error &__units {
    border-color: #eb1717;
  }

  &__wrapper.error &__input-error {
    opacity: 1;
  }

  &__data-input {
    @include fontUnify(16, 16, 400);
    color: #2b2b2b;

    background-color: white;

    border: 1px solid #bdbdbd;
    border-radius: 8px;

    width: 100%;
    height: 48px;

    padding: 16px;

    transition: all 0.1s ease-in-out;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;

      margin: 0;
    }

    &:focus {
      border-color: #8a8a8a;
    }

    &:disabled {
      border-color: #e9e9e9;

      color: #b4b6b8;
      cursor: auto;
    }
  }

  &__input-error {
    transition: all 0.1s ease-in-out;

    position: absolute;
    @include setAbs(auto, 0, auto, -21px);

    padding-top: 8px;

    opacity: 0;
  }

  &__error-text {
    letter-spacing: 0.02em;
    @include fontUnify(12, 16, 400);
    color: #eb1717;
  }

  &__units {
    transition: all 0.1s ease-in-out;

    position: absolute;
    @include setAbs(0, auto, 0, auto);

    @include flex-container(row, center, center);

    width: 87px;
    height: 100%;

    background-color: #f3f3f3;

    border: 1px solid #bdbdbd;
    border-radius: 8px;

    @include fontUnify(16, 16, 400);
    color: #2b2b2b;

    &.active {
      border-color: #8a8a8a;
    }

    &.disabled {
      border-color: #f3f3f3;

      color: #8a8a8a;
    }
  }
}
</style>
  