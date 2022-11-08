<template>
   <button 
      class="button"
      :class='{del: buttonType}'
   >
      <div class="button__image">
         <svg class="button__image-plus" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="button__image-state" d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
         <svg class="button__image-basket" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="button__image-state" d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="button__image-state" d="M10 17V11" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="button__image-state" d="M14 17V11" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="button__image-state" d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </div>
      <span class="button__name">
         <slot>lorem</slot>
      </span>
   </button>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({})
export default class ButtonWhiteComponent extends Vue {

   @Prop({required: false}) buttonType: boolean;

}
</script>
 
<style lang="scss" scoped>
.button {
   width: max-content;

   @include flex-container(row, left, center);
   gap: 10px;
   padding: 8px 31px;

   border: 1px solid $color-main;
   border-radius: 6px;

   background-color: white;

   transition: all .1s ease-in-out;

   &:hover {
      background-color: #FF5B00;

      border-color: #FF5B00;

      .button__name {
         color: white;
      }

      .button__image-state {
         stroke: white;
      }

   }

   &:active {
      background-color: #AC450B;
      
      border-color: #AC450B;

      .button__name {
         color: white;
      }

      .button__image-state {
         stroke: white;
      }

   }

   &:disabled {
      background-color: #8A8A8A;

      border-color: #8A8A8A;
      
      cursor: auto;

      .button__name {
         color: white;
      }

      .button__image-state {
         stroke: white;
      }

   }

   &.del {
      padding: 8px 26px;
   }

   &.del &__image-basket {
      display: flex;
   }

   &.del &__image-plus {
      display: none;

   }

      &__image {
         font-size: 0;
      }

      &__image-plus {
      }

      &__image-state {
         transition: all .1s ease-in-out;
      }

      &__image-basket {
         display: none;

      }

      &__name {
         @include fontUnify(18, 24, 400);
         letter-spacing: 0.02em;
         color: $color-main;

         transition: all .1s ease-in-out;
      }

}

</style>
 