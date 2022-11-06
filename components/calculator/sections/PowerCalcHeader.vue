<template>
    <div class="header-calc">
        <p class="header-calc__main-description">
            <slot>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor deserunt saepe eos enim aperiam doloremque necessitatibus voluptas, accusantium ea, odio non modi est facere culpa fugiat neque iure quis voluptatem.
            </slot>
        </p>        
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class PowerCalcHeaderComponent extends Vue {
}
</script>
  
<style lang="scss" scoped>
 .header-calc {
    padding: 32px 24px;
    margin-bottom: 16px;

    background-color: var(--color-blue-white);
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    border-radius: 16px;

    &__main-description {
        @include font(20, 24, 600);
        text-align: center;
        letter-spacing: 0.02em;
        color: var(--color-ink-base);

        max-width: 820px;
        width: 100%;

        margin: 0 auto;

        @media (max-width: 960px) {
            @include font(16, 22, 400);
        }

    }
    
}
</style>
  