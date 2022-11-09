<template>
  <section class="availability" :class="status">
    <span class="availability__name in-stock">В наличии</span>
    <span class="availability__name pre-order">Предзаказ</span>
    <span class="availability__name not-available">Нет в наличии</span>
    <span class="availability__name ends">Заканчивается</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({})

export default class AvailabilityComponent extends Vue {
  @Prop({ required: true }) status: string;
}
</script>
 
<style lang="scss" scoped>
.availability {
  &.in-stock &__name.in-stock {
    display: block;

    color: #159822;
  }

  &.pre-order &__name.pre-order {
    display: block;

    color: #4490bb;
  }

  &.not-available &__name.not-available {
    display: block;

    color: #393d38;
  }

  &.ends &__name.ends {
    display: block;

    color: #e25750;
  }

  &__name {
    display: none;

    @include fontUnify(12, 16, 400);
    letter-spacing: 0.02em;
  }
}
</style>
 