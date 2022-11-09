<template>
   <section 
      class="nav-item"
      :class="{active:isActive}"
      @click="isActive = !isActive"
   >
      <span class="nav-item__title">
         <slot name="name"></slot>
      </span>
      <div class="nav-item__amount-selected">
         <div class="nav-item__number-wrapper">
            <span class="nav-item__number-selected">
               <slot name="amount"></slot>
            </span>
         </div>
         <svg class="nav-item__delete" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 17V11" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 17V11" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      </div>
   </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";


@Component({
   components: {

   }
})
export default class SelectedNavigationItemComponent extends Vue {

   isActive:boolean = false;
}
</script>
 
<style lang="scss" scoped>
.nav-item {
   width: max-content;

   @include flex-container(row, left, center);
   gap: 8px;

   border: 1px solid #D7D7D7;
   border-radius: 8px;

   background-color: #D7D7D7;

   padding: 8px;

   cursor: pointer;
   transition: all .1s ease-in-out;

   &.active {
     border-color: $color-main;
     background-color: rgba(243, 108, 33, 0.1);
   }

   &.active &__title {
      color: $color-main;
   }

   &.active &__number-selected {
      color: white;
   }

   &.active &__number-wrapper {
      outline: none;
      background-color: $color-main;
   }

   &.delete &__delete {
      display: block;
   }

   &.delete &__number-wrapper {
      display: none;
   }

   &__title {
      @include fontUnify(16, 22, 400);
      letter-spacing: 0.02em;
      color: #2B2B2B;

      transition: all .1s ease-in-out;
   }

   &__number-wrapper {
      width: 24px;
      height: 24px;

      @include flex-container(row, center, center);

      border-radius: 50%;
      outline: 1px solid #393D38;

      transition: all .1s ease-in-out;
   }

   &__number-selected {
      @include fontUnify(12, 16, 400);
      letter-spacing: 0.02em;
      color: #393D38;
   }

   &__delete {
      display: none;
   }
}

</style>
 