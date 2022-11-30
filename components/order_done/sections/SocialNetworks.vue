<template>
  <section class="social-networks">
    <div class="social-networks__wrapper">
      <h3 class="social-networks__title">Следите за нами в социальных сетях:</h3>
      <div class="social-networks__icons">
        <a href="https://www.facebook.com/logicpower.official/" class="social-networks__icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6667 2.66699H18.6667C16.8986 2.66699 15.2029 3.36937 13.9526 4.61961C12.7024 5.86986 12 7.56555 12 9.33366V13.3337H8V18.667H12V29.3337H17.3333V18.667H21.3333L22.6667 13.3337H17.3333V9.33366C17.3333 8.98004 17.4738 8.6409 17.7239 8.39085C17.9739 8.1408 18.313 8.00033 18.6667 8.00033H22.6667V2.66699Z"
              stroke="black"
              stroke-width="1.29167"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/logicpower_official/" class="social-networks__icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0013 21.3327C18.9468 21.3327 21.3346 18.9449 21.3346 15.9993C21.3346 13.0538 18.9468 10.666 16.0013 10.666C13.0558 10.666 10.668 13.0538 10.668 15.9993C10.668 18.9449 13.0558 21.3327 16.0013 21.3327Z"
              stroke="black"
              stroke-width="1.95833"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.91797 20.8892V10.4448C3.91797 6.83958 6.84055 3.91699 10.4457 3.91699H20.8902C24.4954 3.91699 27.418 6.83958 27.418 10.4448V20.8892C27.418 24.4944 24.4954 27.417 20.8902 27.417H10.4457C6.84055 27.417 3.91797 24.4944 3.91797 20.8892Z"
              stroke="black"
              stroke-width="1.95833"
            />
            <path
              d="M23.332 8.68005L23.3451 8.66554"
              stroke="black"
              stroke-width="1.95833"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a href="https://www.youtube.com/c/LogicfoxLogicpower" class="social-networks__icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6667 16.0003L14 18.667V13.3337L18.6667 16.0003Z"
              fill="black"
              stroke="black"
              stroke-width="1.54167"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.66406 18.9742V13.0257C2.66406 10.1355 2.66406 8.69048 3.56317 7.76026C4.46228 6.83004 5.8916 6.78141 8.75024 6.68415C11.1376 6.60292 13.8208 6.5332 15.9974 6.5332C18.174 6.5332 20.8572 6.60292 23.2445 6.68415C26.1032 6.78141 27.5325 6.83004 28.4316 7.76026C29.3307 8.69048 29.3307 10.1355 29.3307 13.0257V18.9742C29.3307 21.8643 29.3307 23.3093 28.4316 24.2395C27.5325 25.1697 26.1032 25.2184 23.2446 25.3157C20.8572 25.3969 18.174 25.4667 15.9974 25.4667C13.8208 25.4667 11.1375 25.3969 8.75014 25.3157C5.89155 25.2184 4.46226 25.1697 3.56316 24.2395C2.66406 23.3093 2.66406 21.8643 2.66406 18.9742Z"
              stroke="black"
              stroke-width="1.54167"
            />
          </svg>
        </a>
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
export default class SocialNetworksComponent extends Vue {}
</script>

<style lang="scss" scoped>
.social-networks {
  max-width: 954px;
  width: 100%;
  margin: 0 auto;

    &__wrapper {
      @include flex-container(column, center, center);

      background-color: white;
      border-radius: 0 0 36px 36px;

      padding: 32px;
      gap: 24px;
    }

    &__title {
      @include fontUnify(16, 22, 400);
      color: #2B2B2B;
      letter-spacing: 0.02em;
    }

    &__icons {
      @include flex-container(row, space-around, center);

      gap: 48px;
    }

    &__icon {
      font-size: 0;
    }
}
</style>
      