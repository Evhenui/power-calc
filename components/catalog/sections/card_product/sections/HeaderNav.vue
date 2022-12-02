<template>
    <header class="card-header">
        <div class="card-header__wrapper">
            <Suggestions :status="typeAvailability.novelty"/>
            <HeaderButtons />
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import HeaderButtons from "./HeaderButtons.vue";
import Suggestions from "../UI/Suggestions.vue";

@Component({
components: {
    HeaderButtons,
    Suggestions
},
})
export default class HeaderNavComponent extends Vue {
    typeAvailability = {
        novelty: 'novelty',
        stock: 'stock',
        sales: 'top-sales'
    }
}
</script>

<style lang="scss" scoped>
.card-header {

    &__wrapper {
        @include flex-container(row, space-between, center);

        padding: 0 16px;
    }
}
</style>
    