<template>
  <div class="filter-item">
    <span class="filter-item__filter-name">
      <slot></slot>
    </span>
    <div class="filter-item__close">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="filter-item__close-state"
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
    
<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class FilterItemComponent extends Vue {}
</script>
    
<style lang="scss" scoped>
.filter-item {
  @include flex-container(row, flex-start, center);

  border: 1px solid $color-main;
  border-radius: 8px;

  padding: 4px 8px;
  gap: 8px;

  cursor: pointer;

  transition: all 0.1s ease-in-out;

  &__filter-name {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: $color-main;
  }

  &__close {
    font-size: 0;
  }
}
</style>
          