<template>
  <section class="flat-services">
    <div class="flat-services__wrapper">
      <DescriptionSection class="flat-services__description">
        <p class="flat-services__description-text">
          Система видеонаблюдения, установленная в квартире, в первую очередь
          выполняет охранные функции: запись несанкционированного проникновения
          злоумышленников (хулиганские действия, взлом, ограбление и т.д.),
          отправка тревожных сигналов по датчику движения и прочее.
        </p>
      </DescriptionSection>

      <Capabilities class="flat-services__capabilities">
        <template v-slot:title>Система безопасности позволяет:</template>
        <template v-slot:card>
          <CardCapabilitiesColumn class="flat-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="flat-services__image-capabilities"
                :icon="icons['baby-capabilities']"
              />
            </template>
            <template v-slot:subtitle
              >Cмотреть за детьми в режиме реального времени</template
            >
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="flat-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="flat-services__image-capabilities"
                :icon="icons['kat-capabilities']"
              />
            </template>
            <template v-slot:subtitle>Cледить за животными</template>
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="flat-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="flat-services__image-capabilities"
                :icon="icons['woomen-capabilities']"
              />
            </template>
            <template v-slot:subtitle
              >Осуществлять контроль работы домашнего персонала</template
            >
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="flat-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="flat-services__image-capabilities"
                :icon="icons['stairs-capabilities']"
              />
            </template>
            <template v-slot:subtitle
              >Bидеть, что происходит на лестничной площадке</template
            >
          </CardCapabilitiesColumn>
        </template>
      </Capabilities>

      <InstallerBunner class="flat-services__bunner" />

      <DescriptionSection class="flat-services__description">
        <p class="flat-services__description-text narrow-width">
          Оборудование для систем видеонаблюдения и систем контроля доступа для
          квартир; монтаж камер с учетом особенностей каждого объекта; гарантии
          и техническое обслуживание.
        </p>
      </DescriptionSection>

      <BasicSet class="flat-services__set">
        <template v-slot:title
          >Пример базового комплекта оборудования для системы видеонаблюдения в
          квартире</template
        >

        <template v-slot:cards>
          <CardBasicSet class="flat-services__set-card">
            <template v-slot:amount>х4</template>
            <template v-slot:image>
              <img src="@/assets/img/camera-big-set.png" alt="camera" />
            </template>
            <template v-slot:name>Купольная IP камера</template>
          </CardBasicSet>

          <CardBasicSet class="flat-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/dvr-set.png" alt="dvr" />
            </template>
            <template v-slot:name>Видеорегистратор</template>
          </CardBasicSet>

          <CardBasicSet class="flat-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/hdmi-set.png" alt="hdmi" />
            </template>
            <template v-slot:name>Кабель HDMI 1.5 м</template>
          </CardBasicSet>

          <CardBasicSet class="flat-services__set-card">
            <template v-slot:amount>х2</template>
            <template v-slot:image>
              <img src="@/assets/img/patch-cord-set.png" alt="patch cord" />
            </template>
            <template v-slot:name>Патч-корд</template>
          </CardBasicSet>

          <CardBasicSet class="flat-services__set-card">
            <template v-slot:image>
              <img src="@/assets/img/materials-set.png" alt="materials" />
            </template>
            <template v-slot:name>Материалы для подключения</template>
          </CardBasicSet>
        </template>
        <template v-slot:description>
          <p class="flat-services__description-text slim">
            Базовый перечень оборудования решает основные проблемы видеоконтроля
            в квартире. Наши специалисты готовы предложить схему подключения
            системы видеонаблюдения исходя из особенностей Вашего объекта.
            Соответственно, список необходимого Вам оборудования и его стоимость
            может измениться.
          </p>
        </template>
      </BasicSet>

      <LocationRow class="flat-services__location">
        <template v-slot:cards>
          <CardLocationRow class="flat-services__location-card">
            <template v-slot:image>
              <SvgIcon
                class="flat-services__image-location"
                :icon="icons['door-location']"
              />
            </template>
            <template v-slot:item>
              <CheckItem class="flat-services__price-item"
                >Входная дверь</CheckItem
              >
              <CheckItem class="flat-services__price-item"
                >Обзор на лестницу</CheckItem
              >
            </template>
          </CardLocationRow>

          <CardLocationRow class="flat-services__location-card">
            <template v-slot:image>
              <SvgIcon
                class="flat-services__image-location"
                :icon="icons['elevator-location']"
              />
            </template>
            <template v-slot:item>
              <CheckItem class="flat-services__price-item"
                >Зона лифта</CheckItem
              >
              <CheckItem class="flat-services__price-item"
                >Обзор парадной</CheckItem
              >
            </template>
          </CardLocationRow>
        </template>
        <template v-slot:subtitle>
          Специалисты-монтажники из команды GreenVision практикуют
          индивидуальный подход к каждому клиенту. Они обязательно подберут
          оптимальное решение для установки видеонаблюдения, исходя из целей,
          которые оно должно выполнять. Мы поставляем только проверенное
          (качественное) оборудование, рассчитанное на любой бюджет (от эконом
          до премиум класса).
        </template>
      </LocationRow>

      <ServicePrice class="flat-services__service-price">
        <template v-slot:title
          >Что входит в услугу установки типового комплекта видеонаблюдения для
          квартиры?</template
        >
        <template v-slot:price>7 500грн</template>
        <template v-slot:item>
          <CheckItem class="flat-services__price-item"
            >Комплект видеонаблюдения FullHD разрешения, камеры для наружной и
            внутренней установки с инфракрасной подсветкой до 20 метров
          </CheckItem>
          <CheckItem class="flat-services__price-item"
            >Видеорегистратор без накопителя</CheckItem
          >
        </template>
        <template v-slot:image>
          <img src="@/assets/img/flat-stock-card.png" alt="flat" />
        </template>
      </ServicePrice>

      <Offers class="flat-services__offers">
        <template v-slot:title>Видеорегистратор без накопителя</template>
        <template v-slot:item>
          <div class="flat-services__offer-section">
            <CheckItem class="flat-services__offer-item"
              >Установка 2 камер на высоте не более 3 метров (без
              коробок)</CheckItem
            >
            <CheckItem class="flat-services__offer-item">
              Сверление не более 2 отверстий до 20 сантиметров для прокладки в
              них кабеля по необходимости
            </CheckItem>
            <CheckItem class="flat-services__offer-item">
              Подключение видеорегистратора и камер к сети (2 свободные розетки,
              или удлинитель заказчика)
            </CheckItem>
          </div>
          <div class="flat-services__offer-section">
            <CheckItem class="flat-services__offer-item">
              Подключение видеорегистратора к телевизору заказчика на расстоянии
              1.5 метра
            </CheckItem>
            <CheckItem class="flat-services__offer-item">
              Прокладка кабеля открытым способом не более 18 метров до камеры
              (крепление стяжки; клипсы; под армрстронгом, без сверления
              отверстий для фиксации кабельной трассы ) на высоте до 3 метров
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Promt class="flat-services__promt" />

      <SchemeLocation class="flat-services__scheme">
        <template v-slot:scheme>
          <img src="@/assets/img/scheme-flat.png" alt="scheme home" />
        </template>
      </SchemeLocation>

      <ContactUs class="flat-services__contacts" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "~/_shared/components/svg/SvgIcon.vue";
