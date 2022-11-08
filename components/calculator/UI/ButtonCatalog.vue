<template>
  <button class="button-catalog">
    <svg
      width="19"
      height="19"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.83813 2.91602H1V9.75414H7.83813V2.91602Z"
        stroke="#2B2B2B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.5838 13.6616H11.7456V20.4998H18.5838V13.6616Z"
        stroke="#2B2B2B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.83813 13.6616H1V20.4998H7.83813V13.6616Z"
        stroke="#2B2B2B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.1634 1.50065L10.3281 6.33594L15.1634 11.1712L19.9987 6.33594L15.1634 1.50065Z"
        stroke="#2B2B2B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="button-catalog__name">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({})
export default class ButtonCatalogComponent extends Vue {}
</script>
  
<style lang="scss" scoped>
.button-catalog {
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: white;

  @include flex-container(row, center, center);
  gap: 16px;
  margin: 0 auto;
  padding: 10px 57px;

  width: max-content;

  border-radius: 36px;

  &__name {
    @include fontUnify(20, 28, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }
}
</style>
  