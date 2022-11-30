<template>
  <section class="order-done">
    <div class="order-done__wrapper">
      <Gratitude />
      <Timetable>
        <template v-slot:weekdays>9:00 — 18:00</template>
        <template v-slot:weekends>11:00 — 15:00</template>
      </Timetable>
      <SocialNetworks />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import Timetable from "./sections/Timetable.vue";
import SocialNetworks from "./sections/SocialNetworks.vue";
import Gratitude from "./sections/Gratitude.vue";

@Component({
  components: {
    Gratitude,
    Timetable,
    SocialNetworks,
  },
})
export default class OrderDoneComponent extends Vue {}
</script>

<style lang="scss" scoped>
.order-done {
  @include bigMobile {
    background-color: white;
  }

  &__wrapper {
    @extend %width-main;

    @include flex-container(column, center, center);

    padding: 16px 16px 136px 16px;
    margin: 0 auto;
    gap: 8px;

    @include bigMobile {
      padding: 64px 16px 152px 16px;
    }
  }
}
</style>
      