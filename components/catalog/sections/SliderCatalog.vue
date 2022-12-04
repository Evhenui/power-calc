<template>
    <section class="slider">
        <div class="slider__wrapper">
            <div class="slider__items">
                <CardProduct 
                    v-for="(item, index) in 16"
                    :key="index"
                    :changeView="changeView"
                />
            </div>
            <nav class="slider__navigation">
                <ButtonShowMore />
                <div class="slider__pagination">
                    <ButtonPrev />
                    <div class="slider__pages">
                        <ButtonPage>1</ButtonPage>
                        <ButtonPage>2</ButtonPage>
                        <ButtonPage>3</ButtonPage>
                    </div>
                    <ButtonNext />
                </div>
            </nav>
        </div>
        <FooterCatalog />
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import CardProduct from "./card_product/CardProduct.vue"
import ButtonShowMore from "../UI/ButtonShowMore.vue";
import ButtonPrev from "../UI/ButtonPrev.vue"
import ButtonNext from "../UI/ButtonNext.vue"
import ButtonPage from "../UI/ButtonPage.vue";
import FooterCatalog from "../sections/FooterCatalog.vue"

@Component({
components: {
    CardProduct,
    ButtonShowMore,
    ButtonPrev,
    ButtonNext,
    ButtonPage,
    FooterCatalog
},
})
export default class SliderCatalogComponent extends Vue {
    @Prop({required: false}) changeView: boolean;
}
</script>

<style lang="scss" scoped>
.slider {

    &__wrapper {
        @include flex-container(column, flex-start);
        
        gap: 64px;
        margin-bottom: 64px;
    }

    &__items {
        @include flex-container(row, flex-start);
        flex-wrap: wrap;

        gap: 8px;
    }

    &__navigation {
        @include flex-container(column, center, center);

        gap: 32px;
    }

    &__pagination {
        @include flex-container(row, center, center);

        gap: 26px;
    }

    &__pages {
        @include flex-container(row, center, center);

        gap: 26px;
    }
}
</style>
          