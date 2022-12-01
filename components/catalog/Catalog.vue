<template>
  <section class="catalog">
    <div class="catalog__wrapper">
        <h1 class="catalog__title">Название категории</h1>
        <SelectedFilter 
            class="catalog__filters"
            :filterItem="filterItem" 
        />
        <CatalogMain/>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SelectedFilter from "./sections/SelectedFilter.vue";
import CatalogMain from './sections/CatalogMain.vue'

@Component({
  components: {
    SelectedFilter,
    CatalogMain
  },
})
export default class CatalogComponent extends Vue {
    filterItem: Array<any> = [
        {name: 'Евровилка'},
        {name: '1000/900'},
        {name: '1000/900'},
        {name: '700-1200 грн'}
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

    &__filters {
        margin-bottom: 24px;
    }
}
</style>
        