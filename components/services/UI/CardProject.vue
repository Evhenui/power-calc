<template>
    <div class="card-project">
        <div class="card-project__wrapper">
            <div class="card-project__image-wrapper">
                <slot name="image"></slot>
            </div>
            <div class="card-project__description">
                <h3 class="card-project__title">
                    <slot name="title"></slot>
                </h3>
                <p class="card-project__subtitle">
                    <slot name="subtitle"></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class CardProjectComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.card-project {
    max-width: 711px;
    width: 100%;

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    &__wrapper {
        @include flex-container(row, space-between, center);
        
        gap: 8px;
        padding: 43px 80px;

        @include bigMobile {
            @include flex-container(column, center, center);

            gap: 32px;
            padding: 32px 16px;
        }
    }

    &__description {
        max-width: 302px;
        width: 100%;

        @include flex-container(column, flex-start);

        gap: 16px;
    }

    &__title {
        @include fontUnify(16, 19, 700);
        text-transform: uppercase;
        color: #1F1F1F;
    }

    &__subtitle {
        @include fontUnify(16, 22, 400);
        letter-spacing: 0.02em;
        color: #1F1F1F;
    }
}
</style>
  