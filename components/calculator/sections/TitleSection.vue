<template>
    <section class="source-header">
        <h3 class="source-header__title">
            <slot>Lorem ipsum dolor sit amet consectetur adipisicing elit.</slot>
        </h3>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";


@Component({

})
export default class TitleSectionComponent extends Vue {

}
</script>
  
<style lang="scss" scoped>
.source-header {
    margin-bottom: 48px;

        &__title {
            @include font(20, 24, 600);
            text-align: center;
            text-transform: uppercase;
            color: #2b2b2b;

            @media (max-width: 960px) {
                @include font($font-size: 16, $line-height: 19, $weight: 700);
            }
        }
}
</style>
  