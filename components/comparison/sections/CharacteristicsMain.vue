<template>
  <section class="characteristic">
    <div class="characteristic__header">
      <h1 class="characteristic__header-title">Характеристики</h1>
    </div>
    <section class="characteristic__wrapper">
      <nav class="characteristic__category-items">
        <div
          ref="menuCategory"
          v-for="(item, index) in characteristics"
          :key="index"
          class="characteristic__category-item"
          :style="{ '--height': sectionHeight}"
        >
          <p class="characteristic__item-name">{{ item.title }}</p>
        </div>
      </nav>

      <section class="characteristic__slider" ref="sliderWindow">
        <div
          class="characteristic__slider-wrapepr"
          ref="sliderWidth"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <template v-for="element in characteristics">
            <div class="characteristic__item-title">
              <p class="characteristic__title">{{ element.title }}</p>
            </div>
            <section
              class="characteristic__items"
              ref="sliderDescription"
              :style="[
                { '--translate-x': -slider.translateX + 'px' },
                { '--height': sectionHeight }
              ]"
            >
              <div
                v-for="(option, i) in element.option"
                :key="i"
                class="characteristic__body-description"
              >
                <p class="characteristic__description">{{ option.name }}</p>
              </div>
            </section>
          </template>
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop, Watch } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CharacteristicsMainComponent extends Vue {
  @Prop({ required: false }) mobileSize: number;
  @Prop({ required: false }) sliderTranslateX: number;
  @Prop({ required: false }) sliderMobileTranslateX: number;

  @Prop({ required: false }) positionSliderCounter: number;
  @Prop({ required: false }) positionSliderTranslate: number;

  $refs: {
    menuCategory: HTMLElement[];
    sliderDescription: HTMLElement[];
    slideCategory: HTMLElement[];
    sliderWindow: HTMLElement;
    sliderWidth: HTMLElement;
  };

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
        { name: "0.0075533" },
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

  slider: any = {
    distance: 0,
    translateX: 0,
    counter: 0,
    buttonState: false,
    mobileValue: {
      initialPosition: 0,
      moving: true,
      transform: 0,
      translateX: 0,
    },
  };

  sliderMobile: any = {
    positionX: null,
    diff: 0
  }

  sectionHeight: number | string = 'auto';

 /*  @Watch("sliderTranslateX")
  onSliderTranslateXChanged(val: number) {
    this.slider.translateX = val;
  } */

/*   @Watch("sliderMobileTranslateX")
  onSliderMobileTranslateXhanged(val: number) {
    this.$refs.sliderDescription.forEach((item) => {
      item.style.transform = `translateX(${val}px)`;
    });
  } */

  @Watch("positionSliderCounter")
  onPositionSliderCounterChanged(val: number) {
    this.slider.counter = val;
  }
  @Watch("positionSliderTranslate")
  onPositionSliderTranslateChanged(val: number) {
    this.slider.translateX = val;
  }


  nextSlide() {
    const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
    const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
    const slidesLength: number = this.characteristics[0].option.length;
    const slideWidth: number = sliderWidth / this.characteristics[0].option.length;
    const maxStep: number = Math.round(slidesLength - sliderWindow / slideWidth);
    this.slider.distance = sliderWidth - sliderWindow - (this.slider.translateX + slideWidth);

    if (this.slider.distance >= 0 && this.slider.counter < maxStep - 1) {
      this.slider.counter++;
      this.slider.translateX = slideWidth * this.slider.counter;
      
    } else {
      this.slider.translateX = sliderWidth - sliderWindow;
      this.slider.counter = maxStep;
    }

    this.slider.buttonState = this.slider.counter < maxStep? false: true;

    this.$emit("sliderPositionFooter", this.slider.translateX, this.slider.counter);
  }

  prevSlide() {
    const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
    const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
    const slidesLength: number = this.characteristics[0].option.length;
    const slideWidth: number = sliderWidth / this.characteristics[0].option.length;
    const maxStep: number = Math.round(slidesLength - sliderWindow / slideWidth);
    const startingPosition: number = 0;

    this.slider.distance = sliderWidth - sliderWindow - (this.slider.translateX - slideWidth);

    if (this.slider.distance <= sliderWidth - sliderWindow) {
      this.slider.counter--;
      this.slider.translateX = slideWidth * this.slider.counter;
    } else {
      this.slider.translateX = startingPosition;
      this.slider.distance = sliderWidth - sliderWindow;
    }

    this.slider.buttonState = this.slider.counter < maxStep? false: true;

    this.$emit("sliderPositionFooter", this.slider.translateX, this.slider.counter);
  }

  handleTouchStart(event) {
  /*   const sliderWidth = this.$refs.sliderDescription[0];
    const positionX = event.touches[0].clientX;
    const transformMatrix = window.getComputedStyle(sliderWidth).getPropertyValue("transform");

    if (window.innerWidth < this.mobileSize) {
      this.slider.mobileValue.initialPosition = positionX;
      this.slider.mobileValue.moving = true;

      transformMatrix !== "none" ? (this.slider.mobileValue.transform = parseInt(transformMatrix.split(",")[4].trim())): 0;
    } */
    this.sliderMobile.positionX = event.touches[0].clientX;
  }

  handleTouchMove(event) {
  /*   const positionX = event.touches[0].clientX;
    const diff = positionX - this.slider.mobileValue.initialPosition;
    const maxTranslateX = - (this.$refs.sliderDescription[0].scrollWidth - this.$refs.sliderWindow.offsetWidth);
    let translateX = this.slider.mobileValue.transform + diff;

    if (window.innerWidth < this.mobileSize) {
      if (this.slider.mobileValue.moving) {
        this.$refs.sliderDescription.forEach((item) => {
          item.style.transform = `translateX(${translateX}px)`;
        });
         //this.slider.mobileValue.translateX = translateX;

        if (this.slider.mobileValue.transform + diff > 0) {
          translateX = 0;
          //    this.slider.mobileValue.translateX = translateX; 
          this.$refs.sliderDescription.forEach((item) => {
            item.style.transform = `translateX(${translateX}px)`;
          });
        }

        if (maxTranslateX > this.slider.mobileValue.transform + diff) {
          translateX = maxTranslateX;
          //  this.slider.mobileValue.translateX = translateX; 
          this.$refs.sliderDescription.forEach((item) => {
            item.style.transform = `translateX(${translateX}px)`;
          });
        }
      }
      this.$emit("sliderPositionMain", translateX);
    } */ 
    const positionMove: number = event.touches[0].clientX;
    const diff = positionMove - this.sliderMobile.positionX;

    if(!this.sliderMobile.positionX) return false;

    this.sliderMobile.diff = diff;
    this.sliderMobile.diff > 0 ? this.prevSlide() : this.nextSlide();
 
    this.sliderMobile.positionX = null;
  }

  handleTouchEnd() {
/*     if (window.innerWidth < this.mobileSize) {
      this.slider.mobileValue.moving = false;
    } */
  }

  resizeCharacteristics() {
    const slideCategory = this.$refs.sliderDescription;
    const menuCategory = this.$refs.menuCategory;

    if(window.innerWidth > this.mobileSize) {
      menuCategory.forEach((element, index) => {

        element.clientHeight > slideCategory[index].clientHeight?
        this.sectionHeight = `${element.clientHeight}px`:
        this.sectionHeight = `${slideCategory[index].clientHeight}px`;

      })
    } else this.sectionHeight = 'auto';
  }

  mounted() {
    this.resizeCharacteristics();
    window.addEventListener("resize", this.resizeCharacteristics);

    window.addEventListener("resize", ()=> {
      if(window.innerWidth > this.mobileSize) {
       /*  this.$refs.sliderDescription.forEach(item=> {
          item.removeAttribute('style');
        }) */
      } else {
        /* this.$refs.sliderDescription.forEach(item=> {
          item.style.transform = `translateX(${0}px)`;;
        }) */
      }
    })
  }
}
</script>
 
