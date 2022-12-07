<template>
    <div class="header">
      <p class="header__main-description">
        <slot></slot>
      </p>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "~/tools/version-types";
  
  @Component({})
  export default class DescriptionSectionComponent extends Vue {}
  </script>
    
  <style lang="scss" scoped>
  .header {
    border-radius: 16px;
  
    background-color: var(--color-blue-white);
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  
    padding: 32px;
    margin-bottom: 64px;

    @include bigMobile {
      padding: 16px;
      margin-bottom: 32px;
    }
  
    &__main-description {
      max-width: 1200px;
      width: 100%;
  
      @include fontUnify(16, 22, 400);
      text-align: center;
      letter-spacing: 0.02em;
      color: #1F1F1F;
  
      margin: 0 auto;
    }
  }
  </style>
    