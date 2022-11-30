<template>
  <section class="timetable">
    <div class="timetable__wrapper">
      <h3 class="timetable__title">
        Обработка розничных заказов осуществляется:
      </h3>
      <div class="timetable__body">
        <div class="timetable__schedule">
          <span class="timetable__subtitle">ПН-ПТ</span>
          <span class="timetable__subtitle">
            <slot name="weekdays"></slot>
          </span>
        </div>
        <div class="timetable__schedule">
          <span class="timetable__subtitle">СБ-ВС</span>
          <span class="timetable__subtitle">
            <slot name="weekends"></slot>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class TimetableComponent extends Vue {}
</script>

<style lang="scss" scoped>
.timetable {
    max-width: 954px;
    width: 100%;
    margin: 0 auto;

    &__wrapper {
      @include flex-container(column, center, center);

      background-color: white;

      padding: 32px;
      gap: 24px;

      @include bigMobile {
        border-bottom: 1px solid #8A8A8A;
        
        gap: 32px;
      }
    }

    &__title {
        @include fontUnify(16, 22, 600);
        color: #2B2B2B;
        letter-spacing: 0.02em;
        text-align: center;

        @include bigMobile {
          @include fontUnify(16, 22, 500);
        }
    }

    &__body {
        max-width: 469px;
        width: 100%;

        @include flex-container(column, center, center);

        gap: 24px;
    }

    &__schedule {
        width: 100%;
        @include flex-container(row, space-between, center);
    }

    &__subtitle {
        @include fontUnify(16, 22, 400);
        color: #2B2B2B;
        letter-spacing: 0.02em;
    }
}
</style>
      