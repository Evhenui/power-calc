<template>
    <section class="main">
        <NavigationBar/>
        <SliderCatalog :changeView="changeView"/>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import NavigationBar from "./NavigationBar.vue";
import SliderCatalog from "./SliderCatalog.vue";
import SelectedFilter from "./SelectedFilter.vue";

@Component({
    components: {
        NavigationBar,
        SliderCatalog,
        SelectedFilter
    },
})
export default class CatalogMainComponent extends Vue {
    @Prop({required: false}) changeView: boolean;
}
</script>

<style lang="scss" scoped>
.main {
    @include flex-container(row, flex-start, flex-start);

    gap: 8px;

    @include bigMobile { 
        @include flex-container(column, flex-start, flex-start);
    }

    &__selected {
        display: none;

        @include bigMobile { 
            width: 100%;

            display: flex;
        }
    }
}
</style>
            