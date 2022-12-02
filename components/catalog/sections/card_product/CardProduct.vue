<template>
  <section class="card-product">
    <div class="card-product__wrapper">
        <HeaderNav class="card-product__header-nav" />
        <div class="card-product__section header">
          <div class="card-product__image-wrapper">
            <img src="../../../../assets/img/product-card-catalog.png" alt="product name">
          </div>
          <Rating class="card-product__rating" />
        </div>
        <div class="card-product__section footer">
          <div class="card-product__main-info">
            <NavAvailability />
            <div class="card-product__identification">
              <p class="card-product__name-product">Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)</p>
              <p class="card-product__code">Код: 56983</p>
            </div>
          </div>
          <CardFooter />
        </div>
    </div>
  </section> 
</template>
    
<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import HeaderNav from "./sections/HeaderNav.vue";
import Rating from "~/components/comparison/UI/product/Rating.vue";
import NavAvailability from "./sections/NavAvailability.vue";
import CardFooter from "./sections/CardFooter.vue"

@Component({
  components: {
    HeaderNav,
    Rating,
    NavAvailability,
    CardFooter
  },
})
export default class CardProductComponent extends Vue {}
</script>
    
<style lang="scss" scoped>
.card-product {
  max-width: 288px;
  width: 100%;

  background-color: white;

  border: 1px solid #E9E9E9;
  border-radius: 8px;

  transition: all .1s ease-in-out;

  &:hover {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  }

  &__wrapper {
    position: relative;

    padding: 16px 0;
  }

  &__header-nav {
    width: 100%;
    
    position: absolute;
    top: 16px;
  }

  &__section {
    &.header {
      border-bottom: 1px solid #F3F3F3;

      margin-bottom: 16px; 
    }

    &.footer {
      @include flex-container(column, center);

      padding: 0 16px;
      gap: 34px;
    }
  }

  &__image-wrapper {
    @include flex-container(row, center, center);
  }

  &__rating {
    margin: 0;
    padding-bottom: 16px;
  }

  &__main-info {
    @include flex-container(column, center);

    gap: 8px;
  }

  &__identification {
    @include flex-container(column, center, start);

    gap: 8px;
  }

  &__name-product {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2B2B2B;
  }

  &__code {
    @include fontUnify(12, 16, 400);
    letter-spacing: 0.02em;
    color: #8A8A8A;
  }
}

</style>
        