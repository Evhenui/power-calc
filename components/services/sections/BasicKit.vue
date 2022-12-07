<template>
    <section class="basic-kit">
        <h1 class="basic-kit__title">
            <slot name="title"></slot>
        </h1>
        <div class="basic-kit__cards">
            
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({
    components: {
       
    },
})
export default class BasicKitComponent extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
  