<template>
  <section
    ref="characteristics"
    class="characteristics-header"
    :class="[
      { active: isActiveScroll },
      { 'scroll-mobile': isActiveScrollMobile },
    ]"
  >
    <div class="characteristics-header__wrapper">
      <div class="characteristics-header__nav">
        <CharacteristicsBar
          :heightCard="cardSize"
          :activeScroll="isActiveScroll"
          :mobileSize="mobileSize"
          ref="navigation"
          class="characteristics-header__nav-bar"
        />
      </div>
      <section class="characteristics-header__items" ref="sliderWindow">
        <ButtonArrow
          class="characteristics-header__button left"
          moveSlide="left"
          @click.native="prevSlide"
        />

        <div
          ref="sliderWidth"
          class="characteristics-header__items-wrapper"
          :style="{'--translate': - slider.stepOffset + 'px'}"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <CardProduct
            v-for="(item, index) in 10"
            :key="index"
            ref="slides"
            :scrollState="isActiveScroll"
            :scrollStateMobile="isActiveScrollMobile"
            :mobileSize="mobileSize"
            class="characteristics-header__item"
          />
        </div>

        <ButtonArrow
          class="characteristics-header__button right"
          :direction="buttonRight"
          @click.native="nextSlide"
          moveSlide="right"
        />
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop, Watch } from "vue-property-decorator";
import CharacteristicsBar from "./CharacteristicsBar.vue";
import CardProduct from "@components/comparison/UI/product/CardProduct.vue";
import ButtonArrow from "../UI/ButtonArrow.vue";

@Component({
  components: {
    CharacteristicsBar,
    CardProduct,
    ButtonArrow,
  },
})
export default class CharacteristicsHeaderComponent extends Vue {
  @Prop({ required: false }) active: string;
  @Prop({ required: false }) mobileSize: number;

  $refs: {
    slides: CardProduct[];
    navigation: CharacteristicsBar;
    characteristics: HTMLElement;
    sliderWrapper: HTMLElement;
    sliderWindowWidth: HTMLElement;

    sliderWidth: HTMLElement;
    sliderWindow: HTMLElement;
    
  };

  sizeCard: string = "";
  buttonRight: boolean = true;
  isButton: boolean = false;
  isActiveScroll: boolean = false;
  isActiveScrollMobile: boolean = false;
  cardSize: string = "";

 /*  slider: any = {
    line: undefined,
    slides: 0,
    sliderWidth: 0,
    widthArray: [],
    lineWidth: 0,
    offset: 0,
    step: 0,
    remainder: 0,
    maxSizeTranslate: 0,
    maxStep: 0,
    positionX: null,
    differencePosition: 0,
  }; */

  slider: any = {
    distance: 0,
    stepOffset: 0,
    counter: 1
  }
 

  resizeEl() {
    const observer = new ResizeObserver((entries) => {
      this.cardSize = entries[0].borderBoxSize[0].blockSize + "px";
    });
    observer.observe(this.$refs.slides[0].$el);
  }

  nextSlide() {
 /*    this.slider.remainder =
      this.slider.lineWidth -
      this.slider.sliderWidth -
      (this.slider.offset + this.slider.widthArray[this.slider.step]);

    if (this.slider.remainder >= 0) {
      this.slider.offset += this.slider.widthArray[this.slider.step];

      window.getComputedStyle(this.slider.line).getPropertyValue("--translate");
      this.slider.line.style.setProperty(
        "--translate",
        -this.slider.offset + "px"
      );

      this.$emit("getSliderValue", this.slider.offset);
    } else {
      window.getComputedStyle(this.slider.line).getPropertyValue("--translate");
      this.slider.line.style.setProperty(
        "--translate",
        -(this.slider.lineWidth - this.slider.sliderWidth) + "px"
      );

      this.slider.offset = this.slider.lineWidth - this.slider.sliderWidth;
      this.$emit(
        "getSliderValue",
        this.slider.lineWidth - this.slider.sliderWidth
      );
    }

    if (this.slider.step < this.slider.maxStep + 1) {
      this.slider.step++;
    } else {
      this.slider.offset = this.slider.maxSizeTranslate;
    } */
    const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
    const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
    const slidesLength: number = this.$refs.slides.length;
    const slideWidth: number = sliderWidth / slidesLength;

    this.slider.distance = sliderWidth - sliderWindow - (this.slider.stepOffset + slideWidth);

    if (this.slider.distance >= 0) {
      this.slider.stepOffset = slideWidth * this.slider.counter;

      this.slider.counter++
    } else {
      this.slider.stepOffset = sliderWidth - sliderWindow;
    }

   
  }

