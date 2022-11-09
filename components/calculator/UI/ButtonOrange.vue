<template>
  <button class="button-orange" @click.prevent="resultData">
    <slot>Рассчитать</slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({})
export default class ButtonOrangeComponent extends Vue {
  resultData() {
    this.$emit("getResult");
  }
}
</script>
  
<style lang="scss" scoped>
.button-orange {
  width: max-content;

  @include fontUnify(18, 24, 400);
  color: white;

  border-radius: 6px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: var(--color-primary-base);

  padding: 8px 23px;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #ff5b00;
  }

  &:active {
    background-color: #ac450b;
  }

  &:disabled {
    background-color: #8a8a8a;
  }

  @include bigMobile {
    max-width: 343px;
    width: 100%;
  }

  @include mobile {
    max-width: 100%;
  }
}
</style>
  