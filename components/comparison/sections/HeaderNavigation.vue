<template>
   <section class="header-nav">
      <div class="header-nav__wrapper">
         <h1 class="header-nav__title">Сравнение товаров</h1>
         <nav class="header-nav__navbar">
            <h3 class="header-nav__subtitle">Категории товаров</h3>
            <ul class="header-nav__list">
               <li 
                  class="header-nav__list-item"
                  v-for="(item,id) in listSelected"
                  :key="id"
               >
                  <selected-navigation-item>
                     <template v-slot:name>{{item.name}}</template>
                     <template v-slot:amount>{{item.amount}}</template>
                  </selected-navigation-item>
               </li>
            </ul>
         </nav>
      </div>
   </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SelectedNavigationItem from "../UI/SelectedNavigationItem.vue";

@Component({
   components: {
      SelectedNavigationItem,
   }
})
export default class HeaderNavigationComponent extends Vue {
   listSelected = [
      {id: 1, name: 'Комплект резервного питания', amount: 12},
      {id: 2, name: 'Комплект питания', amount: 2},
      {id: 3, name: 'Комплект питания', amount: 2},
      {id: 4, name: 'Комплект резервного питания', amount: 12},
      {id: 5, name: 'Комплект резервного питания', amount: 12},
      {id: 6, name: 'Комплект питания', amount: 2},
   ]
}
</script>
 
<style lang="scss" scoped>
.header-nav {

   &__wrapper {
   }

   &__title {
      @include fontUnify(36, 43, 700);
      color: #2B2B2B;

      margin-bottom: 32px;

   }

   &__navbar {
      overflow-y: auto;

      &::-webkit-scrollbar{
        height: 8px;
        background-color: #D1D1D1;
        border-radius: 100px;

      }

      &::-webkit-scrollbar-thumb:horizontal{
         background-color: #393D38;
         border-radius: 100px;
      }

   }

   &__subtitle {
      @include fontUnify(20, 28, 400);
      letter-spacing: 0.02em;
      color: #2B2B2B;
      margin-bottom: 16px;
   }

   &__list {
      @include flex-container(row, left, center);
      gap: 16px;
      margin-bottom: 16px;
   }


}

</style>
 