<template>
   <section class="selecet">
      <input class="selecet__input" type="radio" name="new-post" id="new-post"> 
      <label class="selecet__label" for="new-post">
         <slot>lorem</slot>
      </label>
   </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";


@Component({
   components: {

   }
})
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
      @include flex-container(row, left, center);
      gap: 16px;

      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      @include fontUnify(16, 24, 400);

      display: inline-flex;

      align-items: center;
      user-select: none;

      position: relative;

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

         transition: all .1s ease-in-out;
         
         position: absolute;
         @include setAbs( 50%, 8px, auto, auto );

         transform: translateY(-50%);

         width: 8px;
         height: 0;

         border-radius: 50%;

         background-color: white;

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
 