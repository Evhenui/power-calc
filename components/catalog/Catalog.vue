<template>
  <section class="catalog">
    <div class="catalog__wrapper">
        <h1 class="catalog__title">Название категории</h1>
        <section class="catalog__header">
          <SelectedFilter 
            class="catalog__filters"
            :filterItem="filterItem"
          />
     <!--      <SelectGroup 
            class="catalog__select"
            :selectList="selectItems"
          /> -->
        </section>
        <CatalogMain/>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SelectedFilter from "./sections/SelectedFilter.vue";
import CatalogMain from './sections/CatalogMain.vue'
import SelectGroup from "@components/common/buttons/SelectGroup.vue"

@Component({
  components: {
    SelectedFilter,
    CatalogMain,
    SelectGroup
  },
})
export default class CatalogComponent extends Vue {

    filterItem: Array<any> = [
      {name: 'Евровилка'},
      {name: '1000/900'},
      {name: '1000/900'},
      {name: '700-1200 грн'}
    ]
    selectItems: Array<any> = [
      {title: 'По умолчанию'},
      {title: 'Дешёвые'},
      {title: 'Дорогие'},
      {title: 'Популярные'},
    ]
}
</script>
  
<style lang="scss" scoped>
.catalog {

    &__wrapper {
        @extend %width-main;

        @extend %padding-wrp;
        margin: 0 auto;
    }

    &__title {
        @include fontUnify(36, 43, 700);
        color: #2B2B2B;

        margin-bottom: 32px;
    }

    &__header {
      @include flex-container(row, space-between, end);

      margin-bottom: 24px;
    }

    &__select {
      max-width: 363px;
    }

    &__filters {
        
    }
}
</style>
        