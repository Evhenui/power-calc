<template>
    <section class="part-process">
        <div class="part-process__wrapper">
            <h1 class="part-process__title">Из каких этапов состоит процесс установки системы видеонаблюдения?</h1>
        <div class="part-process__cards">
            <CardPartInstall class="part-process__card">
                <template v-slot:number>1</template>
                <template v-slot:title>заявка</template>
                <template v-slot:subtitle>подача заявки на установку видеонаблюдения</template>
            </CardPartInstall>
            <CardPartInstall class="part-process__card">
                <template v-slot:number>2</template>
                <template v-slot:title>замер</template>
                <template v-slot:subtitle>выезд нашего специалиста на объект</template>
            </CardPartInstall>
            <CardPartInstall class="part-process__card">
                <template v-slot:number>3</template>
                <template v-slot:title>Расчет стоимости</template>
                <template v-slot:subtitle>составление проекта и сметы на установку видеонаблюдения</template>
            </CardPartInstall>
            <CardPartInstall class="part-process__card">
                <template v-slot:number>4</template>
                <template v-slot:title>Установка</template>
                <template v-slot:subtitle>доставка, монтаж и настройка оборудования</template>
            </CardPartInstall>
            <CardPartInstall class="part-process__card">
                <template v-slot:number>5</template>
                <template v-slot:title>Прием работы</template>
                <template v-slot:subtitle>сдача готового объекта заказчику </template>
            </CardPartInstall>
        </div>
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import CardPartInstall from '../UI/CardPartInstall.vue';

@Component({
    components: {
        CardPartInstall
    },
})
export default class PartProcessComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.part-process {
    background-color: #F5F5F5;

    &__wrapper {
        @extend %width-main;

        padding: 48px 16px;
        margin: 0 auto;

        @include bigMobile {
            padding: 24px 16px;
        }
    }

    &__title {
        max-width: 665px;
        width: 100%;
        
        @include fontUnify(30, 39, 600);
        text-align: center;
        letter-spacing: 0.02em;
        color: #1F1F1F;

        margin: 0 auto 24px auto;

        @include bigMobile {
            @include fontUnify(16, 19, 700);
            text-transform: uppercase;
        }
    }

    &__cards {
        @include flex-container(row, flex-start);
        flex-wrap: wrap;

        gap: 24px;
    }
}
</style>
  