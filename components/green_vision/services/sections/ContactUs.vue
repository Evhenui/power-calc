<template>
  <section class="contacts">
    <div class="contacts__wrapper">
      <div class="contacts__info">
        <h1 class="contacts__title">СВЯЖИТЕСЬ С НАМИ ПРЯМО СЕЙЧАС</h1>
        <p class="contacts__subtitle">
          Чтобы ознакомиться с условиями сотрудничества, стоимостью продукции,
          программой лояльности для постоянных партнеров, а так же подать
          заявку, заполните и отправьте форму, которая находится ниже.
        </p>
      </div>
      <div class="contacts__inputs">
        <form class="contacts__form">
            <div class="contacts__inputs-wrapper">
                <InputServices class="contacts__input" />
                <InputServices class="contacts__input" />
                <InputServices class="contacts__input" />
                <InputServices class="contacts__input" />
            </div>
            <ButtonGreen />
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import InputServices from "../UI/InputServices.vue";
import ButtonGreen from "../UI/ButtonGreen.vue";

@Component({
  components: {
    InputServices,
    ButtonGreen
  },
})
export default class ContactUsComponent extends Vue {}
</script>

<style lang="scss" scoped>
.contacts {
    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 16px;

    &__wrapper {
        @include flex-container(row, space-between);

        padding: 136px 32px 96px 32px;
    }

    &__info {
        max-width: 504px;
        width: 100%;

        @include flex-container(column, flex-start);

        gap: 24px;
    }

    &__title {
        @include fontUnify(25, 35, 700);
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #009B3E;
    }

    &__subtitle {
        @include fontUnify(20, 28, 400);
        letter-spacing: 0.02em;
        color: #1F1F1F;
    }

    &__inputs {
        max-width: 678px;
        width: 100%;
    }

    &__form {
        @include flex-container(column, flex-start);

        gap: 84px;
    }

    &__input {
        max-width: 327px;
        width: 100%;
    }

    &__inputs-wrapper {
        @include flex-container(row, flex-start, center);
        flex-wrap: wrap;

        gap: 48px 24px;
    }
}
</style>
  