<template>
  <div 
    class="comparison" 
    :class="{ empty: pageState === false }"
  >
    <div class="comparison__wrapper">
      <ComparisonMain class="comparison__main" />
      <ComparisonEmpty class="comparison__empty" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import ComparisonEmpty from "./sections/ComparisonEmpty.vue";
import ComparisonMain from "./sections/ComparisonMain.vue";

@Component({
  components: {
    ComparisonEmpty,
    ComparisonMain,
  },
})
export default class ComparisonComponent extends Vue {
  pageState: boolean = true;
}
</script>

<style lang="scss" scoped>
.comparison {
  &.empty {
    .comparison__wrapper {
      @include bigMobile {
        padding: 0 16px;
      }
    }

    .comparison__empty {
      display: block;
    }

    .comparison__main {
      display: none;
    }
  }
  &__wrapper {
    @extend %width-main;

    @extend %padding-wrp;
    margin: 0 auto;

    @include bigMobile {
      padding: 0 0 0 16px;
    }
  }

  &__empty {
    display: none;
  }
}
</style>
