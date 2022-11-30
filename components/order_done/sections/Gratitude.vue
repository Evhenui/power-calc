<template>
  <section class="gratitude">
    <div class="gratitude__wrapper">
      <div class="gratitude__image-wrapper">
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 50L40 62L68 34"
            stroke="url(#paint0_linear_1993_53961)"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M48 88C70.0914 88 88 70.0914 88 48C88 25.9086 70.0914 8 48 8C25.9086 8 8 25.9086 8 48C8 70.0914 25.9086 88 48 88Z"
            stroke="url(#paint1_linear_1993_53961)"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1993_53961"
              x1="28.2867"
              y1="50.2867"
              x2="69.5453"
              y2="40.5447"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#8BD1BA" />
              <stop offset="1" stop-color="#9EDE5D" stop-opacity="0.86" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1993_53961"
              x1="8"
              y1="9.91126"
              x2="102.082"
              y2="34.8283"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#8BD1BA" />
              <stop offset="1" stop-color="#9EDE5D" stop-opacity="0.86" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 class="gratitude__title">Благодарим за заявку!</h1>
      <p class="gratitude__subtitle">
        Ваша заявка успешно отправлена, наш специалист свяжется с вами в
        ближайшее время.
      </p>
      <ButtonSimple>В каталог</ButtonSimple>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import ButtonSimple from "~/components/comparison/UI/ButtonSimple.vue";

@Component({
  components: {
    ButtonSimple,
  },
})
export default class GratitudeComponent extends Vue {}
</script>

<style lang="scss" scoped>
.gratitude {
    max-width: 954px;
    width: 100%;

    margin: 0 auto;

    &__wrapper {
        @include flex-container(column, center, center);

        border-radius: 36px 36px 0 0;

        background-color: white;

        padding: 32px;
    }

    &__image-wrapper {
        font-size: 0;

        margin-bottom: 24px;
    }

    &__title {
        @include fontUnify(25, 35, 700);
        color: $color-main;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        margin-bottom: 32px;
    }

    &__subtitle {
        max-width: 643px;

        @include fontUnify(16, 22, 400);
        text-align: center;
        color: #2B2B2B;
        letter-spacing: 0.02em;

        margin-bottom: 32px;
    }
}
</style>
      