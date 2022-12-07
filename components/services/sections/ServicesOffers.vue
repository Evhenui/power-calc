<template>
    <section class="offers">
        <h1 class="offers__title">Мы готовы взять на себя все заботы, связанные с внедрением систем видеонаблюдения, чтобы вы могли получить эффективный инструмент контроля и обеспечения безопасности вашего имущества.</h1>
        <div class="offers__items">
            <CardOffers>
            <template v-slot:image>
                <img src="../../../assets/img/flat-card.png" alt="flat">
            </template>
            <template v-slot:title>Квартира</template>
            <template v-slot:subtitle>Установка видеонаблюдения в квартире, на лестничной площадке и во дворе многоэтажного дома</template>
            </CardOffers>
            <CardOffers>
                <template v-slot:image>
                    <img src="../../../assets/img/home-card.png" alt="home">
                </template>
                <template v-slot:title>Дом</template>
                <template v-slot:subtitle>Монтаж системы видеонаблюдения внутри жилых и хозяйственных помещений, организация системы охраны периметра</template>
            </CardOffers>
            <CardOffers>
                <template v-slot:image>
                    <img src="../../../assets/img/office-card.png" alt="office">
                </template>
                <template v-slot:title>Офис</template>
                <template v-slot:subtitle>Установка видеонаблюдения для обеспечения безопасности материальных ценностей и контроля работы персонала</template>
            </CardOffers>
            <CardOffers>
                <template v-slot:image>
                    <img src="../../../assets/img/score-card.png" alt="score">
                </template>
                <template v-slot:title>Магазин</template>
                <template v-slot:subtitle>Установка видеонаблюдения для усиления профилактики воровства среди персонала и посетителей торговых точек</template>
            </CardOffers>
            <CardOffers>
                <template v-slot:image>
                    <img src="../../../assets/img/stock-card.png" alt="stock">
                </template>
                <template v-slot:title>Cклад</template>
                <template v-slot:subtitle>Монтаж системы видеонаблюдения для обеспечения эффективного контроля безопасности внутри и снаружи складских помещений</template>
            </CardOffers>
            <CardOffers>
                <template v-slot:image>
                    <img src="../../../assets/img/production-card.png" alt="production">
                </template>
                <template v-slot:title>Производство</template>
                <template v-slot:subtitle>Монтаж системы видеонаблюдения для качественного мониторинга производственных процессов</template>
            </CardOffers>
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import CardOffers from "../UI/CardOffers.vue";

@Component({
    components: {
        CardOffers
    },
})
export default class ServicesOffersComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.offers {
    &__title {
        max-width: 954px;
        width: 100%;

        @include fontUnify(20, 30, 600);
        text-align: center;
        text-transform: uppercase;
        color: #009B3E;

        margin: 0 auto 124px auto;

        @include bigMobile {
            @include fontUnify(16, 19, 700);
        }
    }

    &__items {
        @include flex-container(row, space-between);
        flex-wrap: wrap;

        gap: 149px 16px;
    }
}
</style>
    