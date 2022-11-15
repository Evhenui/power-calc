<template>
   <div class="comparison">
      <div class="comparison__wrapper">
        <HeaderNavigation/>
        <CharacteristicsHeader 
           :positionScrollHeader="positionX"  
           @getPositionScroll="positionScrollTop"
           @getSizeCard="sizeCard"
           :mobileSize="mobileSize"
        />
        <CharacteristicsMain 
         :positionScrollX="positionX"
         :mobileSize="mobileSize"
         :sizeCard="sizeCardProduct"
         />
      </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import HeaderNavigation from "./sections/HeaderNavigation.vue"
import CharacteristicsHeader from "./sections/CharacteristicsHeader.vue";
import CharacteristicsMain from "./sections/CharacteristicsMain.vue";

@Component({
  components: {
     HeaderNavigation,
     CharacteristicsHeader,
     CharacteristicsMain
  }
})
export default class ComparisonComponent extends Vue {

  positionX: number = 0;
  mobileSize: number = 1024;
  sizeCardProduct: number = 0;

  positionScrollTop(position: number){
     this.positionX = position;
  }
  positionScrollBottom(position: number){
     this.positionX = position;
  }
  sizeCard(size:number) {
     this.sizeCardProduct = size;
  }
}
</script>

<style lang="scss" scoped>
.comparison {
&__wrapper {
  @extend %width-main;

  @extend %padding-wrp;
  margin: 0 auto;

  @include bigMobile {
     padding: 0 0 0 16px;
  }
}
}
</style>
