<template>
    <button 
      class="button-orange" 
      @click.prevent="resultData" 
    >
        <slot>Рассчитать</slot>
    </button>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class ButtonOrangeComponent extends Vue {

    resultData():void {
      this.$emit('getResult')
    }
    
}
</script>
  
<style lang="scss" scoped>
 .button-orange {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      background-color: var(--color-primary-base);

      transition: all .1s ease-in-out;
      width: max-content;

        @include fontUnify(18, 24, 400);
          color: white;

          padding: 8px 23px;

          border-radius: 6px;

        &:hover {
          background-color: #FF5B00;

        }

        &:active {
          background-color: #AC450B;

        }

        &:disabled {
          background-color: #8A8A8A;

        }

        @include bigMobile {
          max-width: 343px;
          width: 100%;

        }
        
  }
</style>
  