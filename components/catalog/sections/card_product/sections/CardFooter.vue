<template>
    <footer class="card-footer">
        <h1 class="card-footer__price">{{status.price}}</h1>
        <ButtonBuy :state="status.buttonState.buy" />
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import ButtonBuy from "../UI/ButtonBuy.vue";

@Component({
components: {
    ButtonBuy
},
})
export default class CardFooterComponent extends Vue {
    @Prop({ required: true }) status: any;
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
    