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
        >
          <p class="characteristic__item-name">{{ item.title }}</p>
        </div>
      </nav>

      <section class="characteristic__slider" >
        <div 
          class="characteristic__slider-wrapepr"
          ref="sliderWrapper"
        >
          <template v-for="element in characteristics">
            <div class="characteristic__item-title">
              <p class="characteristic__title">{{ element.title }}</p>
            </div>
            <section ref="items" class="characteristic__items">
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
  @Prop({required: false}) positionScrollX: number;
  @Prop({required: false}) mobileSize: number;
  @Prop({required: false}) sizeCard: number;
  

  $refs: {
    menuCategory: HTMLElement[];
    items: HTMLElement[];
    slideCategory: HTMLElement[];
    sliderFooter: HTMLElement;

    sliderWrapper: HTMLElement;
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
  someArr: Array<Object> = [];

  @Watch('positionScrollX')
  onpositionScrollXChanged(val: number) {
    window.getComputedStyle(this.$refs.sliderWrapper).getPropertyValue('--translate');
    this.$refs.sliderWrapper.style.setProperty('--translate', (- val * this.sizeCard) + 'px');
    
  }

  resizeCharacteristics() {
    const slideCategory = this.$refs.items;
    const menuCategory = this.$refs.menuCategory;

    if(window.innerWidth > this.mobileSize) {

      menuCategory.forEach((element, index) => {

      if(element.clientHeight > slideCategory[index].clientHeight) {
        
        window.getComputedStyle(slideCategory[index]).getPropertyValue('--height');
        slideCategory[index].style.setProperty('--height', element.clientHeight + 'px');
      } else {
        window.getComputedStyle(element).getPropertyValue('--height');
        element.style.setProperty('--height', slideCategory[index].clientHeight + 'px');
      } 

      })
    } else {
      
      slideCategory.forEach((element, index) => {
        window.getComputedStyle(slideCategory[index]).getPropertyValue('--height');
        element.style.setProperty('--height', 'auto');
      })

    }
  }

  sendPosition() {
 /*    this.$emit("getPositionScrollBottom", this.$refs.sliderFooter.scrollLeft); */
  }

  mounted() {
    this.resizeCharacteristics();
    window.addEventListener('resize', this.resizeCharacteristics)
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
    
    @include flex-container(column, left);

    --translate: 0;
    transform: translateX(var(--translate));

    transition: all .2s ease-in-out;
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

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
 
}
</style>
 