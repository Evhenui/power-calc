<template>
    <div class="calc-switch">
        <label class="calc-switch__wrapper">
            <input 
                :checked="value" 
                @change="updateSwitchState"
                class="calc-switch__input" 
                type="checkbox">
            <span class="calc-switch__slider"></span>
        </label>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({

})
export default class InputSwitchComponent extends Vue {
    @Prop({required: true}) value: boolean;

    updateSwitchState(event: Event) {
        this.$emit("input", (event.target as HTMLInputElement).checked);
    }
}
</script>
  
<style lang="scss" scoped>
.calc-switch {
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
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            background-color: $color-bg-grey-lighter;

            border-radius: 32px;

            transition: all .2s ease-in-out;

            cursor: pointer;

            &::before {
                content: "";

                position: absolute;
                left: 2px;
                bottom: 2px;

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
  