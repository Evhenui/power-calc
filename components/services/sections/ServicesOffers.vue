<template>
    <section class="offers">
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
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 152px 16px;

    @include bigMobile {
        gap: 99px 16px;
    }
}
</style>
    