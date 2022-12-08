<template >
    <button class="button-details">
        <span class="button-details__title">Подробнее</span>
        <SvgIcon class="button-details__image" :icon="icons['arrow-stick-right']" />
    </button>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
    components: {
        SvgIcon
    }
})
export default class ButtonDetailsComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.button-details {
    width: max-content;

    @include flex-container(row, flex-start, center);

    gap: 8px;

    &:hover,
    &:active {
        .button-details__title:after {
            width: 100%;
        }
    }

    &__title {
        position: relative;

        @include fontUnify(16, 24, 400);
        letter-spacing: 0.02em;
        color: #009B3E;

        &:after {
            content: '';

            width: 0;
            height: 1px;

            position: absolute;
            bottom: 0;
            left: 0;
            
            background-color: #009B3E;

            transition: width .2s ease-in-out;
        }
    }

    &__image {
        width: 24px;
        height: 24px;

        color: #009B3E;
    }
}
</style>
  