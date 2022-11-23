<template>
   <div class="comparison">
      <div class="comparison__wrapper">
        <HeaderNavigation/>
        <CharacteristicsHeader 
           @getSizeCard="sizeCard"
           @sliderPosition="sliderPosition"
           @sliderMobilePosition="sliderMobilePosition"
           :mobileSize="mobileSize"
           :positionSlider="sliderMobileMainTranslateX"
        />
        <CharacteristicsMain 
         :sliderCounter="sliderCouner"
         :sliderTranslateX="sliderTranslateX"
         :sliderMobileTranslateX="sliderMobileTranslateX"
         :mobileSize="mobileSize"
         :sizeCard="sizeCardProduct"
         @sliderPositionMain="sliderPositionMain"
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

  mobileSize: number = 1024;
  sizeCardProduct: number = 0;
  sliderCouner: number = 0;
  sliderTranslateX: number = 0;
  sliderMobileTranslateX: number = 0;
  sliderMobileMainTranslateX: number = 0;

  sizeCard(size:number) {
     this.sizeCardProduct = size;
  }
  sliderPosition(counter: number, translateX: number) {
   this.sliderCouner = counter;
   this.sliderTranslateX = translateX;
  }
  sliderMobilePosition(translate: number) {
   this.sliderMobileTranslateX = translate;
  }
  sliderPositionMain(translate: number) {
   this.sliderMobileMainTranslateX = translate;
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
