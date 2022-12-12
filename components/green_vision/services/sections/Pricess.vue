<template>
  <section class="pricess">
    <h1 class="pricess__title">Стоимость установки систем видеонаблюдения</h1>
    <div class="pricess__cards">
      <CardPrice :values="priceValues.flat">
        <template v-slot:image>
          <img src="@/assets/img/flat-price.png" alt="flat" />
        </template>
        <template v-slot:title>Квартира</template>
        <template v-slot:price>6 900 грн</template>
      </CardPrice>

      <CardPrice :values="priceValues.home">
        <template v-slot:image>
          <img src="@/assets/img/home-price.png" alt="home" />
        </template>
        <template v-slot:title>дом</template>
        <template v-slot:price>23 000грн</template>
      </CardPrice>

      <CardPrice :values="priceValues.office">
        <template v-slot:image>
          <img src="@/assets/img/office-price.png" alt="office" />
        </template>
        <template v-slot:title>Офис</template>
        <template v-slot:price>29 500грн</template>
      </CardPrice>

      <CardPrice :values="priceValues.score">
        <template v-slot:image>
          <img src="@/assets/img/score-price.png" alt="score" />
        </template>
        <template v-slot:title>Магазин</template>
        <template v-slot:price>53 200грн</template>
      </CardPrice>

      <CardPrice :values="priceValues.production">
        <template v-slot:image>
          <img src="@/assets/img/production-price.png" alt="production" />
        </template>
        <template v-slot:title>Производство</template>
        <template v-slot:price>71 000грн</template>
      </CardPrice>

      <CardPrice :values="priceValues.stock">
        <template v-slot:image>
          <img src="@/assets/img/stock-price.png" alt="stock" />
        </template>
        <template v-slot:title>Склад</template>
        <template v-slot:price>124 000грн</template>
      </CardPrice>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import CardPrice from "../UI/CardPrice.vue";
import { Prop } from "vue-property-decorator";

@Component({
  components: {
    CardPrice,
  },
})
export default class PricessComponent extends Vue {
  @Prop({ required: false }) priceValues: any;
}
</script>

<style lang="scss" scoped>
.pricess {
  &__title {
    @include fontUnify(30, 39, 600);
    letter-spacing: 0.02em;
    color: #1f1f1f;
    text-align: center;

    margin-bottom: 24px;

    @include bigMobile {
      @include fontUnify(16, 19, 700);
      text-transform: uppercase;
    }
  }

  &__cards {
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 16px;
  }
}
</style>
  