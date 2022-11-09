<template>
   <section class="selecet">
      <input class="selecet__input" type="radio" name="new-post" id="new-post"> 
      <label class="selecet__label" for="new-post">
         <slot></slot>
      </label>
   </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class InputRadioComponent extends Vue {}
</script>
 
<style lang="scss" scoped>
.selecet {
   &__input {
      position: absolute;
      z-index: -1;

      opacity: 0;
   }

   &__label {
      display: inline-flex;

      position: relative;

      @include flex-container(row, left, center);
      gap: 16px;

      @include fontUnify(16, 24, 400);

      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      user-select: none;

      &::before {
         content: '';

         display: inline-block;

         width: 24px;
         height: 24px;

         flex-shrink: 0;
         flex-grow: 0;

         border: 1px solid #CDCFD0;
         border-radius: 50%;

         transition: all .1s ease-in-out;
      }

      &::after {
         content: '';

         width: 8px;
         height: 0;
         
         position: absolute;
         @include setAbs( 50%, 8px, auto, auto );

         border-radius: 50%;

         background-color: white;

         transition: all .1s ease-in-out;
         transform: translateY(-50%);
        }
   }

   &__input:not(:disabled):not(:checked) + &__label:hover::before {
      border-color: $color-main-dark;
   }
 
   &__input:checked + &__label::before {
      border-color: var(--color-primary-base);
      background-color: var(--color-primary-base);
   }

   &__input:checked + &__label::after {
      height: 8px;
   }

   &__input:disabled + &__label::before {
      background-color: #e9ecef;
   }
}

</style>
 