<template>
  <nav 
    class="card-navigation"
    :class="[{active: state}, {scroll: stateScroll}]"
  >
    <Availability 
      :status="status" 
      :state="state"
      class="card-navigation__availability"
    />
    <NavigationButtons :state="state" />
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import Availability from "./Availability.vue";
import NavigationButtons from "./NavigationButtons.vue";

@Component({
  components: {
    Availability,
    NavigationButtons,
  },
})
export default class NavigationComponent extends Vue {
  @Prop({required: false}) state: boolean;
  @Prop({required: false}) stateScroll: boolean;
  @Prop({required: false}) status: string;

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

   &.active {
      justify-content: flex-end;
      margin: 0;

      .card-navigation__availability {
        display: none;
      }
   }

   &.scroll {
    margin-bottom: 8px;
   }
}
</style>
 