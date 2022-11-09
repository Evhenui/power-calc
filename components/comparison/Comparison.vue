<template>
    <div class="comparison">
       <div class="comparison__wrapper">
         <HeaderNavigation/>
         <CharacteristicsHeader/>
       </div>
   </div>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import HeaderNavigation from "./sections/HeaderNavigation.vue"
import CharacteristicsHeader from "./sections/CharacteristicsHeader.vue";


@Component({
   components: {
      HeaderNavigation,
      CharacteristicsHeader
   }
})
export default class ComparisonComponent extends Vue {}
</script>
 
<style lang="scss" scoped>
.comparison {
 &__wrapper {
   @extend %width-main;

   @extend %padding-wrp;
   margin: 0 auto;
 }
}
</style>
 