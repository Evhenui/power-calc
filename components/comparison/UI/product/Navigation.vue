<template>
  <nav class="card-navigation">
    <Availability :status="statusProduct.ends" />
    <NavigationButtons />
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import Availability from "./Availability.vue";
import NavigationButtons from "./NavigationButtons.vue";

@Component({
  components: {
    Availability,
    NavigationButtons,
  },
})
export default class NavigationComponent extends Vue {

  statusProduct = {
    inStock: "in-stock",
    preOrder: "pre-order",
    notAvailable: "not-available",
    ends: "ends",
  };
}
</script>
 
<style lang="scss" scoped>
.card-navigation {
   @include flex-container(row, space-between, center);

   padding: 0 8px;
   margin-bottom: 8px;
}
</style>
 