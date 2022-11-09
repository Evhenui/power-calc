<template>
  <section 
      class="card-product"
      :class="{active: scrollState}"
   >
    <div class="card-product__wrapper">
      <Navigation />
      <section class="card-product__body">
         <div class="card-product__body-wrapper">
            <div class="card-product__image-wrapper">
          <img src="@/assets/img/product-card.png" alt="product name" />
        </div>
        <section class="card-product__description">
          <Rating class="card-product__rating" />
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
            <ButtonOrange :active="scrollState">Купить</ButtonOrange>
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

@Component({
  components: {
    Navigation,
    Rating,
    ButtonOrange,
  },
})
export default class CardProductComponent extends Vue {

   scrollState:boolean = false;
}
</script>
 
<style lang="scss" scoped>
.card-product {
   flex: 1 0 243px;

   &.active{

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

      transition: all .2s ease-in-out;
   }

   &__body {
   }

   &__body-wrapper {
      margin-bottom: 8px;

      transition: all .2s ease-in-out;
   }

   &__image-wrapper {
      @include flex-container(row, center, center);

      margin-bottom: 8px;

      transition: all .2s ease-in-out;
   }

   &__description {
      
   }

   &__subtitle {
      @include fontUnify(16, 22, 400);
      letter-spacing: 0.02em;
      color: #2B2B2B;

      padding: 0 16px;

      transition: all .2s ease-in-out;
   }

   &__footer {
      padding: 0 16px;

      transition: all .2s ease-in-out;
   }

   &__code {
      @include fontUnify(12, 16, 400);
      color: #8A8A8A;
      letter-spacing: 0.02em;

      margin-bottom: 16px;

      transition: all .2s ease-in-out;
   }

   &__footer-navigation {
      @include flex-container(column, center, flex-start);
      gap: 16px;

      transition: all .2s ease-in-out;
   }

   &__price {
      @include fontUnify(25, 35, 700);
      color: $color-main;
      letter-spacing: 0.02em;
      text-transform: uppercase;

      transition: all .2s ease-in-out;
   }
}

</style>
 