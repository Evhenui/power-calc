<template>
    <div class="header">
      <div class="header__wrapper">
        <p class="header__main-description">
          <slot></slot>
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "~/tools/version-types";
  
  @Component({})
  export default class DescriptionSectionComponent extends Vue {}
  </script>
    
  <style lang="scss" scoped>
  .header {
    margin-bottom: 64px;

    @include bigMobile {
      margin-bottom: 32px;
    }

    &__wrapper {
      border-radius: 16px;
  
      background-color: var(--color-blue-white);
      box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

      padding: 32px;

      @include bigMobile {
        padding: 16px;
      }
    }
  
    &__main-description {
      max-width: 1200px;
      width: 100%;
  
      @include fontUnify(16, 22, 400);
      text-align: center;
      letter-spacing: 0.02em;
      color: #1F1F1F;
  
      margin: 0 auto;

      @include bigMobile {
        text-align: left;
      }
    }
  }
  </style>
    