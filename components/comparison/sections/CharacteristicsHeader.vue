<template>
  <section class="characteristics-header">
    <CharacteristicsBar />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import CharacteristicsBar from "./CharacteristicsBar.vue";

@Component({
  components: {
    CharacteristicsBar,
  },
})
export default class CharacteristicsHeaderComponent extends Vue {}
</script>
 
<style lang="scss" scoped>
</style>
 