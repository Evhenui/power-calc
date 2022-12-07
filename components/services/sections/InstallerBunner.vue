<template>
    <section class="banner-install">
        <div class="banner-install__wrapper">
            <h1 class="banner-install__title">Профессиональный монтаж</h1>
            <p class="banner-install__subtitle">Система видеонаблюдения, установленная в квартире, в первую очередь выполняет охранные функции: запись несанкционированного проникновения злоумышленников (хулиганские действия, взлом, ограбление и т.д.), отправка тревожных сигналов по датчику движения и прочее.</p>
            <div class="banner-install__buttons">
                <ButtonGreen />
                <ButtonTransparent />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import ButtonGreen from "../UI/ButtonGreen.vue";
import ButtonTransparent from "../UI/ButtonTransparent.vue";

@Component({
    components: {
        ButtonGreen,
        ButtonTransparent
    },
})
export default class InstallerBunnerComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.banner-install {
    background-image: url('@/assets/img/services-bunner.jpg');
    background-repeat: no-repeat;
    background-position-x: center;

    &__wrapper {
        @extend %width-main;
    
        margin: 0 auto 64px auto;
        padding: 72px 16px 82px 16px;
    }

    &__title {
        @include fontUnify(20, 30, 600);
        text-transform: uppercase;
        color: #1F1F1F;

        margin-bottom: 16px;
    }

    &__subtitle {
        max-width: 618px;
        width: 100%;

        @include fontUnify(16, 22, 400);
        letter-spacing: 0.02em;
        color: #1F1F1F;

        margin-bottom: 48px;
    }

    &__buttons {
        @include flex-container(column, flex-start);

        gap: 16px;
    }
}
</style>
  