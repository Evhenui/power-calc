<template>
    <section class="location">
      <div class="location__wrapper">
        <h1 class="location__title">Ключевые зоны расположения камер:</h1>
        <div class="location__cards">
          <slot name="cards"></slot>
        </div>
        <p class="location__subtitle">
          <slot name="subtitle"></slot>
        </p>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "~/tools/version-types";
  
  @Component({
    components: {},
  })
  export default class LocationLongComponent extends Vue {}
  </script>
  
  <style lang="scss" scoped>
  .location {
    &__title {
      @include fontUnify(25, 35, 700);
      color: #1f1f1f;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.02em;
  
      margin-bottom: 24px;
  
      @include bigMobile { 
        @include fontUnify(18, 22, 600);
      }
    }
  
    &__cards {
      @include flex-container(row, flex-start);
      flex-wrap: wrap;
  
      gap: 45px;
  
      margin: 0 auto 32px auto;
  
      @include bigMobile { 
        margin: 0 auto 24px auto;
        gap: 24px;
      }
    }
  
    &__name {
      @include fontUnify(20, 28, 400);
      letter-spacing: 0.02em;
      color: black;
    }
  
    &__subtitle {
      max-width: 1197px;
      width: 100%;
  
      @include fontUnify(20, 28, 400);
      color: black;
      letter-spacing: 0.02em;
  
      margin: 0 auto;
  
      @include bigMobile { 
        @include fontUnify(16, 22, 400);
      }
    }
  }
  </style>
    