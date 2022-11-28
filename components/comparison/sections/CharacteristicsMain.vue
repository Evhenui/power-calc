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
        >
          <template v-for="element in characteristics">
            <div class="characteristic__item-title">
              <p class="characteristic__title">{{ element.title }}</p>
            </div>
            <section
              class="characteristic__items"
              ref="sliderDescription"
              :style="[
                { '--left': -slider.positionLeft + 'px' },
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
  @Prop({ required: false }) sliderCounter: number;
  @Prop({ required: false }) sliderTranslate: number;

  $refs: {
    menuCategory: HTMLElement[];
    sliderDescription: HTMLElement[];
    slideCategory: HTMLElement[];
    sliderWindow: HTMLElement;
    sliderWidth: HTMLElement;
  };

  @Watch("sliderCounter")
  onsliderCounterChanged(val: number) {
    this.slider.counter = val;
  }
  @Watch("sliderTranslate")
  onsliderTranslateChanged(val: number) {
    this.slider.positionLeft = val;
  }

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
    positionLeft: 0,
    counter: 0,
  };

  sliderMobile: any = {
    positionX: null,
    diff: 0
  }

  sectionHeight: number | string = 'auto';

  nextSlide() {
    const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
    const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
    const slidesLength: number = this.characteristics[0].option.length;
    const slideWidth: number = sliderWidth / this.characteristics[0].option.length;
    const maxStep: number = Math.round(slidesLength - sliderWindow / slideWidth);
    this.slider.distance = sliderWidth - sliderWindow - (this.slider.positionLeft + slideWidth);

    if (this.slider.distance >= 0 && this.slider.counter < maxStep - 1) {
      this.slider.counter++;
      this.slider.positionLeft = slideWidth * this.slider.counter;
      
    } else {
      this.slider.positionLeft = sliderWidth - sliderWindow;
      this.slider.counter = maxStep;
    }

    this.$emit("sliderPosition", this.slider.positionLeft, this.slider.counter);
  }

  prevSlide() {
    const sliderWidth: number = this.$refs.sliderWidth.scrollWidth;
    const sliderWindow: number = this.$refs.sliderWindow.offsetWidth;
    const slidesLength: number = this.characteristics[0].option.length;
    const slideWidth: number = sliderWidth / this.characteristics[0].option.length;
    const maxStep: number = Math.round(slidesLength - sliderWindow / slideWidth);
    const startingPosition: number = 0;

    this.slider.distance = sliderWidth - sliderWindow - (this.slider.positionLeft - slideWidth);

    if (this.slider.distance <= sliderWidth - sliderWindow) {
      this.slider.counter--;
      this.slider.positionLeft = slideWidth * this.slider.counter;
    } else {
      this.slider.positionLeft = startingPosition;
      this.slider.distance = sliderWidth - sliderWindow;
    }

    this.$emit("sliderPosition", this.slider.positionLeft, this.slider.counter);
  }

  handleTouchStart(event) {
    this.sliderMobile.positionX = event.touches[0].clientX;
  }

  handleTouchMove(event) {
    const positionMove: number = event.touches[0].clientX;
    const diff = positionMove - this.sliderMobile.positionX;

    if(!this.sliderMobile.positionX) return false;

    this.sliderMobile.diff = diff;
    this.sliderMobile.diff > 0 ? this.prevSlide() : this.nextSlide();
 
    this.sliderMobile.positionX = null;
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
  }

  unmounted() {
    window.removeEventListener("resize", this.resizeCharacteristics);
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

    position: relative;
    --left: 0;
    left: var(--left);

    @include flex-container(row, left);

    background-color: white;

    transition: all 0.2s ease-in-out;

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
 