<template>
  <section class="promt">
    <div class="promt__wrapper">
      <SvgIcon class="promt__image" :icon="icons['warning']" />
      <span class="promt__title"
        >Дополнительные работы и оборудование оговариваются и оплачиваются
        отдельно!</span
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  components: {
    SvgIcon,
  },
})
export default class PromtComponent extends Vue {}
</script>

<style lang="scss" scoped>
.promt {
  &__wrapper {
    @include flex-container(row, center, center);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    padding: 32px;
    gap: 68px;

    @include bigMobile {
      @include flex-container(column, center, center);

      padding: 32px 16px;
      gap: 32px;
    }
  }

  &__image {
    width: 70px;
    height: 70px;

    color: #009b3e;

    @include bigMobile {
      width: 64px;
      height: 64px;
    }
  }

  &__title {
    @include fontUnify(18, 25, 500);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    @include bigMobile {
      @include fontUnify(16, 22, 400);
    }
  }
}
</style>
      