import DescriptionSection from "./sections/DescriptionSection.vue";
import Capabilities from "./sections/Capabilities.vue";
import CardCapabilitiesColumn from "./UI/CardCapabilitiesColumn.vue";
import InstallerBunner from "./sections/InstallerBunner.vue";
import BasicSet from "./sections/BasicSet.vue";
import CardBasicSet from "./UI/CardBasicSet.vue";
import LocationRow from "./sections/LocationRow.vue";
import ServicePrice from "./sections/ServicePrice.vue";
import CheckItem from "./UI/CheckItem.vue";
import Offers from "./sections/Offers.vue";
import Promt from "./sections/Promt.vue";
import SchemeLocation from "./sections/SchemeLocation.vue";
import ContactUs from "./sections/ContactUs.vue";
import CardLocationRow from "./UI/CardLocationRow.vue";

@Component({
  components: {
    SvgIcon,
    DescriptionSection,
    Capabilities,
    CardCapabilitiesColumn,
    InstallerBunner,
    BasicSet,
    CardBasicSet,
    LocationRow,
    ServicePrice,
    CheckItem,
    Offers,
    Promt,
    SchemeLocation,
    ContactUs,
    CardLocationRow,
  },
})
export default class FlatServicesComponent extends Vue {}
</script>

<style lang="scss" scoped>
.flat-services {
  background-color: white;

  &__description,
  &__capabilities,
  &__set,
  &__location,
  &__service-price,
  &__promt,
  &__scheme,
  &__contacts {
    @extend %width-main;

    margin: 0 auto 64px auto;
    @extend %padding-wrp;
  }

  &__description {
    @include bigMobile {
      margin: 0 auto 32px auto;
    }
  }

  &__description-text {
    @include fontUnify(20, 24, 600);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    &.slim {
      @include fontUnify(20, 24, 400);
      text-align: left;
    }

    &.narrow-width {
      max-width: 805px;
      width: 100%;

      margin: 0 auto;

      @include bigMobile {
        @include fontUnify(16, 22, 400);

        padding: 0 8px;
      }
    }

    @include bigMobile {
      text-align: left;
    }
  }

  &__capabilities {
    @include bigMobile {
      margin: 0 auto 56px auto;
    }
  }

  &__image-capabilities {
    width: 115px;
    height: 115px;
    color: #159822;

    @include bigMobile {
      width: 95px;
      height: 95px;
    }
  }

  &__capabilities-card {
    --gap: 16px;

    @include set-item-count-in-row(4);

    @include bigMobile {
      @include set-item-count-in-row(2);
    }
  }

  &__bunner {
    margin-bottom: 64px;

    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__set {
    @include bigMobile {
      margin-bottom: 54px;
    }
  }

  &__location {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__image-location {
    width: 135px;
    height: 135px;

    color: #159822;

    @include bigMobile {
      width: 70px;
      height: 70px;
    }
  }

  &__location-card {
    --gap: 96px;

    @include set-item-count-in-row(2);

    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }

  &__set-card {
    --gap: 16px;

    @include set-item-count-in-row(5);

    @include smallestScreen {
      @include set-item-count-in-row(3);
    }

    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }

  &__service-price {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__promt {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__scheme {
    @include bigMobile {
      margin-bottom: 32px;
    }
  }

  &__offer-item {
    max-width: 513px;
    width: 100%;
  }

  &__offer-section {
    @include flex-container(column, flex-start);

    gap: 24px;
  }

  &__offers {
    @extend %width-main;

    margin: 0 auto 16px auto;
    @extend %padding-wrp;
  }
}
</style>
  