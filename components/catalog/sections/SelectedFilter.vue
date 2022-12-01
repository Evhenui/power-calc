<template>
  <section class="selected-filters">
    <h3 class="selected-filters__title">Выбранные фильтры:</h3>
    <ul class="selected-filters__filters">
      <li 
        class="selected-filters__filter"
        v-for="(item,index) in filterItem"
        :key="index"
      >
        <FilterItem>{{item.name}}</FilterItem>
      </li>
    </ul>
  </section>
</template>
    
<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import FilterItem from "../UI/FilterItem.vue"

@Component({
  components: {
    FilterItem
  },
})
export default class SelectedFilterComponent extends Vue {
  @Prop({required: false}) filterItem: Array<any>;
}
</script>
    
<style lang="scss" scoped>
.selected-filters {
  @include flex-container(column, center, left);

  gap: 16px;

  &__title {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2B2B2B;
  }

  &__filters {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;

    gap: 16px;
  }

}
</style>
        