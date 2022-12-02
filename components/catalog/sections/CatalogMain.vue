<template>
    <section class="main">
        <NavigationBar/>
        <SliderCatalog/>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import NavigationBar from "./NavigationBar.vue";
import SliderCatalog from "./SliderCatalog.vue";

@Component({
    components: {
        NavigationBar,
        SliderCatalog
    },
})
export default class CatalogMainComponent extends Vue {}
</script>

<style lang="scss" scoped>
.main {
    @include flex-container(row, space-between);
}
</style>
            