<template>
  <section class="catalog">
    <div class="catalog__wrapper">
        <h1 class="catalog__title">Название категории</h1>
        <nav class="catalog__navigation">
          <ButtonFilterMobile 
            @click.native="showFilters"
            class="catalog__filter-mobile" 
          />
          <ButtonFilter 
            class="catalog__button-filter" 
            @click.native="activeFilter"
          />
        </nav>
        <section class="catalog__header">
          <SelectedFilter 
            ref="selectedFilter"
            class="catalog__filters"
            :class="{active: activeFilters}"
            :style="{ '--height': heightFilters + 'px' }"
            :filterItem="filterItem"
          />
     <!--      <SelectGroup 
            class="catalog__select"
            :selectList="selectItems"
          /> -->
        </section>
        <CatalogMain :changeView="changeView"/>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SelectedFilter from "./sections/SelectedFilter.vue";
import CatalogMain from './sections/CatalogMain.vue'
import SelectGroup from "@components/common/buttons/SelectGroup.vue"
import ButtonFilter from "./UI/ButtonFilter.vue"
import ButtonFilterMobile from "./UI/ButtomFilterMobile.vue"

@Component({
  components: {
    SelectedFilter,
    CatalogMain,
    SelectGroup,
    ButtonFilter,
    ButtonFilterMobile
  },
})
export default class CatalogComponent extends Vue {

  $refs: {
    selectedFilter: SelectedFilter;
  };

    filterItem: Array<any> = [
      {name: 'Евровилка'},
      {name: '1000/900'},
      {name: '1000/900'},
      {name: '700-1200 грн'},
    ]
    selectItems: Array<any> = [
      {title: 'По умолчанию'},
      {title: 'Дешёвые'},
      {title: 'Дорогие'},
      {title: 'Популярные'},
    ]

    changeView: boolean = false;
    activeFilters: boolean = false;
    heightFilters: number = 0;

    activeFilter() {
      this.changeView = !this.changeView;
    }
//-------------------------------------------------------спросить----------------------------------------
    showFilters(event) {
      const button = event.currentTarget;

      button.classList.toggle('active');
      button.classList.contains('active') ?
      this.heightFilters = this.$refs.selectedFilter.$el.scrollHeight * 2 :
      this.heightFilters = 0;
    }

   /*  getHeightFilters() {
      this.heightFilters = this.$refs.selectedFilter.$el.scrollHeight * 2;
      console.log(this.heightFilters)
    }

    mounted() {
      this.getHeightFilters()
      window.addEventListener('resize', this.getHeightFilters)
    } */
}
</script>
  
<style lang="scss" scoped>
.catalog {
  @extend %padding-wrp;

    &__wrapper {
        @extend %width-main;

        margin: 0 auto;
        padding-bottom: 136px;
    }

    &__title {
        @include fontUnify(36, 43, 700);
        color: #2B2B2B;

        margin-bottom: 32px;

        @include bigMobile { 
          @include fontUnify(24, 34, 700);

          margin-bottom: 24px;
        }
    }

    &__navigation {
      display: none;

      @include bigMobile { 
        @include flex-container(row, space-between, end);

        background-color: white;

        border: 1px solid #D1D1D1;
        border-radius: 8px;

        padding: 16px;
        margin-bottom: 24px;
      }
    }

    &__header {
      @include flex-container(row, space-between, end);

      margin-bottom: 24px;
    }

    &__select {
      max-width: 363px;
    }

    &__button-filter {
      display: none;

      @include bigMobile { 
        display: block;
      }
    }

    &__filter-mobile {
      display: none;

      @include bigMobile { 
        display: flex;
      }
    }

    &__filters {
      @include bigMobile {
        width: 100%;
        --height: 0;
        height: var(--height);
    
        overflow: hidden;

        transition: all .3s ease-in-out;
        &.active {
          
        }
      }
    }
}
</style>
        