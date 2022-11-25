<template>
  <section 
    class="availability"
    :class="[status, {active : state}]"
    >
    <span class="availability__name inStock">В наличии</span>
    <span class="availability__name preOrder">Предзаказ</span>
    <span class="availability__name notAvailable">Нет в наличии</span>
    <span class="availability__name ends">Заканчивается</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({})

export default class AvailabilityComponent extends Vue {
  @Prop({ required: true }) status: string;
  @Prop({ required: false }) state: boolean;
}
</script>
 
<style lang="scss" scoped>
.availability {
  &.active {
    display: none;
  }
  &.inStock &__name.inStock {
    display: block;

    color: #159822;
  }

  &.preOrder &__name.preOrder {
    display: block;

    color: #4490bb;
  }

  &.notAvailable &__name.notAvailable {
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
 