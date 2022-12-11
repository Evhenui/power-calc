<template>
    <section class="basic-set">
        <h1 class="basic-set__title">
            <slot name="title"></slot>
        </h1>
        <div class="basic-set__cards">
            <slot name="cards"></slot>
        </div>
        <DescriptionSection class="basic-set__description">
            <slot name="description"></slot>
        </DescriptionSection>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import DescriptionSection from "./DescriptionSection.vue"

@Component({
    components: {
        DescriptionSection
    },
})
export default class BasicSetComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.basic-set {
    @include flex-container(column, center, center);

    gap: 24px;

    &__title {
        max-width: 994px;
        width: 100%;

        @include fontUnify(25, 35, 700);
        letter-spacing: 0.02em;
        text-transform: uppercase;
        text-align: center;
        color: #1F1F1F;

        @include bigMobile {
            @include fontUnify(18, 22, 600);
        }
    }

    &__cards {
        @include flex-container(row, flex-start);
        flex-wrap: wrap;

        gap: 32px 16px;

        @include bigMobile {
            gap: 16px;
        }
    }

    &__description {
        width: 100%;

        margin: 0;
    }
}
</style>
  