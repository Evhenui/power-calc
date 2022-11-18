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
      <section
       class="characteristics-header__items"
       ref="sliderWidth"
       >
        <ButtonArrow
          v-if="isButton"
          class="characteristics-header__button left"
          moveSlide="left"
          @click.native="prevSlideTest"
        />

        <div
          ref="sliderWrapper"
          class="characteristics-header__items-wrapper"
          @scroll="sendPosition"
        >
          <CardProduct
            v-for="(item, index) in 10"
            :key="index"
            ref="slide"
            :scrollState="isActiveScroll"
            :scrollStateMobile="isActiveScrollMobile"
            :mobileSize="mobileSize"
            class="characteristics-header__item"
          />
        </div>

        <ButtonArrow
          v-if="isButton"
          class="characteristics-header__button right"
          :direction="buttonRight"
          @click.native="nextSlideTest"
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
    slide: CardProduct[];
    navigation: CharacteristicsBar;
    characteristics: HTMLElement;
    sliderWrapper: HTMLElement;
    sliderWidth: HTMLElement;
  };

  sizeCard: string = "";
  buttonRight: boolean = true;
  isButton: boolean = false;
  isActiveScroll: boolean = false;
  isActiveScrollMobile: boolean = false;
  cardSize: string = "";

  sliderCounter: number = 0;
  sliderItemsLength: number = 0;

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

  resizeEl() {
    const observer = new ResizeObserver((entries) => {
      this.cardSize = entries[0].borderBoxSize[0].blockSize + "px";
    });
    observer.observe(this.$refs.slide[0].$el);
  }

  nextSlideTest() {
    this.slider.remainder = this.slider.lineWidth - this.slider.sliderWidth - (this.slider.offset + this.slider.widthArray[this.slider.step]);
      if(this.slider.remainder >= 0) {
        this.slider.offset = this.slider.offset + this.slider.widthArray[this.slider.step];
        this.slider.line.style.transform =  "translateX(" + -this.slider.offset + 'px' + ")";
      }
      else {
        this.slider.line.style.transform =  "translateX(" + -(this.slider.lineWidth - this.slider.sliderWidth) + 'px' + ")";
      }

      if(this.slider.step < this.slider.maxStep + 1) {
        this.slider.step++;
      }
  }

  prevSlideTest() {
    this.slider.remainder = this.slider.lineWidth - this.slider.sliderWidth - (this.slider.offset - this.slider.widthArray[this.slider.step]);

      if(this.slider.remainder <= this.slider.maxSizeTranslate) {
        this.slider.offset = this.slider.offset - this.slider.widthArray[this.slider.step];
        this.slider.line.style.transform =  "translateX(" + -this.slider.offset + 'px' + ")";
      }
      else {
        this.slider.line.style.transform =  "translateX(" + 0 + 'px' + ")";
      }

      if(this.slider.step > 1) {
        this.slider.step--;
      }
  }

  getSizeSlider() {
    this.slider.line = this.$refs.sliderWrapper;
    this.slider.slides = this.$refs.slide.length;

    this.$refs.slide.forEach(item => {
      this.slider.widthArray.push((item as any).$el.offsetWidth);
      this.slider.lineWidth += (item as any).$el.offsetWidth;
    })

    this.slider.line.style.width = this.slider.lineWidth + 'px';
  }

  getNullStepSlider() {
    this.slider.sliderWidth = this.$refs.sliderWidth.offsetWidth;
    this.slider.remainder = this.slider.lineWidth - this.slider.sliderWidth - (this.slider.offset + this.slider.widthArray[this.slider.step]);
    this.slider.maxSizeTranslate = this.slider.remainder;
    this.slider.offset = 0;
    this.slider.step = 1;
    this.slider.maxStep = Math.ceil(this.slider.slides - (this.slider.sliderWidth / this.slider.widthArray[1]));
  }

  nextSlide() {
    const slider = this.$refs.sliderWrapper;
    const cardElement: any = this.$refs.slide[0].$el;
    const sizeCard: number = cardElement.offsetWidth;
    const maxCounter: number = this.sliderItemsLength / 2;
    const scrollLastElement: number = sizeCard - (slider.offsetWidth % cardElement.offsetWidth);
    let translatePosition: number = 0;
    
    if((this.sliderItemsLength - maxCounter) + 1 === this.sliderCounter){
      this.sliderCounter = 0;
      translatePosition = (- this.sliderCounter * sizeCard);

      window.getComputedStyle(slider).getPropertyValue('--transition');
      slider.style.setProperty('--transition', translatePosition + 'px'); 
    } else {
      this.sliderCounter += 1;
      translatePosition =(- this.sliderCounter * sizeCard);

      if(cardElement.offsetWidth > slider.offsetWidth - (-translatePosition)) {
        
      }
      window.getComputedStyle(slider).getPropertyValue('--transition');
      slider.style.setProperty('--transition', translatePosition + 'px');

     /*  if((this.sliderItemsLength - maxCounter) === this.sliderCounter) {
        translatePosition =(- this.sliderCounter * sizeCard - scrollLastElement);

        window.getComputedStyle(slider).getPropertyValue('--transition');
        slider.style.setProperty('--transition', translatePosition + 'px');
      } */
    }
    console.log((slider.offsetWidth - (-translatePosition)) + 243)
   
    this.$emit("getPositionScroll", translatePosition);
    this.$emit("getSizeCard", sizeCard); 
  }

  prevSlide() {
    const slider = this.$refs.sliderWrapper;
    const cardElement: any = this.$refs.slide[0].$el;
    const sizeCard: number = cardElement.offsetWidth;

    let translatePosition: number = 0; 

    if(this.sliderCounter !== 0){
      this.sliderCounter -= 1;
      translatePosition =(- this.sliderCounter * sizeCard);

      window.getComputedStyle(slider).getPropertyValue('--transition');
      slider.style.setProperty('--transition', (- this.sliderCounter * sizeCard) + 'px');
    }
    this.$emit("getPositionScroll", translatePosition);
    this.$emit("getSizeCard", sizeCard);
  }

  sendPosition() {
/*     this.$emit("getPositionScroll", this.$refs.test.scrollLeft); */
  }

  removeButtons(size: number) {
    this.isButton = window.innerWidth <= size ? false : true;
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

  mounted() {
    this.getSizeSlider()
    this.getNullStepSlider()
    window.addEventListener("resize", this.getNullStepSlider);
    this.sliderItemsLength = this.$refs.slide.length;

    this.resizeEl();

    this.removeButtons(this.mobileSize);
    window.addEventListener("resize", () => {
      this.removeButtons(this.mobileSize);
    });

    this.scrollState();
    window.addEventListener("scroll", this.scrollState);
    window.addEventListener("resize", this.scrollState);
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
      width: 100%;

      position: fixed;
      top: 0px;
      
      z-index: 1;

      padding-right: 16px;
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

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }

  &__items-wrapper {
    @include flex-container(row, left, center);

    --transition: 0;
    transform: translateX(var(--transition));
    
    transition: all .2s ease-in-out;
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
 