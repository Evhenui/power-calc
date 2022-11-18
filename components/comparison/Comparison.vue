<template>
   <div class="comparison">
      <div class="comparison__wrapper">
        <HeaderNavigation/>
        <CharacteristicsHeader 
           :positionScrollHeader="positionX"  
           @getPositionScroll="positionScrollTop"
           @getSizeCard="sizeCard"
           :mobileSize="mobileSize"
           :slider="slider"
        />
        <CharacteristicsMain 
         :positionScrollX="positionX"
         :mobileSize="mobileSize"
         :sizeCard="sizeCardProduct"
         :slider="slider"
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

  slider: any = {
    line: undefined,
    slides: 0,
    sliderWidth: 0,
    widthArray: [ 0 ],
    lineWidth: 0,
    offset: 0,
    step: 0,
    remainder: 0,
    maxSizeTranslate: 0,
    maxStep: 0
  }

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
