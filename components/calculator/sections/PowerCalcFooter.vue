<template>
    <section class="calc-about-selected">
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class PowerCalcFooterComponent extends Vue {
}
</script>
  
<style lang="scss" scoped>
.calc-about-selected {
    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    border-radius: 12px;

    padding: 32px;
}
</style>
  