<template>
    <div class="checkbox">
        <input class="checkbox__custom-checkbox" 
            type="checkbox" 
            :id='inputType' 
            :name='inputType'
            :checked="value" 
            @change="updateChecked"
        >
        <label class="checkbox__label" :for='inputType'>
            <slot>lorem</slot>
        </label>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({})
export default class InputCheckboxComponent extends Vue {
    
    @Prop({required: true}) inputType: string;
    @Prop({required: true}) value: boolean;

    updateChecked(event:Event):void {
      this.$emit("input", (event.target as HTMLInputElement).checked);
    }
}
</script>
  
<style lang="scss" scoped>
    .checkbox {

        &__custom-checkbox {
            position: absolute;
            z-index: -1;
            opacity: 0;

        }

        &__label {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

            @include fontUnify(16, 24, 400);

            display: inline-flex;

            align-items: center;
            user-select: none;

            position: relative;

        &::before {
            content: '';

            transition: all .1s ease-in-out;
            display: inline-block;

            width: 24px;
            height: 24px;

            flex-shrink: 0;
            flex-grow: 0;

            border: 1px solid $color-border-grey-light;
            border-radius: 50%;

            margin-right: 16px;

        }

        &::after {
            content: '';
            transition: all .1s ease-in-out;
            
            position: absolute;
            @include setAbs( 50%, 8px, auto, auto );

            transform: translateY(-50%);

            width: 8px;
            height: 0;

            border-radius: 50%;

            background-color: white;

        }

        }

        &__custom-checkbox:not(:disabled):not(:checked) + &__label:hover::before {
            border-color: $color-main-dark;

        }

        &__custom-checkbox:checked + &__label::before {
            border-color:$color-main;
            background-color: $color-main;

        }

        &__custom-checkbox:checked + &__label::after {
            height: 8px;

        }

        &__custom-checkbox:disabled + &__label::before {
            background-color: #e9ecef;

        }
        
    }
</style>
  