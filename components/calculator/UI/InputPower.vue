<template>
    <div class="calc-input">
        <div :class="{'error':errorState}" class="calc-input__wrapper">
            <input class="calc-input__data-input" 
                :type="typeInput" 
                :id="inputId"
                :disabled="isDisable"
                :value="value" 
                @input="updateName"
                @focus="cl = true"
                @blur="cl = false"
            >
            <span 
                :class="{'active':cl, 'disabled':isDisable}" 
                class="calc-input__units"
            
            >
                <slot>Lorem</slot>
            </span>
            <div class="calc-input__input-error">
                <span class="calc-input__error-text">Ошибка: данные некорректны</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({

})
export default class InputPowerComponent extends Vue {
    cl: boolean = false;

    @Prop({required: true}) inputId: string;
    @Prop({required: true, default: false}) isDisable: boolean;
    @Prop({required: true}) typeInput: string;
    @Prop({required: true}) value: [Number, String];
    @Prop({required: true, default: false}) errorState: boolean;
    
    updateName(event: Event):void {
        this.$emit("input", (event.target as HTMLInputElement).value);
    }
}
</script>
  
<style lang="scss" scoped>
  .calc-input {
        max-width: 327px;
        width: 100%;

        @media (max-width: 960px) {
            max-width: 343px;
        }

        &__wrapper {
            position: relative;
        }

        &__wrapper.error &__data-input {
            border-color: #EB1717;
        }

        &__wrapper.error &__units {
            border-color: #EB1717;
        }

        &__wrapper.error &__input-error {
            opacity: 1;
        }

        &__data-input {
            @include font(16, 16, 400);
            color: #2B2B2B;

            background-color: white;

            border: 1px solid #BDBDBD;
            border-radius: 8px;

            width: 100%;
            height: 48px;
            
            padding: 16px;
           
            transition: all .1s ease-in-out;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;

                margin: 0;
            }

            &:focus {
                border-color: #8A8A8A;
            }

            &:disabled {
                border-color: #E9E9E9;

                color: #B4B6B8;
                cursor: auto;
            }

        }

        &__input-error {
            transition: all .1s ease-in-out;

            position: absolute;
            bottom: -21px;
            left: 0;

            padding-top: 8px;

            opacity: 0;
        }

        &__error-text {
            letter-spacing: 0.02em;
            @include font(12, 16, 400);
            color: #EB1717;
        }

        &__units {
            transition: all .1s ease-in-out;

            position: absolute;
            top: 0;
            right: 0;

            @include flex-container(row, center, center);

            width: 87px;
            height: 100%;

            background-color: #F3F3F3;

            border: 1px solid #BDBDBD;
            border-radius: 8px;

            @include font(16, 16, 400);
            color: #2B2B2B;

            &.active {
                border-color: #8A8A8A;
            }

            &.disabled {
                border-color: #F3F3F3;

                color: #8A8A8A;
            }
        }
    }
</style>
  