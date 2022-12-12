<template>
  <section class="services">
    <div class="services__wrapper">
      <DescriptionSection class="services__description">
        <p class="services__subtitle">
          Современные системы видеонаблюдения повсеместно используются, не
          только в качестве элемента системы охраны жилых и производственных
          объектов, но и как эффективный инструмент контроля персонала и ведения
          бизнеса. GreenVision – это украинский бренд. За более 6-ти лет работы
          на рынке наша компания заслужила репутацию надежного поставщика
          оборудования и комплектующих для систем видеонаблюдения.
        </p>
      </DescriptionSection>
      <ServicesOffers class="services__offers" />
      <PartProcess class="services__process" />
      <OurProject class="services__our-project" />
      <Pricess class="services__pricess" :priceValues="priceServices" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import DescriptionSection from "./sections/DescriptionSection.vue";
import ServicesOffers from "./sections/ServicesOffers.vue";
import PartProcess from "./sections/PartProcess.vue";
import OurProject from "./sections/OurProject.vue";
import Pricess from "./sections/Pricess.vue";

@Component({
  components: {
    DescriptionSection,
    ServicesOffers,
    PartProcess,
    OurProject,
    Pricess,
  },
})
export default class ServicesComponent extends Vue {
  priceServices: any = {
    flat: [
      { itemName: "Выезд специалиста для замеров" },
      { itemName: "Просчет проекта" },
      { itemName: "Установка 4 камер" },
      { itemName: "Подключение источников питания" },
      { itemName: "Видеорегистратор на 4 канала" },
      { itemName: "Прокладка коммуникаций для подключения оборудования" },
    ],
    home: [
      { itemName: "Выезд специалиста для замеров" },
      { itemName: "Просчет проекта" },
      { itemName: "Установка 8 камер" },
      { itemName: "Монтаж подключение СКУД" },
      { itemName: "Подключение источников питания" },
      { itemName: "Видеорегистратор на 8 каналов" },
      { itemName: "Прокладка коммуникаций для подключения оборудования" },
      { itemName: "Настройка удаленного наблюдения" },
    ],
    office: [
      { itemName: "Выезд специалиста для замеров" },
      { itemName: "Просчет проекта" },
      { itemName: "Установка 8 камер" },
      { itemName: "Жесткий диск на 1 TB" },
      { itemName: "Подключение источников питания" },
      { itemName: "Видеорегистратор на 8 каналов" },
      { itemName: "Прокладка коммуникаций для подключения оборудования" },
      { itemName: "Настройка удаленного наблюдения" },
      { itemName: "Настройка записи видеонаблюдения" },
    ],
    score: [
      { itemName: "Выезд специалиста для замеров" },
      { itemName: "Просчет проекта" },
      { itemName: "Установка 16 камер" },
      { itemName: "Жесткий диск на 2 TB" },
      { itemName: "Подключение источников питания" },
      { itemName: "Видеорегистратор на 16 каналов" },
      { itemName: "Прокладка коммуникаций для подключения оборудования" },
      { itemName: "Настройка удаленного наблюдения" },
    ],
    production: [
      { itemName: "Выезд специалиста для замеров" },
      { itemName: "Просчет проекта" },
      { itemName: "Установка 16 камер" },
      { itemName: "Жесткий диск на 8 TB" },
      { itemName: "Подключение источников питания" },
      { itemName: "Видеорегистратор на 16 каналов" },
      { itemName: "Прокладка коммуникаций для подключения оборудования" },
      { itemName: "Настройка удаленного наблюдения" },
    ],
    stock: [
      { itemName: "Выезд специалиста для замеров" },
      { itemName: "Просчет проекта" },
      { itemName: "Установка 14 камер" },
      { itemName: "Установка 2 роботизированных камер" },
      { itemName: "Жесткий диск на 8 TB" },
      { itemName: "Подключение источников питания" },
      { itemName: "Видеорегистратор на 16 каналов" },
      { itemName: "Прокладка коммуникаций для подключения оборудования" },
      { itemName: "Настройка записи видеонаблюдения" },
      { itemName: "Настройка удаленного наблюдения" },
    ],
  };
}
</script>

<style lang="scss" scoped>
.services {
  background-color: white;

  &__wrapper {
    padding-bottom: 136px;
  }

  &__description,
  &__offers,
  &__our-project {
    @extend %width-main;

    margin: 0 auto 64px auto;
    @extend %padding-wrp;

    @include bigMobile {
      margin: 0 auto 32px auto;
    }
  }

  &__subtitle {
    max-width: 1200px;
    width: 100%;

    @include fontUnify(16, 22, 400);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    margin: 0 auto;

    @include bigMobile {
      text-align: left;
    }
  }

  &__process {
    margin-bottom: 64px;

    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__pricess {
    @extend %width-main;

    margin: 0 auto;
    @extend %padding-wrp;
  }
}
</style>
  