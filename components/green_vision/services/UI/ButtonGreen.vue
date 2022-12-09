<template>
    <button class="button-green">
        <span class="button-green__title">Оставить заявку</span>
    </button>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({
    components: {
       
    },
})
export default class ButtonGreenComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.button-green {
    width: max-content;

    background-color: #009B3E;

    border-radius: 6px;

    padding: 8px 48px;

    transition: background-color .1s ease-in-out;

    @include bigMobile {
        width: 100%;
    }

    &:hover {
        background-color: #00BC4B;
    }

    &:active {
        background-color: #007730;
    }

    &:disabled {
        cursor: auto;

        background-color: #8A8A8A;
    }

    &__title {
        @include fontUnify(18, 24, 400);
        letter-spacing: 0.02em;
        color: white;
    }
}

</style>
  