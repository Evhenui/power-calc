<template>
    <section class="slider">
        <div class="slider__wrapper">
            <CardProduct></CardProduct>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import CardProduct from "./card_product/CardProduct.vue"

@Component({
components: {
    CardProduct
},
})
export default class SliderCatalogComponent extends Vue {}
</script>

<style lang="scss" scoped>

</style>
          