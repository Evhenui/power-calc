<template>
  <div class="comparison">
    <div class="comparison__wrapper">
<!--       <HeaderNavigation />
      <CharacteristicsHeader
        @sliderPosition="sliderPosition"
        :mobileSize="mobileSize"
        :sliderCounter="slider.counter"
        :sliderTranslate="slider.translate"
      />
      <CharacteristicsMain
        @sliderPosition="sliderPosition"
        :mobileSize="mobileSize"
        :sliderCounter="slider.counter"
        :sliderTranslate="slider.translate"
      /> -->
      <CharacteristicsEmpty/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import HeaderNavigation from "./sections/HeaderNavigation.vue";
import CharacteristicsHeader from "./sections/CharacteristicsHeader.vue";
import CharacteristicsMain from "./sections/CharacteristicsMain.vue";
import CharacteristicsEmpty from "./sections/CharacteristicsEmpty.vue";

@Component({
  components: {
    HeaderNavigation,
    CharacteristicsHeader,
    CharacteristicsMain,
    CharacteristicsEmpty
  },
})
export default class ComparisonComponent extends Vue {
  mobileSize: number = 1024;

  slider: any = {
    translate: 0,
    counter: 0
  }

  sliderPosition(translate: number, counter: number ) {
    this.slider.translate = translate;
    this.slider.counter = counter;
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
