<template>
  <div class="button-help" @click="showModalHelper">
    <div class="mobile-not">
      <img
        src="@/assets/icons/help-link.png"
        alt="help"
        width="16"
        height="16"
      />
      <div class="button-help__main-wrapper">
        <div class="button-help__arrow">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-4.37114e-07 9L15 0.339744L15 17.6603L-4.37114e-07 9Z"
              fill="#F3F3F3"
            />
          </svg>
        </div>
        <div class="button-help__description-wrapper">
          <p class="button-help__description">
            <slot></slot>
          </p>
        </div>
      </div>
    </div>
    <div class="mobile">
      <PopupHelper
        :class="{ active: showModal }"
        v-if="showModal"
        @close="showModal = false"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</PopupHelper
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import PopupHelper from "@components/calculator/UI/PopupHelper.vue";

@Component({
  components: {
    PopupHelper,
  },
})
export default class HelperButtonComponent extends Vue {
  showModal: boolean = false;

  showModalHelper() {
    const innerWidthMobile: number = 1024;

    if(window.innerWidth > innerWidthMobile) {
      this.showModal = false;
    } else {
      this.showModal = true;
      document.documentElement.style.overflow = "hidden";
    }

  }
}
</script>
  
<style lang="scss" scoped>
.button-help {
  position: relative;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  flex: 0 0 auto;

  cursor: pointer;
  &:hover &__main-wrapper {
    opacity: 1;
    visibility: visible;
  }

  &__main-wrapper {
    @include flex-container(row, null, center);

    position: absolute;
    @include setAbs(-20px, 23px, auto, auto);
    z-index: 1;

    opacity: 0;
    visibility: hidden;

    transition: all 0.2s ease-in-out;
    @include bigMobile {
      display: none;
    }
  }

  &__description-wrapper {
    width: 267px;

    border-radius: 8px;

    background-color: #f3f3f3;

    padding: 8px;

  }

  &__description {
    @include fontUnify(12, 16, 400);
    color: #2b2b2b;
  }
}
</style>
  