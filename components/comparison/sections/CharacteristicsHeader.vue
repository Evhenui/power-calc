<template>
  <section class="characteristics-header">
    <div>
      <CharacteristicsBar :heightCard="sizeCard" ref="navigation" class="characteristics-header__bar" />
    </div>
    <section class="characteristics-header__items">
      <div class="characteristics-header__items-wrapper">
        <CardProduct v-for="(item, index) in 10" :key="index" ref="some" class="characteristics-header__item" />
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import CharacteristicsBar from "./CharacteristicsBar.vue";
import CardProduct from "@components/comparison/UI/product/CardProduct.vue"
import { Prop } from "vue-property-decorator";

@Component({
  components: {
    CharacteristicsBar,
    CardProduct
  },
})
export default class CharacteristicsHeaderComponent extends Vue {

  @Prop({required: false}) active: string;

  $refs: {
    some: CardProduct[],
    navigation: CharacteristicsBar
  };

  sizeCard: string = '';
  
  getSizeCard() {
    const cardProductElevent: any = this.$refs.some[0].$el;
    const cardSize: number = cardProductElevent.offsetHeight;
    if(window.innerWidth > 860) {
      this.sizeCard = `${cardSize}px`;
    } else {
      this.sizeCard = 'auto';
    }
  }

  mounted() {
    window.addEventListener('resize', this.getSizeCard)
  }
}
</script>
 
<style lang="scss" scoped>
.characteristics-header {
  @include flex-container(row, left);

  margin-bottom: 16px;

  @media (max-width: 860px) {
    @include flex-container(column, left);
  }

  &__items {
    overflow: hidden;
  }

  &__items-wrapper {
    @include flex-container(row, left, center);

    padding-bottom: 16px;

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
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
  }
}

</style>
 