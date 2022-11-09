<template>
   <section class="characteristic">
      <div class="characteristic__header">
         <h1 class="characteristic__title">Характеристики</h1>
      </div>
      <section class="characteristic__wrapper">
         <nav class="characteristic__category-items">
            <div 
               v-for="(item, index) in characteristicItems"
               :key="index"
               class="characteristic__category-item"
            >
               <p class="characteristic__item-name">{{item.categoryName}}</p>
            </div>
         </nav>
         <section class="characteristic__slider">
            <div class="characteristic__slider-wrapepr">
               <section class="characteristic__slide">
                  <div 
                     class="characteristic__slide-category"
                     v-for="(item, index) in categoryItems"
                     :key="index"
                  >
                     <p class="characteristic__category-title">{{item.categoryName}}</p>
                  </div>
               </section>
            </div>
         </section>
      </section>
   </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";


@Component({
   components: {

   }
})
export default class CharacteristicsMainComponent extends Vue {
   characteristicItems = [
      {categoryName: 'Вес, кг'},
      {categoryName: 'Гарантия, мес'},
      {categoryName: 'Вес АКБ нетто, кг'},
      {categoryName: 'Габариты АКБ ДхШхВ, мм'},
      {categoryName: 'Вес ИБП нетто, кг'},
      {categoryName: 'Габариты ИБП ДхШхВ, мм'},
      {categoryName: 'Функция стабилизации напряжения AVR'},
      {categoryName: 'Тип подключения батареи к ИБП'},
      {categoryName: 'Тип подключения нагрузки к ИБП '},
      {categoryName: 'Тип подключения к сети'},
      {categoryName: 'Тип индикации'},
      {categoryName: 'Тип подключения к сети'},
   ];
   categoryItems = [
      {categoryName: '9,7'},
      {categoryName: '24 - на ИБП, 12 - на АКБ'},
      {categoryName: '5.2'},
      {categoryName: '180х75х166'},
      {categoryName: '4.5'},
      {categoryName: '220х150х270'},
      {categoryName: 'есть'},
      {categoryName: 'клеммы'},
      {categoryName: 'евророзетка'},
      {categoryName: 'евровилка'},
      {categoryName: 'LCD'},
      {categoryName: '1'},
   ];
}
</script>
 
<style lang="scss" scoped>

</style>
 