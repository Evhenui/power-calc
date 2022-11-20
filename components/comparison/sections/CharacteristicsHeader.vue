<template>
  <section
    ref="characteristics"
    class="characteristics-header"
    :class="[
      { active: isActiveScroll },
      { 'scroll-mobile': isActiveScrollMobile },
    ]"
    :style="{ '--heightHeader': isActiveScroll? cardSize : 'auto' }"
  >
    <div class="characteristics-header__wrapper">
      <div class="characteristics-header__nav">
        <CharacteristicsBar
          :heightCard="cardSize"
          :activeScroll="isActiveScroll"
          :mobileSize="mobileSize"
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
          :style="{ '--translate': -slider.translateX + 'px' }"
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
    characteristics: HTMLElement;
    slides: CardProduct[];
    sliderWidth: HTMLElement;
    sliderWindow: HTMLElement;
  };

  buttonRight: boolean = true;
  isActiveScroll: boolean = false;
  isActiveScrollMobile: boolean = false;
  cardSize: string = "";

  slider: any = {
    distance: 0,
    translateX: 0,
    counter: 0,
  };

  resizeElements() {
    const observer = new ResizeObserver((entries) => {
      this.cardSize = entries[0].borderBoxSize[0].blockSize + "px";
    });
    observer.observe(this.$refs.slides[0].$el);
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

//-----slider------

  nextSlide() {
    const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
    const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
    const slidesLength: number = this.$refs.slides.length;
    const slideWidth: number = sliderWidth / slidesLength;
    const maxStep: number = Math.round(slidesLength - sliderWindow / slideWidth);

    this.slider.distance = sliderWidth - sliderWindow - (this.slider.translateX + slideWidth);

    if (this.slider.distance >= 0 && this.slider.counter < maxStep - 1) {
      this.slider.counter++;
      this.slider.translateX = slideWidth * this.slider.counter;
    } else {
      this.slider.translateX = sliderWidth - sliderWindow;
      this.slider.counter = maxStep;
    }
  }

  prevSlide() {
    const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
    const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
    const slidesLength: number = this.$refs.slides.length;
    const slideWidth: number = sliderWidth / slidesLength;
    const startingPosition: number = 0;

    this.slider.distance =
      sliderWidth - sliderWindow - (this.slider.translateX - slideWidth);

    if (this.slider.distance <= sliderWidth - sliderWindow) {
      this.slider.counter--;
      this.slider.translateX = slideWidth * this.slider.counter;
    } else {
      this.slider.translateX = startingPosition;
      this.slider.distance = sliderWidth - sliderWindow;
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

//---------------

  mounted() {
    this.resizeElements();

    this.scrollState();
    window.addEventListener("scroll", this.scrollState);

    window.addEventListener("resize", this.scrollState);
    window.addEventListener("resize", this.prevSlide);
  }

  unmounted() {
    window.removeEventListener("scroll", this.scrollState);
    window.removeEventListener("resize", this.scrollState);
    window.addEventListener("resize", this.prevSlide);
  }
}
</script>
 
<style lang="scss" scoped>
.characteristics-header {
  &.active {
    --heightHeader: auto;
    height: var(--heightHeader);

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
 