<template>
  <section class="characteristics-header">
    <div class="characteristics-header__nav">
      <CharacteristicsBar :heightCard="sizeCard" ref="navigation" class="characteristics-header__nav-bar" />
    </div>
      <section class="characteristics-header__items">

      <ButtonArrow 
        v-if="isButton"
        class="characteristics-header__button left" 
        moveSlide="left"
        @click.native="prevSlide"
        />

      <div ref="test" class="characteristics-header__items-wrapper" @scroll="sendPosition">
        <CardProduct 
          v-for="(item, index) in 10" 
          :key="index" 
          ref="slide" class="characteristics-header__item" />
      </div>

      <ButtonArrow 
        v-if="isButton"
        class="characteristics-header__button right" 
        :direction="buttonRight"
        @click.native="nextSlide"
        moveSlide="right"
        />

    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import CharacteristicsBar from "./CharacteristicsBar.vue";
import CardProduct from "@components/comparison/UI/product/CardProduct.vue"
import ButtonArrow from "../UI/ButtonArrow.vue";

@Component({
  components: {
    CharacteristicsBar,
    CardProduct,
    ButtonArrow
  },
})
export default class CharacteristicsHeaderComponent extends Vue {

  @Prop({required: false}) active: string;

  $refs: {
    slide: CardProduct[];
    navigation: CharacteristicsBar;
    test: HTMLElement;
  };

  sizeCard: string = '';
  buttonRight: boolean = true;
  isButton: boolean = false;
  mobileWidth: number = 860;

  nextSlide() {
    const cardProductElevent: any = this.$refs.slide[0].$el,
          cardSize: number = cardProductElevent.offsetWidth;
    let moveSpace: number = cardSize * 2;
    
    this.$refs.test.scrollLeft += moveSpace;
    this.$emit("getPositionScroll", this.$refs.test.scrollLeft);
  }

  prevSlide() {
    const cardProductElevent: any = this.$refs.slide[0].$el,
          cardSize: number = cardProductElevent.offsetWidth;
    let moveSpace: number = cardSize * 2;

    this.$refs.test.scrollLeft -= moveSpace;
    this.$emit("getPositionScroll", this.$refs.test.scrollLeft);
  }

  sendPosition() {
    this.$emit("getPositionScroll", this.$refs.test.scrollLeft);
  }
  
  getSizeCard() {
    const cardProductElevent: any = this.$refs.slide[0].$el,
          cardSize: number = cardProductElevent.offsetHeight;

    this.sizeCard = window.innerWidth > 860? `${cardSize}px`: 'auto';
  }

  removeButtons(size:number) {
    this.isButton = window.innerWidth <= size ? false : true;
  }

  mounted() {
    this.getSizeCard();
    window.addEventListener('resize', this.getSizeCard);

    this.removeButtons(this.mobileWidth);
    window.addEventListener('resize', () => {
      this.removeButtons(this.mobileWidth)
    });
  }
}
</script>
 
<style lang="scss" scoped>
.characteristics-header {
  @include flex-container(row, left);

  margin-bottom: 16px;

  @media (max-width: 860px) {
    @include flex-container(column, left);

    gap: 16px;
    margin-bottom: 8px;
  }

  &__items {
    position: relative;

    overflow: hidden;
  }

  &__button {
    position: absolute;
    top: 50%;

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

    padding-bottom: 16px;

    overflow: auto;

    @media (max-width: 860px) {
      padding-bottom: 8px;
    }

    &::-webkit-scrollbar {
      height: 8px;

      background-color: #d1d1d1;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:horizontal {
      background-color: #393d38;
      border-radius: 100px;
    }
  }

  &__item {
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;

    @media (max-width: 860px) {
      border: 1px solid #e9e9e9;
    }
  }
}

</style>
 