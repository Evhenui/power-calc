<template>
  <section>
    <HeaderNavigation />
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
    />
  </section>
</template>
  
  <script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import HeaderNavigation from "./HeaderNavigation.vue";
import CharacteristicsHeader from "./CharacteristicsHeader.vue";
import CharacteristicsMain from "./CharacteristicsMain.vue";

@Component({
  components: {
    HeaderNavigation,
    CharacteristicsHeader,
    CharacteristicsMain,
  },
})
export default class ComparisonMainComponent extends Vue {
  mobileSize: number = 1024;

  slider: any = {
    translate: 0,
    counter: 0,
  };

  sliderPosition(translate: number, counter: number) {
    this.slider.translate = translate;
    this.slider.counter = counter;
  }
}
</script>
  

  