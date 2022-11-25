<template>
  <div class="comparison">
    <div class="comparison__wrapper">
      <HeaderNavigation />
      <CharacteristicsHeader
        @sliderPosition="sliderPosition"
        @sliderMobilePosition="sliderMobilePosition"
        :mobileSize="mobileSize"
        :positionSlider="slider.mobileFooterTranslateX"
        :positionSliderCounter="sliderFooter.counter"
        :positionSliderTranslate="sliderFooter.translate"
      />
      <CharacteristicsMain
        :sliderTranslateX="slider.desktopTranslateX"
        :sliderMobileTranslateX="slider.mobileTranslateX"

        :positionSliderCounter="sliderHeader.counter"
        :positionSliderTranslate="sliderHeader.translate"
        :mobileSize="mobileSize"
        @sliderPositionMain="sliderPositionMain"
        @sliderPositionFooter="sliderPositionFooter"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import HeaderNavigation from "./sections/HeaderNavigation.vue";
import CharacteristicsHeader from "./sections/CharacteristicsHeader.vue";
import CharacteristicsMain from "./sections/CharacteristicsMain.vue";

@Component({
  components: {
    HeaderNavigation,
    CharacteristicsHeader,
    CharacteristicsMain,
  },
})
export default class ComparisonComponent extends Vue {
  mobileSize: number = 1024;
  
  slider = {
   desktopTranslateX: 0,
   mobileTranslateX: 0,
   mobileFooterTranslateX: 0
  }

  sliderFooter: any = {
    translate: 0,
    counter: 0
  }

  sliderHeader: any = {
    translate: 0,
    counter: 0
  }

  sliderPosition(translate: number, counter: number ) {
    this.sliderHeader.translate = translate;
    this.sliderHeader.counter = counter;
  }
  sliderMobilePosition(translate: number) {
    this.slider.mobileTranslateX = translate;
  }
  sliderPositionMain(translate: number) {
    this.slider.mobileFooterTranslateX = translate;
  }
  sliderPositionFooter(translate: number, counter: number ) {
    this.sliderFooter.translate = translate;
    this.sliderFooter.counter = counter;
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
