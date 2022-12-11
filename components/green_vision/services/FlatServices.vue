<template>
  <section class="home-services">
    <div class="home-services__wrapper">

      <DescriptionSection class="home-services__description">
        <p class="home-services__description-text">
          Система видеонаблюдения, установленная в квартире, в первую очередь выполняет охранные
          функции: запись несанкционированного проникновения злоумышленников (хулиганские действия,
          взлом, ограбление и т.д.), отправка тревожных сигналов по датчику движения и прочее.
        </p>
      </DescriptionSection>

      <Capabilities class="home-services__capabilities">
        <template v-slot:title>Система безопасности позволяет:</template>
        <template v-slot:card>

          <CardCapabilitiesColumn class="home-services__capabilities-card">
            <template v-slot:image>
              <img
                src="../../../assets/img/baby-capabilities.svg"
                alt="view teritory"
              />
            </template>
            <template v-slot:subtitle>Cмотреть за детьми в режиме реального времени</template>
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="home-services__capabilities-card">
            <template v-slot:image>
              <img
                src="../../../assets/img/kat-capabilities.svg"
                alt="view teritory"
              />
            </template>
            <template v-slot:subtitle>Cледить за животными</template>
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="home-services__capabilities-card">
            <template v-slot:image>
              <img
                src="../../../assets/img/woomen-capabilities.svg"
                alt="view teritory"
              />
            </template>
            <template v-slot:subtitle>Осуществлять контроль работы домашнего персонала</template>
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="home-services__capabilities-card">
            <template v-slot:image>
              <img
                src="../../../assets/img/stairs-capabilities.svg"
                alt="view teritory"
              />
            </template>
            <template v-slot:subtitle>Bидеть, что происходит на лестничной площадке</template>
          </CardCapabilitiesColumn>

        </template>
      </Capabilities>

      <InstallerBunner class="home-services__bunner" />

      <DescriptionSection class="home-services__description">
        <p class="home-services__description-text narrow-width">
          Оборудование для систем видеонаблюдения и систем контроля доступа для квартир;
          монтаж камер с учетом особенностей каждого объекта; гарантии и техническое обслуживание. 
        </p>
      </DescriptionSection>

      <BasicSet class="home-services__set">
        <template v-slot:title>Пример базового комплекта оборудования для системы видеонаблюдения в квартире</template>

        <template v-slot:cards>
          <CardBasicSet class="home-services__set-card">
            <template v-slot:amount>х4</template>
            <template v-slot:image>
              <img src="@/assets/img/camera-big-set.png" alt="camera" />
            </template>
            <template v-slot:name>Купольная IP камера</template>
          </CardBasicSet>

          <CardBasicSet class="home-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/dvr-set.png" alt="dvr" />
            </template>
            <template v-slot:name>Видеорегистратор</template>
          </CardBasicSet>

          <CardBasicSet class="home-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/hdmi-set.png" alt="hdmi" />
            </template>
            <template v-slot:name>Кабель HDMI 1.5 м</template>
          </CardBasicSet>

          <CardBasicSet class="home-services__set-card">
            <template v-slot:amount>х2</template>
            <template v-slot:image>
              <img src="@/assets/img/patch-cord-set.png" alt="patch cord" />
            </template>
            <template v-slot:name>Патч-корд</template>
          </CardBasicSet>

          <CardBasicSet class="home-services__set-card">
            <template v-slot:image>
              <img src="@/assets/img/materials-set.png" alt="materials" />
            </template>
            <template v-slot:name>Материалы для подключения</template>
          </CardBasicSet>
        </template>
        <template v-slot:description>
          <p class="home-services__description-text slim">
            Базовый перечень оборудования решает основные проблемы видеоконтроля в квартире. Наши специалисты готовы предложить схему подключения 
            системы видеонаблюдения исходя из особенностей Вашего объекта. Соответственно, список необходимого Вам оборудования и его стоимость может 
            измениться. 
          </p>
        </template>
      </BasicSet>

      <Location class="home-services__location">
        <template v-slot:cards>
          <CardLocationRow class="home-services__location-card">
            <template v-slot:image>
              <img src="@/assets/icons/door-location.svg" alt="home teritory"/>
            </template>
            <template v-slot:item>
              <CheckItem class="home-services__price-item">Входная дверь</CheckItem>
              <CheckItem class="home-services__price-item">Обзор на лестницу</CheckItem>
            </template>
          </CardLocationRow>

          <CardLocationRow class="home-services__location-card">
            <template v-slot:image>
              <img src="@/assets/icons/elevator-location.svg" alt="garage" />
            </template>
            <template v-slot:item>
              <CheckItem class="home-services__price-item">Зона лифта</CheckItem>
              <CheckItem class="home-services__price-item">Обзор парадной</CheckItem>
            </template>
          </CardLocationRow>
        </template>
        <template v-slot:subtitle>
          Специалисты-монтажники из команды GreenVision практикуют индивидуальный подход к каждому клиенту. Они обязательно подберут 
          оптимальное решение для установки видеонаблюдения, исходя из целей, которые оно должно выполнять. Мы поставляем только 
          проверенное (качественное) оборудование, рассчитанное на любой бюджет (от эконом до премиум класса). 
        </template>
      </Location>

      <ServicePrice class="home-services__service-price">
        <template v-slot:price>27 000 грн</template>
        <template v-slot:item>
          <CheckItem class="home-services__price-item"
            >Комплект видеонаблюдения FullHD разрешения, камеры для наружной и
            внутренней установки с инфракрасной подсветкой до 20 метров
          </CheckItem>
          <CheckItem class="home-services__price-item"
            >Видеорегистратор без накопителя</CheckItem
          >
          <CheckItem class="home-services__price-item"
            >Установка цветного видеодомофона и электромеханического
            замка</CheckItem
          >
        </template>
        <template v-slot:image>
          <img src="@/assets/img/home-card.png" alt="home" />
        </template>
      </ServicePrice>

      <Offers class="home-services__offers">
        <template v-slot:title>Работы по установке:</template>
        <template v-slot:item>
          <div class="home-services__offer-section">
            <CheckItem class="home-services__offer-item"
              >Установка 8 камер на высоте не более 3 метров (с коробками)
            </CheckItem>
            <CheckItem class="home-services__offer-item"
              >Прокладка кабеля открытым способом не более 18 метров до камеры
              (крепление стяжки; клипсы;под армрстронгом, без сверления
              отверстий для фиксации кабельной трассы) на высоте до 3 метров
            </CheckItem>
            <CheckItem class="home-services__offer-item"
              >Сверление не более 4 отверстий до 20 сантиметров для прокладки в
              них кабеля по необходимости</CheckItem
            >
          </div>
          <div class="home-services__offer-section">
            <CheckItem class="home-services__offer-item"
              >Подключение видеорегистратора и камер к сети (3 свободные
              розетки, или удлинитель заказчика)</CheckItem
            >
            <CheckItem class="home-services__offer-item"
              >Подключение видеорегистратора к телевизору заказчика на
              расстоянии 1.5 метра
            </CheckItem>
            <CheckItem class="home-services__offer-item"
              >Установка СКУД</CheckItem
            >
          </div>
        </template>
      </Offers>

      <Offers class="home-services__offers">
        <template v-slot:title
          >Подключение и настройка удаленного доступа:</template
        >
        <template v-slot:item>
          <CheckItem class="home-services__offer-item"
            >Настройка удаленного просмотра на 2 устройствах через протокол Р2Р
            все изменения и дополнительные работы и оборудование оговаривается и
            оплачивается отдельно!</CheckItem
          >
          <CheckItem class="home-services__offer-item"
            >Подключение видеорегистратора к роутеру заказчика в свободный порт,
            длинна кабеля не более 5 метров.
          </CheckItem>
        </template>
      </Offers>

      <Promt class="home-services__promt" />

      <SchemeLocation class="home-services__scheme">
        <template v-slot:scheme>
          <img src="@/assets/img/scheme-home.png" alt="scheme home" />
        </template>
      </SchemeLocation>

      <ContactUs class="home-services__contacts" />
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
import Location from "./sections/Location.vue";
import CardLocation from "./UI/CardLocation.vue";
import ServicePrice from "./sections/ServicePrice.vue";
import CheckItem from "./UI/CheckItem.vue"
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
    Location,
    CardLocation,
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
.home-services {
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

  &__location-card {
    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }

  &__price-item {
    max-width: 434px;
    width: 100%;
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
  