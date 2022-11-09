<template>
  <div class="checkbox">
    <input
      class="checkbox__custom-checkbox"
      type="checkbox"
      :id="inputType"
      :name="inputType"
      :checked="value"
      @change="updateChecked"
    />
    <label class="checkbox__label" :for="inputType">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({})
export default class InputCheckboxComponent extends Vue {

  @Prop({ required: true }) inputType: string;
  @Prop({ required: true }) value: boolean;

  updateChecked(event) {
    this.$emit("input", event.target.checked);
  }
}
</script>
  
<style lang="scss" scoped>
.checkbox {
  &__custom-checkbox {
    width: 0;
    height: 0;
    
    position: absolute;
    z-index: -1;

    opacity: 0;
    visibility: hidden;
  }

  &__label {
    display: inline-flex;

    position: relative;

    align-items: center;

    @include fontUnify(16, 24, 400);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    
    user-select: none;
    &::before {
      content: "";

      width: 24px;
      height: 24px;

      display: inline-block;

      border: 1px solid $color-border-grey-light;
      border-radius: 50%;

      margin-right: 16px;
      flex-shrink: 0;
      flex-grow: 0;

      transition: all 0.1s ease-in-out;
    }

    &::after {
      content: "";

      width: 8px;
      height: 0;

      position: absolute;
      @include setAbs(50%, 8px, auto, auto);

      border-radius: 50%;

      background-color: white;

      transition: all 0.1s ease-in-out;
      transform: translateY(-50%);
    }
  }

  &__custom-checkbox:not(:disabled):not(:checked) + &__label:hover::before {
    border-color: $color-main-dark;
  }

  &__custom-checkbox:checked + &__label::before {
    border-color: $color-main;

    background-color: $color-main;
  }

  &__custom-checkbox:checked + &__label::after {
    height: 8px;
  }

  &__custom-checkbox:disabled + &__label::before {
    background-color: #e9ecef;
  }
}
</style>
  