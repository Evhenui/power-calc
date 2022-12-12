<template>
  <section class="shops-services">
    <div class="shops-services__wrapper">
      <DescriptionSection class="shops-services__description">
        <p class="shops-services__description-text">
          Системы видеонаблюдения GreenVision, установленные на промышленных
          предприятиях решают множество задач. Предупреждение воровства и порчи
          материальных ценностей, оперативное обнаружение внештатных ситуаций,
          контроль соблюдения техники безопасности и т.д.
        </p>
      </DescriptionSection>

      <Capabilities class="shops-services__capabilities">
        <template v-slot:title>Система безопасности позволяет:</template>
        <template v-slot:card>
          <CardCapabilitiesColumn class="shops-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-capabilities"
                :icon="icons['production-capabilities']"
              />
            </template>
            <template v-slot:subtitle
              >Контроль производственных процессов</template
            >
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="shops-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-capabilities"
                :icon="icons['movement-capabilities']"
              />
            </template>
            <template v-slot:subtitle
              >Контроль разгрузки погрузки груза</template
            >
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="shops-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-capabilities"
                :icon="icons['control-loading-capabilities']"
              />
            </template>
            <template v-slot:subtitle
              >Контроль разгрузочно – погрузочных работ</template
            >
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="shops-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-capabilities"
                :icon="icons['production-capabilities']"
              />
            </template>
            <template v-slot:subtitle
              >Контроль соблюдения техники безопасности и трудовой
              дисциплины</template
            >
          </CardCapabilitiesColumn>
        </template>
      </Capabilities>

      <InstallerBunner class="shops-services__bunner" />

      <DescriptionSection class="shops-services__description">
        <p class="shops-services__description-text">
          Оборудование для систем видеонаблюдения и систем контроля доступа на
          производстве; монтаж камер с учетом особенностей каждого объекта;
          гарантии и техническое обслуживание.
        </p>
      </DescriptionSection>

      <BasicSet class="shops-services__set">
        <template v-slot:title
          >Пример базового комплекта оборудования для системы видеонаблюдения НА
          ПРЕДПРИЯТИИ</template
        >
        <template v-slot:cards>
          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х8</template>
            <template v-slot:image>
              <img src="@/assets/img/camera-big-set.png" alt="camera" />
            </template>
            <template v-slot:name>Купольная IP камера</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х8</template>
            <template v-slot:image>
              <img src="@/assets/img/camera-set.png" alt="camera" />
            </template>
            <template v-slot:name>Наружная IP камера</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/dvr-set.png" alt="dvr" />
            </template>
            <template v-slot:name>Видеорегистратор NVR</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/switch-set.png" alt="switch" />
            </template>
            <template v-slot:name>Коммуникатор сетевой POE</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х16</template>
            <template v-slot:image>
              <img src="@/assets/img/splitter-office-set.png" alt="splitter" />
            </template>
            <template v-slot:name>Сплиттер POE 48-12V</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/hdd-set.png" alt="hdd" />
            </template>
            <template v-slot:name>Жесткий диск 2ТВ</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/hdmi-set.png" alt="hdmi" />
            </template>
            <template v-slot:name>Кабель HDMI 1.5 м</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:amount>х2</template>
            <template v-slot:image>
              <img src="@/assets/img/patch-cord-set.png" alt="patch cord" />
            </template>
            <template v-slot:name>Патч-корд</template>
          </CardBasicSet>

          <CardBasicSet class="shops-services__set-card">
            <template v-slot:image>
              <img src="@/assets/img/materials-set.png" alt="materials" />
            </template>
            <template v-slot:name>Материалы для подключения</template>
          </CardBasicSet>
        </template>
        <template v-slot:description>
          <p class="shops-services__description-text">
            Базовый перечень оборудования решает основные проблемы видеоконтроля
            в магазине. Наши специалисты готовы предложить схему подключения
            системы видеонаблюдения исходя из особенностей Вашего объекта.
            Соответственно, список необходимого Вам оборудования и его стоимость
            может измениться.
          </p>
        </template>
      </BasicSet>

      <LocationLong class="shops-services__location">
        <template v-slot:cards>
          <CardLocation class="shops-services__location-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-location"
                :icon="icons['production-enterprises-location']"
              />
            </template>
            <template v-slot:subtitle>Контроль площади производства</template>
          </CardLocation>

          <CardLocation class="shops-services__location-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-location"
                :icon="icons['ramp-location']"
              />
            </template>
            <template v-slot:subtitle>Рампа</template>
          </CardLocation>

          <CardLocation class="shops-services__location-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-location"
                :icon="icons['unloading-location']"
              />
            </template>
            <template v-slot:subtitle>Разгрузка/погрузка грузов</template>
          </CardLocation>

          <CardLocation class="shops-services__location-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-location"
                :icon="icons['product-stock-location']"
              />
            </template>
            <template v-slot:subtitle>Склад готовой продукции</template>
          </CardLocation>

          <CardLocation class="shops-services__location-card">
            <template v-slot:image>
              <SvgIcon
                class="shops-services__image-location"
                :icon="icons['unloading-location']"
              />
            </template>
            <template v-slot:subtitle>Периметр помещения производства</template>
          </CardLocation>
        </template>
        <template v-slot:subtitle>
          Технические специалисты и монтажники оборудования GreenVision составят
          схему расположения камер исходя из конкретных целей и задач, которые
          должно решить видеонаблюдение в Вашей торговой точке. Мы поставляем
          качественное оборудование различных ценовых категорий (эконом,
          стандарт, премиум).
        </template>
      </LocationLong>

      <ServicePrice class="shops-services__service-price">
        <template v-slot:title
          >Что входит в услугу установки типового комплекта видеонаблюдения на
          производстве?</template
        >
        <template v-slot:price>80 000 ГРН</template>
        <template v-slot:item>
          <CheckItem class="shops-services__price-item">
            Комплект видеонаблюдения FullHD разрешения, камеры для наружной и
            внутренней установки с инфракрасной подсветкой до 20 метров
          </CheckItem>
          <CheckItem class="shops-services__price-item">
            Видеорегистратор с накопителем объемом 4ТВ
          </CheckItem>
        </template>
        <template v-slot:image>
          <img src="@/assets/img/flat-stock-card.png" alt="office" />
        </template>
      </ServicePrice>

      <Offers class="shops-services__offers">
        <template v-slot:title>Работы по установке:</template>
        <template v-slot:item>
          <div class="shops-services__offer-section">
            <CheckItem class="shops-services__offer-item">
              Установка 14 камер на высоте не более 3 метров (с коробками)
            </CheckItem>
            <CheckItem class="shops-services__offer-item">
              Прокладка кабеля открытым способом не более 30 метров до камеры
              (крепление стяжки; клипсы; под армрстронгом, без сверления
              отверстий для фиксации кабельной трассы) на высоте до 3 метров
            </CheckItem>
            <CheckItem class="shops-services__offer-item">
              Сверление не более 16 отверстий до 20 сантиметров для прокладки в
              них кабеля по необходимости
            </CheckItem>
          </div>
          <div class="shops-services__offer-section">
            <CheckItem class="shops-services__offer-item">
              Подключение видеорегистратора и камер к сети (3 свободные розетки,
              или удлинитель заказчика)
            </CheckItem>
            <CheckItem class="shops-services__offer-item">
              Подключение видеорегистратора к телевизору заказчика на расстоянии
              1.5 метра
            </CheckItem>
            <CheckItem class="shops-services__offer-item">
              Подключение и установка Жесткого диска в видеорегистратор
            </CheckItem>
            <CheckItem class="shops-services__offer-item">
              Настройка записи камер: постоянно; по движению; по времени
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Offers class="shops-services__offers">
        <template v-slot:title
          >Подключение и настройка удаленного доступа:</template
        >
        <template v-slot:item>
          <div class="shops-services__offer-section">
            <CheckItem class="shops-services__offer-item">
              Подключение видеорегистратора к роутеру заказчика в свободный
              порт, длинна кабеля не более 5 метров.
            </CheckItem>

            <CheckItem class="shops-services__offer-item">
              Настройка удаленного просмотра на 2 устройствах через протокол Р2Р
              (обучение пользователя, просмотр записей, сохранение записи на usb
              или память телефона)
            </CheckItem>
          </div>
          <div class="shops-services__offer-section">
            <CheckItem class="shops-services__offer-item">
              Проброс портов на роутере заказчика, регистрация в платном облаке
              для резервирования записей
            </CheckItem>

            <CheckItem class="shops-services__offer-item">
              Консультация заказчика по установке соответствующей скорости
              интернета и статического адреса у провайдера интернета.
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Promt class="shops-services__promt" />

      <SchemeLocation class="shops-services__scheme">
        <template v-slot:scheme>
          <img src="@/assets/img/scheme-shops.png" alt="scheme office" />
        </template>
      </SchemeLocation>

      <ContactUs class="shops-services__contacts" />
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
import LocationLong from "./sections/LocationLong.vue";
import ServicePrice from "./sections/ServicePrice.vue";
import CheckItem from "./UI/CheckItem.vue";
import Offers from "./sections/Offers.vue";
import Promt from "./sections/Promt.vue";
import SchemeLocation from "./sections/SchemeLocation.vue";
import ContactUs from "./sections/ContactUs.vue";
import CardLocation from "./UI/CardLocation.vue";

@Component({
  components: {
    SvgIcon,
    DescriptionSection,
    Capabilities,
    CardCapabilitiesColumn,
    InstallerBunner,
    BasicSet,
    CardBasicSet,
    LocationLong,
    ServicePrice,
    CheckItem,
    Offers,
    Promt,
    SchemeLocation,
    ContactUs,
    CardLocation,
  },
})
export default class ShopsServicesComponent extends Vue {}
</script>
    
    <style lang="scss" scoped>
.shops-services {
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
    max-width: 1200px;
    width: 100%;

    @include fontUnify(20, 24, 600);
    text-align: center;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    margin: 0 auto;

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
    --gap: 45px;

    @include set-item-count-in-row(5);

    @include bigMobile {
      @include set-item-count-in-row(1);
    }
  }

  &__set-card {
    --gap: 16px;

    @include set-item-count-in-row(3);

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
      