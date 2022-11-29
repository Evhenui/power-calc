<template>
  <nav class="card-navigation">
    <Availability 
      :status="status" 
      class="card-navigation__availability"
    />
    <NavigationButtons
      v-if="!stateScroll"
      @getPin="getPin"
     />
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
  @Prop({required: false}) status: string;
  @Prop({required: false}) stateScroll: boolean;

  getPin(status) {
    this.$emit('getPin', status)
  }
}
</script>
 
<style lang="scss" scoped>
.card-navigation {
   @include flex-container(row, space-between, center);

   padding: 0 8px;
   margin-bottom: 8px;

   @include bigMobile { 
      justify-content: flex-end;
      margin: 0;

      .card-navigation__availability {
        display: none;
      }
   }
}
</style>
 