<template>
  <section class="characteristics-header">
    <CharacteristicsBar />
    <section class="characteristics-header__items">
      <CardProduct class="characteristics-header__item" />
      <CardProduct class="characteristics-header__item" />
      <CardProduct class="characteristics-header__item" />
      <CardProduct class="characteristics-header__item" />
      <CardProduct class="characteristics-header__item" />
      <CardProduct class="characteristics-header__item" />
      <CardProduct class="characteristics-header__item" />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import CharacteristicsBar from "./CharacteristicsBar.vue";
import CardProduct from "@components/comparison/UI/product/CardProduct.vue"
@Component({
  components: {
    CharacteristicsBar,
    CardProduct
  },
})
export default class CharacteristicsHeaderComponent extends Vue {}
</script>
 
<style lang="scss" scoped>
.characteristics-header {
  @include flex-container(row, left);

  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  border-left: 1px solid #e9e9e9;

  &__items {
    @include flex-container(row, left, center);

    overflow: auto;

    &::-webkit-scrollbar {
      height: 8px;

      background-color: #d1d1d1;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:horizontal {
      background-color: #393d38;
      border-radius: 100px;
    }
  }

  &__item {
    border-right: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }
}

</style>
 