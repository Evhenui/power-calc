<template>
  <div class="site-content">
    <SvgSprite />
    <!-- <Header /> -->
    <Menu />
    <main class="site-main">
      <!-- <Nuxt /> -->
      <!-- <Checkout /> -->
     <!--  <PowerCalculator/> -->
     <!-- <Comparison/> -->
     <!--  <OrderDone/> -->
     <!-- <Catalog/> -->
     <!-- <Services /> -->
     <!-- <HomeServices /> -->
     <!-- <FlatServices /> -->
     <OfficeServices />
    </main>
    <!-- <Footer /> -->
    <!-- <PopUpCart/> -->
  </div>
</template>

<script lang="ts">
import Home from "@components/home/Home.vue";
import { Component, Vue } from "~/tools/version-types";
import Header from "@components/common/header/Header.vue";
import Footer from "@components/common/footer/Footer.vue";
import SvgSprite from "@shared/components/svg/SvgSprite.vue";
import Menu from "@components/common/header/menu/Menu.vue";
import PopUpCart from "@components/popup/PopUpCart.vue";
import Checkout from "@components/checkout/Checkout.vue";

import PowerCalculator from "@components/calculator/PowerCalculator.vue"
import Comparison from "@components/comparison/Comparison.vue"
import OrderDone from "~/components/order_done/OrderDone.vue";
import Catalog from "~/components/catalog/Catalog.vue";
import Services from "~/components/green_vision/services/Services.vue"
import HomeServices from "~/components/green_vision/services/HomeServices.vue";
import FlatServices from "~/components/green_vision/services/FlatServices.vue";
import OfficeServices from "~/components/green_vision/services/OfficeServices.vue";

@Component({
  components: {
    PopUpCart,
    Menu,
    SvgSprite,
    Footer,
    Header,
    Home,
    Checkout,
    PowerCalculator,
    Comparison,
    OrderDone,
    Catalog,
    Services,
    HomeServices,
    FlatServices,
    OfficeServices
  },
})
export default class IndexPageComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.site-content {
  display: flex;
  flex-direction: column;
}

.site-main {
  padding-top: var(--full-height-header);
}
</style>
