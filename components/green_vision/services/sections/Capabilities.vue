<template>
    <section class="capabilities">
        <div class="capabilities__wrapper">
            <h1 class="capabilities__titlte">
                <slot name="title"></slot>
            </h1>
            <div class="capabilities__cards">
                <slot name="card"></slot>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({})
export default class CapabilitiesComponent extends Vue {}
</script>

<style lang="scss" scoped>
.capabilities {
    &__wrapper {
        @include flex-container(column, center, center);

        gap: 24px;
    }

    &__titlte {
        @include fontUnify(30, 39, 600);
        text-align: center;
        letter-spacing: 0.02em;
        color: #1F1F1F;

        @include bigMobile {
            @include fontUnify(18, 22, 600);
        }
    }

    &__cards {
        @include flex-container(row, flex-start);
        flex-wrap: wrap;

        gap: 16px;
    }
}
</style>
