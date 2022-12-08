<template>
  <section class="location">
    <div class="location__wrapper">
      <h1 class="location__title">Ключевые зоны расположения камер:</h1>
      <div class="location__cards">
        <slot name="cards"></slot>
      </div>
      <p class="location__subtitle">
        Технические специалисты и монтажники оборудования GreenVision составят
        схему расположения камер исходя из конкретных целей и задач, которые
        должно решить видеонаблюдение. Мы поставляем качественное оборудование
        различных ценовых категорий (эконом, стандарт, премиум).
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class LocationComponent extends Vue {}
</script>

<style lang="scss" scoped>
.location {

    &__wrapper {
        @include flex-container(column, center, center);
    }

    &__title {
        @include fontUnify(25, 35, 700);
        color: #1F1F1F;
        text-transform: uppercase;
        letter-spacing: 0.02em;

        margin-bottom: 24px;
    }

    &__cards {
        @include flex-container(row, flex-start);
        flex-wrap: wrap;

        gap: 96px;

        margin-bottom: 32px;
    }

    &__subtitle {
        @include fontUnify(20, 28, 400);
        color: black;
        letter-spacing: 0.02em;
    }
}

</style>
  