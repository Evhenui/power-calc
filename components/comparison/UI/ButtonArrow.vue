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
        class="button-arrow__image-state"
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

    border: 2px solid #F36C21;
    border-radius: 50px;

    background: rgba(255, 255, 255, 0.5);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    transition: all .1s ease-in-out;

    &:hover {
      background-color: #F36C21;

      .button-arrow__image-state {
        stroke: white;
      }
    }

    &:active {
      border-color: #AC450B;
      background-color: #AC450B;
    }

    &__image {
        &.right {
            transform: rotateZ(180deg);
        }
    }
}
</style>