  prevSlide() {
 /*    this.slider.remainder =
      this.slider.lineWidth -
      this.slider.sliderWidth -
      (this.slider.offset - this.slider.widthArray[this.slider.step]);
    if (this.slider.remainder <= this.slider.maxSizeTranslate) {
      this.slider.offset =
        this.slider.offset - this.slider.widthArray[this.slider.step];

      window.getComputedStyle(this.slider.line).getPropertyValue("--translate");
      this.slider.line.style.setProperty(
        "--translate",
        -this.slider.offset + "px"
      );

      this.$emit("getSliderValue", this.slider.offset);
    } else {
      window.getComputedStyle(this.slider.line).getPropertyValue("--translate");
      this.slider.line.style.setProperty("--translate", 0 + "px");

      this.slider.offset = 0;
      this.$emit("getSliderValue", 0);
    }

    if (this.slider.step > 1) {
      this.slider.step--;
    } */
  }

  getSizeSlider() {
 /*    this.slider.line = this.$refs.sliderWrapper;
    this.slider.slides = this.$refs.slide.length;

    this.$refs.slide.forEach((item) => {
      this.slider.lineWidth += (item as any).$el.offsetWidth;
    });

    window.getComputedStyle(this.slider.line).getPropertyValue("--width");
    this.slider.line.style.setProperty("--width", this.slider.lineWidth + "px"); */
  }

  getNullStepSlider() {
/*     this.slider.sliderWidth = this.$refs.sliderWidth.offsetWidth;
    this.slider.remainder =
      this.slider.lineWidth -
      this.slider.sliderWidth -
      (this.slider.offset + this.slider.widthArray[this.slider.step]);

    this.slider.offset = 0;
    this.slider.step = 1; */
  }

  getSliderStep() {
 /*    this.slider.maxStep = Math.ceil(
      this.slider.slides -
        this.$refs.sliderWidth.offsetWidth / this.$refs.slide[0].$el.offsetWidth
    );
    this.$refs.slide.forEach((item, index) => {
      this.slider.widthArray[index + 1] = (item as any).$el.offsetWidth;
    });
    this.slider.maxSizeTranslate =
      this.slider.widthArray[1] *
      (this.slider.slides -
        this.$refs.sliderWidth.offsetWidth /
          this.$refs.slide[0].$el.offsetWidth); */
  }

  scrollState() {
    if (window.scrollY >= this.$refs.characteristics.offsetTop) {
      if (window.innerWidth > this.mobileSize) {
        this.isActiveScrollMobile = false;
        this.isActiveScroll = true;
      } else {
        this.isActiveScroll = false;
        this.isActiveScrollMobile = true;
      }
    } else {
      if (window.innerWidth > this.mobileSize) {
        this.isActiveScroll = false;
      } else {
        this.isActiveScrollMobile = false;
      }
    }
  }

  handleTouchStart(event) {
    this.slider.positionX = event.touches[0].clientX;
  }

  handleTouchMove(event) {
    const position = event.touches[0].clientX;

    if (!this.slider.positionX) {
      return false;
    }

    this.slider.differencePosition = position - this.slider.positionX;
    this.slider.positionX = null;
  }

  handleTouchEnd() {
    if (this.slider.differencePosition > 0) {
      this.prevSlide();
    } else {
      this.nextSlide();
    }
  }

  mounted() {
 /*    this.getSizeSlider();
    this.getNullStepSlider();

    this.getSliderStep();
    window.addEventListener("resize", this.getSliderStep);

    window.addEventListener("resize", this.getNullStepSlider);

    window.addEventListener("resize", this.nextSlide); */

    this.resizeEl();

    this.scrollState();
    window.addEventListener("scroll", this.scrollState);
    window.addEventListener("resize", this.scrollState);
  }

  unmounted() {
  }
}
</script>
 
<style lang="scss" scoped>
.characteristics-header {
  &.active {
    height: 300px;

    margin-bottom: 0;

    @include bigMobile {
      height: 400px;
    }
    .characteristics-header__wrapper {
      max-width: 1410px;
      width: 97.5%;

      position: fixed;
      top: 0px;

      z-index: 1;
    }

    .characteristics-header__nav {
      flex: 1 0 274px;

      @include bigMobile {
        display: none;
      }
    }
  }

  &.scroll-mobile {
    height: 190px;

    .characteristics-header__wrapper {
      max-width: 1410px;
      width: 100%;

      position: fixed;
      top: 0px;
      z-index: 1;

      padding-right: 8px;
    }

    .characteristics-header__nav {
      display: none;
    }
  }

  &__wrapper {
    @include flex-container(row, left);

    background-color: var(--color-sky-lightest);

    @include bigMobile {
      @include flex-container(column, left);

      gap: 16px;
    }
  }

  &__items {
    position: relative;

    overflow: hidden;
  }

  &__button {
    position: absolute;
    top: 50%;

    z-index: 1;

    transform: translateY(-50%);

    @include bigMobile {
      display: none;
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }

  &__items-wrapper {
    --width: auto;
    width: var(--width);

    @include flex-container(row, left, center);

    --translate: 0;
    transform: translateX(var(--translate));

    transition: all 0.2s ease-in-out;
  }

  &__item {
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;

    @include bigMobile {
      border: 1px solid #e9e9e9;
    }
  }
}
</style>
 