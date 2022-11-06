<template>
    <transition name="modal-helper-transiton">
        <div class="modal-helper" @click.stop="closeModal">
            <div @click.stop class="modal-helper__wrapper">
                <section class="modal-helper__content">
                    <header class="modal-helper__header">
                        <button class="modal-helper__close-button" @click.stop.prevent="closeModal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </header>
                    <main class="modal-helper__main">
                        <div class="modal-helper__image-wrapper">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 25.875L27 37.125" stroke="#F36C21" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M27 16.8975L27.0225 16.8725" stroke="#F36C21" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M27 49.5C39.4264 49.5 49.5 39.4264 49.5 27C49.5 14.5736 39.4264 4.5 27 4.5C14.5736 4.5 4.5 14.5736 4.5 27C4.5 39.4264 14.5736 49.5 27 49.5Z" stroke="#F36C21" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p class="modal-helper__description">
                            <slot>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </slot>
                        </p>
                    </main>
                </section>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class PopupHelperComponent extends Vue {

    closeModal():void {
        this.$emit('close')
        document.documentElement.style.overflow = 'auto';
    }
}
</script>
  
<style lang="scss" scoped>
.modal-helper {
    display: none;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: 2;

    background: rgb(0, 0, 0, 0.5);

    @media (max-width: 960px) {
        &.active {
            display: flex;
        }
    }
    &__wrapper {
        margin: auto;
        padding: 12px 10px 39px 10px;

        background-color: white;

        max-width: 343px;
        width: 100%;

        border-radius: 8px;
    }
    
    &__header {
        @include flex-container(row, flex-end, null);

        margin-bottom: 9px;
    }

    &__close-button {
        font-size: 0;
    }   

    &__main {
        padding: 0 6px;
        @include flex-container(column, center, center);
        row-gap: 28px;
    }

    &__image-wrapper {
        font-size: 0;
    }

    &__description {
        letter-spacing: 0.02em;
        @include font(16, 22, 400);
        color: #2B2B2B;
    }
}
.modal-helper-transiton-enter-active, .modal-helper-transiton-leave-active {
  transition: opacity .3s;
}
.modal-helper-transiton-enter, .modal-helper-transiton-leave-to {
  opacity: 0;
}
</style>
  