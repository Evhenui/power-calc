<template>
  <section ref="characteristics"
    class="characteristics-header"
    :class="[{active: isActiveScroll}, {'scroll-mobile': isActiveScrollMobile}]"
  >
    <div class="characteristics-header__wrapper">
      <div class="characteristics-header__nav">
      <CharacteristicsBar
        :heightCard="cardSize"
        :activeScroll="isActiveScroll"
        ref="navigation"
        class="characteristics-header__nav-bar"
      />
    </div>
    <section class="characteristics-header__items">
      <ButtonArrow
        v-if="isButton"
        class="characteristics-header__button left"
        moveSlide="left"
        @click.native="prevSlide"
      />

      <div
        ref="test"
        class="characteristics-header__items-wrapper"
        @scroll="sendPosition"
      >
        <CardProduct
          v-for="(item, index) in 10"
          :key="index"
          ref="slide"
          :scrollState="isActiveScroll"
          :scrollStateMobile="isActiveScrollMobile"
          class="characteristics-header__item"
        />
      </div>

      <ButtonArrow
        v-if="isButton"
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
    ButtonArrow
  },
})
export default class CharacteristicsHeaderComponent extends Vue {
  @Prop({ required: false }) active: string;

  $refs: {
    slide: CardProduct[];
    navigation: CharacteristicsBar;
    test: HTMLElement;
    characteristics: HTMLElement;
  };

  sizeCard: string = "";
  buttonRight: boolean = true;
  isButton: boolean = false;
  mobileWidth: number = 860;
  isActiveScroll: boolean = false;
  isActiveScrollMobile: boolean = false;

  cardSize: string = '';

  resizeEl() {
    const observer = new ResizeObserver((entries)=>{
      this.cardSize = entries[0].borderBoxSize[0].blockSize + 'px';
    });
    observer.observe(this.$refs.slide[0].$el)
  }

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

  removeButtons(size: number) {
    this.isButton = window.innerWidth <= size ? false : true;
  }

  scrollState() {
    if(window.scrollY >= this.$refs.characteristics.offsetTop) {
      if(window.innerWidth >= 860){
        this.isActiveScrollMobile = false;
        this.isActiveScroll = true;
      }else{
        this.isActiveScroll = false;
        this.isActiveScrollMobile = true;
      } 
    }
     else {
      if(window.innerWidth >= 860){
        this.isActiveScroll = false
      } else {
        this.isActiveScrollMobile = false;
      } 
    }
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
.characteristics-header {
  margin-bottom: 16px;

  &.active{
    height: 300px;

    margin-bottom: 0;

    @media (max-width: 860px) {
      height: 400px;
    }
    .characteristics-header__wrapper{
      max-width: 1410px;
      width: 100%;

      position: fixed;
      top: 0px;

      padding-right: 16px;
    }

    .characteristics-header__nav{
      flex: 1 0 274px;

      @media (max-width: 860px) {
       display: none;
      }
    }
  }

  &.scroll-mobile {
    height: 190px;

    .characteristics-header__wrapper{
      max-width: 1410px;
      width: 100%;

      position: fixed;
      top: 0px;

      padding-right: 8px;
    }

    .characteristics-header__nav{
       display: none;
    }
  }

  &__wrapper {
    @include flex-container(row, left);

    background-color: var(--color-sky-lightest);

    padding-bottom: 16px;

    @media (max-width: 860px) {
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
 