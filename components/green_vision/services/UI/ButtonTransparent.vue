<template>
  <button class="button-transparent">
    <SvgIcon
      class="button-transparent__image"
      :icon="icons['button-transparent']"
    />
    <span class="button-transparent__title"
      >Заказать монтаж: +38(067)585-67-53</span
    >
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "~/_shared/components/svg/SvgIcon.vue";

@Component({
  components: {
    SvgIcon,
  },
})
export default class ButtonTransparentComponent extends Vue {}
</script>

<style lang="scss" scoped>
.button-transparent {
  width: max-content;

  @include flex-container(row, center, center);

  border: 1px solid #009b3e;
  border-radius: 6px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  gap: 8px;
  padding: 8px 16px;

  transition: background-color 0.1s ease-in-out;
  transition: border-color 0.1s ease-in-out;

  @include bigMobile {
    width: 100%;
  }

  &:hover {
    border-color: #00bc4b;
    background-color: #00bc4b;

    .button-transparent__title,
    .button-transparent__image {
      color: white;
    }
  }

  &:active {
    border-color: #007730;
    background-color: #007730;

    .button-transparent__title,
    .button-transparent__image {
      color: white;
    }
  }

  &:disabled {
    cursor: auto;

    border-color: #8a8a8a;
    background-color: #8a8a8a;

    .button-transparent__title,
    .button-transparent__image {
      color: white;
    }
  }

  &__image {
    width: 24px;
    height: 24px;

    color: #009b3e;
  }

  &__title {
    max-width: 180px;
    width: 100%;

    @include fontUnify(18, 24, 400);
    text-align: center;
    letter-spacing: 0.02em;
    color: #009b3e;
  }
}
</style>
  