<style lang="scss" scoped>
.characteristic {
  &__header {
    background-color: #393d38;

    padding: 8px 16px;

    @include bigMobile {
      display: none;
    }
  }

  &__header-title {
    @include fontUnify(16, 22, 600);
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  &__wrapper {
    @include flex-container(row, left);
  }

  &__category-items {
    max-width: 274px;
    width: 100%;
    flex: 1 0 274px;

    border-right: 1px solid #d1d1d1;

    @include bigMobile {
      display: none;
    }
  }

  &__category-item,
  &__slide-category {
    background-color: white;

    padding: 8px 16px;
  }

  &__category-item {
    --height: auto;
    height: var(--height);

    @include flex-container(column, center);

    &:nth-child(2n) {
      background-color: #e9e9e9;
    }
  }

  &__item-name,
  &__category-title,
  &__description {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__slider {
    overflow: hidden;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__slider-wrapepr {
    width: max-content;
  }

  &__item-title {
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

  &__items {
    --height: auto;
    height: var(--height);

    @include flex-container(row, left);

    background-color: white;

    --translate-x: 0;
    transform: translateX(var(--translate-x));

    transition: all 0.2s ease-in-out;

    @include bigMobile {
      /* transition: none; */
    }

    &:nth-of-type(2n) {
      background-color: #e9e9e9;

      @include bigMobile {
        background-color: white;
      }
    }
  }

  &__body-description {
    max-width: 243px;
    width: 100%;

    @include flex-container(column, center);
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
    white-space: initial;

    @include bigMobile {
      @include fontUnify(14, 20, 400);
      text-overflow: ellipsis;
      text-align: center;

      overflow: hidden;
    }
  }
}
</style>
 