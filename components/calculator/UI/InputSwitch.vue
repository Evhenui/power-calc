<template>
    <div class="switch">
        <label class="switch__wrapper">
            <input 
                :checked="value" 
                @change="updateSwitchState"
                class="switch__input" 
                type="checkbox">
            <span class="switch__slider"></span>
        </label>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({})
export default class InputSwitchComponent extends Vue {

    @Prop({required: true}) value: boolean;

    updateSwitchState(event: Event):void {
        this.$emit("input", (event.target as HTMLInputElement).checked);
    }
}
</script>
  
<style lang="scss" scoped>
.switch {
    font-size: 0;

        &__wrapper {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

            position: relative;

            display: inline-block;

            width: 56px;
            height: 32px;

        }
        
        &__wrapper &__input {
            display:none;

        }
        
        &__slider {

            @include absoluteGrow(absolute, 0);

            background-color: $color-bg-grey-lighter;

            border-radius: 32px;

            transition: all .2s ease-in-out;

            cursor: pointer;

            &::before {
                content: "";

                position: absolute;
                @include setAbs(auto, 2px, auto, 2px);

                width: 28px;
                height: 28px;
                             
                background-color: white;

                border-radius: 50%;

                transition: all .2s ease-in-out;

            }
        }
        
        &__input:checked + &__slider{
            background-color: $color-main;

        }

        &__input:checked + &__slider:active{
            background-color: $color-main-dark;

        }

        &__input + &__slider:active{
            background-color: $color-main-dark;

        }
        
        &__input:checked + &__slider:before {
            transform: translateX(24px);

        }
        
}
</style>
  