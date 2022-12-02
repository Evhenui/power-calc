<template>
    <button 
        class="button-status"
        :class="status"
        :disabled="status === 'not-available'"
    >
        <div class="button-status__images">
            <SvgIcon class="button-status__image in-stock" :icon="icons['in-stock']" />
            <SvgIcon class="button-status__image not-available" :icon="icons['not-available']" />
            <SvgIcon class="button-status__image ends" :icon="icons['ends']" />
            <SvgIcon class="button-status__image pre-order" :icon="icons['pre-order']" />
        </div>
        <div class="button-status__titles">
            <span class="button-status__title in-stock">В наличии</span>
            <span class="button-status__title not-available">Нет в наличии</span>
            <span class="button-status__title ends">Заканчивается</span>
            <span class="button-status__title pre-order">Предзаказ</span>
        </div>
    </button>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
components: {
    SvgIcon 
},
})
export default class ButtonStatusComponent extends Vue {
    @Prop({ required: true }) status: string;
}
</script>

<style lang="scss" scoped>
.button-status {
    max-width: 152px;
    width: 100%;
    min-height: 28px;

    @include flex-container(row, center, center);

    border: 1px solid;
    border-radius: 4px;

    padding: 4px;
    gap: 8px;

    &.in-stock {
        border-color: #159822;

        .button-status__image.in-stock {
            display: block;
        }

        .button-status__title.in-stock {
            display: block;
        }
    }

    &.ends {
        border-color: #E25750;

        .button-status__image.ends {
            display: block;
        }

        .button-status__title.ends {
            display: block;
        }
    }

    &.not-available {
        border-color: #393D38;

        cursor: auto;

        .button-status__image.not-available {
            display: block;
        }

        .button-status__title.not-available {
            display: block;
        }
    }

    &.pre-order {
        border-color: #4490BB;

        .button-status__image.pre-order {
            display: block;
        }

        .button-status__title.pre-order {
            display: block;
        }
    }

    &__images {
    }

    &__image {
        display: none;

        &.in-stock {
            color: #159822;
        }

        &.ends {
            color: #E25750;
        }

        &.not-available {
            color: #393D38;
        }

        &.pre-order {
            color: #4490BB;
        }
    }

    &__titles {
    }

    &__title {
        display: none;

        &.in-stock, &.ends,
        &.not-available, &.pre-order  {
            @include fontUnify(12, 16, 400);
            letter-spacing: 0.02em;
        }

        &.in-stock {
            color: #159822;
        }

        &.ends {
            color: #E25750;
        }

        &.not-available {
            color: #393D38;
        }

        &.pre-order {
            color: #4490BB;
        }
    }
}

</style>
          