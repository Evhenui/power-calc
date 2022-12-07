<template>
    <div class="part-install">
        <div class="part-install__wrapper">
            <div class="part-install__number">
                <h1 class="part-install__number-title">
                    <slot name="number"></slot>
                </h1>
            </div>
            <h1 class="part-install__title">
                <slot name="title"></slot>
            </h1>
            <p class="part-install__subtitle">
                <slot name="subtitle"></slot>
            </p>
        </div> 
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class CardPartInstallComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.part-install {
    --gap: 24px;

    @include set-item-count-in-row(5);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    @include bigMobile {
        @include set-item-count-in-row(2);
    }

    &__wrapper {
        @include flex-container(column, center, center);

        padding: 16px 16px 24px 16px;
    }

    &__number {
        width: 64px;
        height: 64px;

        @include flex-container(column, center, center);

        background-color: #009B3E;
        
        border-radius: 50%;

        margin-bottom: 32px;

        @include bigMobile {
            width: 32px;
            height: 32px;
        }
    }

    &__number-title {
        @include fontUnify(32, 42, 600);
        color: white;

        @include bigMobile {
            @include fontUnify(25, 35, 700);
        }
    }

    &__title {
        @include fontUnify(20, 30, 600);
        text-align: center;
        color: #1F1F1F;
        text-transform: uppercase;

        margin-bottom: 16px;

        @include bigMobile {
            @include fontUnify(16, 19, 700);
        }
    }

    &__subtitle {
        @include fontUnify(16, 22, 400);
        text-align: center;
        letter-spacing: 0.02em;
        color: #1F1F1F;

        @include bigMobile {
            @include fontUnify(12, 16, 400);
        }
    }
}
</style>
  