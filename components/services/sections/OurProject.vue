<template>
    <section class="our-project">
        <h1 class="our-project__title">Наши объекты</h1>
        <div class="our-project__cards">
            <CardProject>
                <template v-slot:image>
                    <img src="../../../assets/img/theatre-card.png" alt="theatre" >
                </template>
                <template v-slot:title>Одесский академический театр оперы и балета</template>
                <template v-slot:subtitle>Один из самых знаменитых театров Европы находится под надежным контролем видеокамер ТМ GreenVision.</template>
            </CardProject>

            <CardProject>
                <template v-slot:image>
                    <img src="../../../assets/img/bakery-card.png" alt="bakery" >
                </template>
                <template v-slot:title>Волновахский хлебозавод</template>
                <template v-slot:subtitle>Камеры видеонаблюдения GreenVision контролируют производственные мощности, которые ежедневно производят 14 тонн хлебобулочных изделий.</template>
            </CardProject>

            <CardProject>
                <template v-slot:image>
                    <img src="../../../assets/img/hotel-card.png" alt="hotel" >
                </template>
                <template v-slot:title>Гостиница «Grand Pettine»</template>
                <template v-slot:subtitle>Камеры видеонаблюдения GreenVision контролируют производственные мощности, которые ежедневно производят 14 тонн хлебобулочных изделий.</template>
            </CardProject>

            <CardProject>
                <template v-slot:image>
                    <img src="../../../assets/img/caffe-card.png" alt="caffe" >
                </template>
                <template v-slot:title>Сеть кафе «Жарю Парю»</template>
                <template v-slot:subtitle>Эта сеть кафе быстрого питания пользуется популярностью у одесситов и гостей города уже более 10 лет. Видеонаблюдение от ТМ GreenVision обеспечивает контроль персонала и безопасность посетителей кафе.</template>
            </CardProject>

            <CardProject>
                <template v-slot:image>
                    <img src="../../../assets/img/airport-card.png" alt="airport" >
                </template>
                <template v-slot:title>Международный аэропорт города Кишинев</template>
                <template v-slot:subtitle>Международная безопасность находится под пристальным вниманием видеокамер нашей торговой марки.</template>
            </CardProject>

            <CardProject>
                <template v-slot:image>
                    <img src="../../../assets/img/restaurant-card.png" alt="restaurant" >
                </template>
                <template v-slot:title>Ресторан «Яхта»</template>
                <template v-slot:subtitle>Модное место для развлечений с рестораном и пляжным клубом. Безопасность гостей обеспечивает высокое качество систем видеонаблюдения от GreenVision.</template>
            </CardProject>
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import CardProject from "../UI/CardProject.vue";

@Component({
    components: {
        CardProject
    }
})
export default class OurProjectComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.our-project {
    @include flex-container(column, center, center);

    gap: 24px;

    &__title {
        @include fontUnify(30, 39, 600);
        letter-spacing: 0.02em;
        color: #1F1F1F;

        @include bigMobile {
            @include fontUnify(16, 19, 700);
            text-transform: uppercase;
        }
    }

    &__cards {
        @include flex-container(row, flex-start);
        flex-wrap: wrap;

        gap: 16px;
    }
}
</style>
  