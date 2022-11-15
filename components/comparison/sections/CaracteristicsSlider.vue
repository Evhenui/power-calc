<template>
  <section 
    class="slider" 
    ref="headerSection"
    :class="[
      { active: isActiveScroll },
      { 'scroll-mobile': isActiveScrollMobile },
    ]"
  >
    <div class="slider__wrapper" ref="sliderWrapper">
      <ButtonArrow
          v-if="isButton"
          class="slider__button left"
          moveSlide="left"
          @click.native="prevSlide"
        />
      <div class="slider__header">
       
        <div class="slider__slides">
          <CardProduct
            v-for="(item, index) in characteristics"
            :key="index"
            ref="slide"
            :scrollState="isActiveScroll"
            :scrollStateMobile="isActiveScrollMobile"
            class="slider__slide"
          />
        </div>
      
      </div>
      <div class="slider__body">
        <div class="slider__body-name">
          <h1 class="slider__body-title">Характеристики</h1>
        </div>
        <div class="slider__body-wrapper">
          <template v-for="element in characteristics">
            <div class="slider__characteristics-title">
              <p class="slider__title">{{ element.title }}</p>
            </div>
            <section class="slider__characteristics-items">
              <div
                v-for="(option, i) in element.option"
                :key="i"
                class="slider__body-description"
              >
                <p class="slider__description">{{ option.name }}</p>
              </div>
            </section>
          </template>
        </div>
      </div>  
      <ButtonArrow
          v-if="isButton"
          class="slider__button right"
          :direction="buttonRight"
          @click.native="nextSlide"
          moveSlide="right"
        /> 
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop, Watch } from "vue-property-decorator";
import CardProduct from "@components/comparison/UI/product/CardProduct.vue";
import ButtonArrow from "../UI/ButtonArrow.vue";

@Component({
  components: {
    CardProduct,
    ButtonArrow,
  },
})
export default class CaracteristicsSliderComponent extends Vue {
  @Prop({ required: false }) active: string;

  $refs: {
    slide: CardProduct[];
    sliderWrapper: HTMLElement;
    //navigation: CharacteristicsBar;
    headerSection: HTMLElement;
  };

  cardSize: string = "";
  sizeCard: string = "";
  buttonRight: boolean = true;
  isButton: boolean = false;
  mobileWidth: number = 1024;
  isActiveScroll: boolean = false;
  isActiveScrollMobile: boolean = false;

  characteristics = [
    {
      title: "Вес, кг",
      option: [
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
      ],
    },
    {
      title: "Объем, м.куб",
      option: [
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
      ],
    },
    {
      title: "Тип",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
      ],
    },
    {
      title: "Вес, кг",
      option: [
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
        { name: "2.1" },
      ],
    },
    {
      title: "Объем, м.куб",
      option: [
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
        { name: "0.007553" },
      ],
    },
    {
      title: "Тип",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
        { name: "8" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
        { name: "комплект видеонаблюдения" },
      ],
    },
    {
      title: "Кол-во подключаемых камер, шт",
      option: [
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
        { name: "24 - на ИБП, 12 - на АКБ комплект" },
      ],
    },
  ];

  nextSlide() {
    const cardProductElevent: any = this.$refs.slide[0].$el,
      cardSize: number = cardProductElevent.offsetWidth;
    let moveSpace: number = cardSize * 2;

    this.$refs.sliderWrapper.scrollLeft += moveSpace;
    this.$emit("getPositionScroll", this.$refs.sliderWrapper.scrollLeft);
  }

  prevSlide() {
    const cardProductElevent: any = this.$refs.slide[0].$el,
      cardSize: number = cardProductElevent.offsetWidth;
    let moveSpace: number = cardSize * 2;

    this.$refs.sliderWrapper.scrollLeft -= moveSpace;
    this.$emit("getPositionScroll", this.$refs.sliderWrapper.scrollLeft);
  }

  resizeEl() {
    const observer = new ResizeObserver((entries) => {
      this.cardSize = entries[0].borderBoxSize[0].blockSize + "px";
    });
    observer.observe(this.$refs.slide[0].$el);
  }

  removeButtons(size: number) {
    this.isButton = window.innerWidth <= size ? false : true;
  }

  scrollState() {
  /*   if (window.scrollY >= this.$refs.headerSection.offsetTop) {
      if (window.innerWidth >= 860) {
        this.isActiveScrollMobile = false;
        this.isActiveScroll = true;
      } else {
        this.isActiveScroll = false;
        this.isActiveScrollMobile = true;
      }
    } else {
      if (window.innerWidth >= 860) {
        this.isActiveScroll = false;
      } else {
        this.isActiveScrollMobile = false;
      }
    } */
   console.log(window.scrollY)
  }

  mounted() {
    this.resizeEl();

    this.removeButtons(this.mobileWidth);
    window.addEventListener("resize", () => {
      this.removeButtons(this.mobileWidth);
    });

    this.scrollState();
    window.addEventListener("scroll", this.scrollState);
    window.addEventListener("resize", this.scrollState);
  }
}
</script>
 
<style lang="scss" scoped>
.slider {
  position: relative;
  overflow: hidden;

  &__wrapper {
    @include flex-container(column, flex-start);

    padding-bottom: 16px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__button {
    position: absolute;
    top: 23%;
    z-index: 1;
    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }

  &__header {
    position: relative;
  }

  &__slides {
    @include flex-container(row, left, center);
  }

  &__body {
    width: max-content;
  }

  &__body-name {
    background-color: #393d38;

    padding: 8px 16px;

    @include bigMobile {
      display: none;
    }
  }

  &__body-title {
    @include fontUnify(16, 22, 600);
    color: white;
  }

  &__body-wrapper {
    @include flex-container(column, flex-start);
    white-space: nowrap;
  }

  &__characteristics-items {
    @include flex-container(row, flex-start);

    &:nth-of-type(2n) {
      background-color: #e9e9e9;
      @include bigMobile {
        background-color: white;
      }
    }
  }

  &__characteristics-title {
    display: none;

    @include bigMobile {
      min-height: 36px;

      @include flex-container(row, center, center);
      flex: 0 0 auto;

      text-align: center;

      background-color: #e9e9e9;

      padding: 8px;
    }
  }

  &__title {
    width: max-content;

    position: absolute;
    left: 50%;

    align-items: center;

    @include fontUnify(14, 20, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    transform: translateX(-50%);
  }

  &__body-description {
    max-width: 243px;
    width: 100%;

    flex: 0 0 243px;

    border-right: 1px solid #d1d1d1;

    padding: 8px 16px;

    @include bigMobile {
      max-width: 152px;
      flex: 0 0 152px;

      border: none;
    }
  }

  &__description {
    @include fontUnify(16, 22, 600);
    color: #2b2b2b;
    letter-spacing: 0.02em;

    white-space: initial;

    @include bigMobile {
      @include fontUnify(14, 20, 400);

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
 