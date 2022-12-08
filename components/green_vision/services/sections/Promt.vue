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
    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    &__wrapper {
        @include flex-container(row, center, center);

        padding: 32px;
        gap: 68px;
    }

    &__image {
        width: 70px;
        height: 70px;

        color: #009B3E;
    }

    &__title {
        @include fontUnify(18, 25, 500);
        letter-spacing: 0.02em;
        color: #1F1F1F;
    }
}
</style>
      