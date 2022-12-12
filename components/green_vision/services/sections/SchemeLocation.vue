<template>
  <section class="scheme">
    <h1 class="scheme__title">Приклад схеми установки системи безпеки</h1>
    <div class="scheme__image">
      <slot name="scheme"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
  components: {},
})
export default class SchemeLocationComponent extends Vue {}
</script>

<style lang="scss" scoped>
.scheme {
  @include flex-container(column, center, center);

  gap: 64px;

  @include bigMobile {
    gap: 16px;
  }

  &__title {
    @include fontUnify(25, 35, 700);
    letter-spacing: 0.02em;
    text-align: center;
    text-transform: uppercase;
    color: #1f1f1f;

    @include bigMobile {
      @include fontUnify(16, 19, 700);
    }
  }
}
</style>
        