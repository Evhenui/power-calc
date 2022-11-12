<template>
  <section
    ref="cardProduct"
    class="card-product"
    :class="{ active: scrollState }"
  >
    <div class="card-product__wrapper">
      <Navigation :state="state"/>
      
      <section class="card-product__body">
        <div class="card-product__body-wrapper">
          <div class="card-product__image-wrapper">
            <img class="card-product__image" src="@/assets/img/product-card.png" alt="product name" />
          </div>
          <section class="card-product__description">
            <Rating class="card-product__rating" :state="state" />

            <Availability 
              class="card-product__availability"
              :status="statusProduct.ends"
              :state="!state"
            ></Availability>
            <p class="card-product__subtitle">
              Комплект резервного питания для котла LogicPower ИБП + AGM батарея
              UPS A500 + АКБ AGM 235W
            </p>
          </section>
        </div>
        <section class="card-product__footer">
          <p class="card-product__code">Код: 56983</p>
          <div class="card-product__footer-navigation">
            <h1 class="card-product__price">972 ₴</h1>
            <ButtonOrange :stateButton="state">Купить</ButtonOrange>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import Navigation from "./Navigation.vue";
import Rating from "./Rating.vue";
import ButtonOrange from "@components/comparison/UI/ButtonOrange.vue";
import Availability from "./Availability.vue"

@Component({
  components: {
    Navigation,
    Rating,
    ButtonOrange,
    Availability
  },
})
export default class CardProductComponent extends Vue {
  $refs: {
    cardProduct: HTMLElement;
  };

  scrollState: boolean = false;
  statusProduct = {
    inStock: "in-stock",
    preOrder: "pre-order",
    notAvailable: "not-available",
    ends: "ends",
  };
  state: boolean = false;
  sizeMobileWindow: number = 860;

  changeSize(size:number) {
    this.state = window.innerWidth <= size ? true : false;
  }

  mounted() {
    this.changeSize(this.sizeMobileWindow);
    window.addEventListener('resize', () => {
      this.changeSize(this.sizeMobileWindow)
    });
  }
}
</script>
 
<style lang="scss" scoped>
.card-product {
  flex: 1 0 243px;

  background-color: white;

  @media(max-width: 860px) {
   flex: 1 0 152px;
  }

  &.active {
    .card-product__wrapper {
      padding: 8px 0 8px 0;
    }

    .card-product__image-wrapper {
      flex: 1 0 71px;

      margin: 0;
    }

    .card-product__rating {
      display: none;
    }

    .card-product__body-wrapper {
      @include flex-container(row, space-between, center);
      gap: 3px;
    }

    .card-product__body {
      padding: 0 8px;
    }

    .card-product__body-wrapper {
      margin-bottom: 36px;
    }

    .card-product__subtitle {
      @include fontUnify(12, 16, 400);

      padding: 0;
    }

    .card-product__footer {
      @include flex-container(row, space-between, center);

      padding: 0;
    }

    .card-product__code {
      margin: 0;
    }

    .card-product__footer-navigation {
      @include flex-container(row, space-between, center);
    }

    .card-product__price {
      @include fontUnify(16, 22, 500);
    }
  }

  &__wrapper {
    padding: 8px 0 16px 0;

    transition: all 0.2s ease-in-out;

    @media(max-width: 860px) { 
      padding: 8px 0;
    }
  }

  &__body {
    @media(max-width: 860px) {
      padding: 0 8px;
    }
  }

  &__body-wrapper {
    margin-bottom: 8px;

    transition: all 0.2s ease-in-out;
  }

  &__image-wrapper {
    @include flex-container(row, center, center);

    margin-bottom: 8px;

    transition: all 0.2s ease-in-out;
  }

  &__image {
   @media(max-width: 860px) {
      width: 100px;
   }
  }

  &__description {
    @media(max-width: 860px) {
      @include flex-container(column, flex-start, left);

      gap: 8px;
    }
  }

  &__subtitle {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    padding: 0 16px;

    transition: all 0.2s ease-in-out;

    @media(max-width: 860px) {
      @include fontUnify(12, 16, 400);

      padding: 0;
    }
  }

  &__footer {
    padding: 0 16px;

    transition: all 0.2s ease-in-out;

    @media(max-width: 860px) {
      padding: 0;
    }
  }

  &__code {
    @include fontUnify(12, 16, 400);
    color: #8a8a8a;
    letter-spacing: 0.02em;

    margin-bottom: 16px;

    transition: all 0.2s ease-in-out;

    @media(max-width: 860px) {
      margin-bottom: 8px;
    }
  }

  &__footer-navigation {
    @include flex-container(column, center, flex-start);
    gap: 16px;

    transition: all 0.2s ease-in-out;

    @media(max-width: 860px) {
      @include flex-container(row, space-between, center);
    }
  }

  &__price {
    @include fontUnify(25, 35, 700);
    color: $color-main;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    transition: all 0.2s ease-in-out;

    @media(max-width: 860px) {
      @include fontUnify(16, 22, 400);
    }
  }
}
</style>
 