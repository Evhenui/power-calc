<template>
  <button class="button-arrow">
    <svg
      class="button-arrow__image"
      :class="{right: direction}"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="#F36C21"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ButtonArrowComponent extends Vue {
  @Prop({ required: false }) direction: boolean;

}
</script>

<style lang="scss" scoped>
.button-arrow {
    width: 32px;
    height: 32px;

    font-size: 0;

    @include flex-container(column, center, center);

    border: 1px solid #F36C21;
    border-radius: 50px;

    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &__image {
        &.right {
            transform: rotateZ(180deg);
        }
    }
}
</style>
