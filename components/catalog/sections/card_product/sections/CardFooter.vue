<template>
    <footer class="card-footer">
        <h1 class="card-footer__price">972 ₴</h1>
        <ButtonBuy :state="buttonState.buy" />
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import ButtonBuy from "../UI/ButtonBuy.vue";

@Component({
components: {
    ButtonBuy
},
})
export default class CardFooterComponent extends Vue {
    buttonState: any = {
        buy: 'buy',
        report: 'report',
        preOrder: 'pre-order'
    }
}
</script>

<style lang="scss" scoped>
.card-footer {
    @include flex-container(column, center);

    gap: 8px;
    
    &__price {
        @include fontUnify(28, 39, 600);
        letter-spacing: 0.02em;
        color: #F36C21;
    }
}
</style>
    