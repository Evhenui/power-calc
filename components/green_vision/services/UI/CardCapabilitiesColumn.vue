<template>
    <div class="card-capabilities">
        <div class="card-capabilities__wrapper">
            <div class="card-capabilities__image-wrapper">
                <slot name="image"></slot>
            </div>
           <p class="card-capabilities__subtitle">
            <slot name="subtitle"></slot>
           </p>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({
    components: {
       
    },
})
export default class CardCapabilitiesColumnComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.card-capabilities {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    &__wrapper {
        @include flex-container(column, center, center);

        background-color: white;

        padding: 32px;
        gap: 32px;

        @include bigMobile {
            @include flex-container(column, center, center);

            padding: 16px 8px 24px 8px;
            gap: 16px;
        }
    }

    &__subtitle {
        max-width: 312px;
        width: 100%;

        @include fontUnify(20, 28, 400);
        text-align: center;
        letter-spacing: 0.02em;
        color: #1F1F1F;
        
        @include bigMobile {
            @include fontUnify(12, 16, 400);
        }
    }
}
</style>
  