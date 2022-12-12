<template>
  <section class="office-services">
    <div class="office-services__wrapper">
      <DescriptionSection class="office-services__description">
        <p class="office-services__description-text">
          Основные задачи видеонаблюдения в офисе - контроль сотрудников
          компании и предотвращение несанкционированного доступа в офисные
          помещения.
        </p>
      </DescriptionSection>

      <Capabilities class="office-services__capabilities">
        <template v-slot:title>Система безопасности позволяет:</template>
        <template v-slot:card>
          <CardCapabilitiesColumn class="office-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon class="office-services__image-capabilities" :icon="icons['clock-capabilities']" />
            </template>
            <template v-slot:subtitle>Учет рабочего времени персонала</template>
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="office-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon class="office-services__image-capabilities" :icon="icons['thief-capabilities']" />
            </template>
            <template v-slot:subtitle
              >Предотвращение злоупотреблений и краж</template
            >
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="office-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon class="office-services__image-capabilities" :icon="icons['control-capabilities']" />
            </template>
            <template v-slot:subtitle>Контроль передвижений по офису</template>
          </CardCapabilitiesColumn>

          <CardCapabilitiesColumn class="office-services__capabilities-card">
            <template v-slot:image>
              <SvgIcon class="office-services__image-capabilities" :icon="icons['resolving-issues-capabilities']" />
            </template>
            <template v-slot:subtitle
              >Доказательства при решении спорных вопросов</template
            >
          </CardCapabilitiesColumn>
        </template>
      </Capabilities>

      <InstallerBunner class="office-services__bunner" />

      <DescriptionSection class="office-services__description">
        <p class="office-services__description-text">
          Широкий ассортимент профессионального оборудования для систем
          видеонаблюдения и СКУД; составление схемы расстановки и подключения
          оборудования, исходя из индивидуальных особенностей объекта; 100%
          выполнение гарантийных обязательств.
        </p>
      </DescriptionSection>

      <BasicSet class="office-services__set">
        <template v-slot:title
          >Пример базового комплекта оборудования для системы видеонаблюдения в
          офисе</template
        >

        <template v-slot:cards>
          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х4</template>
            <template v-slot:image>
              <img src="@/assets/img/camera-big-set.png" alt="camera" />
            </template>
            <template v-slot:name>Купольная IP камера</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х4</template>
            <template v-slot:image>
              <img src="@/assets/img/camera-set.png" alt="camera" />
            </template>
            <template v-slot:name>Наружная IP камера</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/dvr-set.png" alt="dvr" />
            </template>
            <template v-slot:name>Видеорегистратор</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/switch-set.png" alt="switch" />
            </template>
            <template v-slot:name>Коммуникатор сетевой POE</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х8</template>
            <template v-slot:image>
              <img src="@/assets/img/splitter-office-set.png" alt="splitter" />
            </template>
            <template v-slot:name>Сплиттер POE 48-12V</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/hdd-set.png" alt="hdd" />
            </template>
            <template v-slot:name>Жесткий диск 2ТВ</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/hdmi-set.png" alt="hdmi" />
            </template>
            <template v-slot:name>Кабель HDMI 1.5 м</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:amount>х2</template>
            <template v-slot:image>
              <img src="@/assets/img/patch-cord-set.png" alt="patch cord" />
            </template>
            <template v-slot:name>Патч-корд</template>
          </CardBasicSet>

          <CardBasicSet class="office-services__set-card">
            <template v-slot:image>
              <img src="@/assets/img/materials-set.png" alt="materials" />
            </template>
            <template v-slot:name>Материалы для подключения</template>
          </CardBasicSet>
        </template>
        <template v-slot:description>
          <p class="office-services__description-text slim">
            Базовый перечень оборудования решает основные проблемы видеоконтроля
            в офисе. Наши специалисты готовы предложить схему подключения
            системы видеонаблюдения исходя из особенностей Вашего бизнеса.
            Соответственно, список необходимого Вам оборудования и его стоимость
            может измениться.
          </p>
        </template>
      </BasicSet>

      <Location class="office-services__location">
        <template v-slot:cards>
          <CardLocation class="office-services__location-card">
            <template v-slot:image>
              <SvgIcon class="office-services__image-location" :icon="icons['doors-location']" />
            </template>
            <template v-slot:subtitle>Входы в офис</template>
          </CardLocation>

          <CardLocation class="office-services__location-card">
            <template v-slot:image>
              <SvgIcon class="office-services__image-location" :icon="icons['corridor-location']" />
            </template>
            <template v-slot:subtitle>Коридор</template>
          </CardLocation>

          <CardLocation class="office-services__location-card">
            <template v-slot:image>
              <SvgIcon class="office-services__image-location" :icon="icons['corners-location']" />
            </template>
            <template v-slot:subtitle>corners-icon</template>
          </CardLocation>
        </template>
        <template v-slot:subtitle>
          Профессиональные монтажные бригады GreenVision имеют огромный
          практический опыт в организации систем видеонаблюдения на различных
          объектах. Выполняем работы качественно и в срок.
        </template>
      </Location>

      <ServicePrice class="office-services__service-price">
        <template v-slot:title
          >Что входит в услугу установки типового комплекта видеонаблюдения в
          офисе?</template
        >
        <template v-slot:price>63 200 ГРН</template>
        <template v-slot:item>
          <CheckItem class="office-services__price-item">
            Комплект видеонаблюдения FullHD разрешения, камеры для наружной и
            внутренней установки с инфракрасной подсветкой до 20 метров
          </CheckItem>
          <CheckItem class="office-services__price-item"
            >Видеорегистратор с накопителем объемом 1ТВ</CheckItem
          >
        </template>
        <template v-slot:image>
          <img src="@/assets/img/office.png" alt="office" />
        </template>
      </ServicePrice>

      <Offers class="office-services__offers">
        <template v-slot:title>Работы по установке:</template>
        <template v-slot:item>
          <div class="office-services__offer-section">
            <CheckItem class="office-services__offer-item"
              >Установка 8 камер на высоте не более 3 метров (с коробками)
            </CheckItem>
            <CheckItem class="office-services__offer-item">
              Прокладка кабеля открытым способом не более 20 метров до камеры
              (крепление стяжки; клипсы; под армрстронгом, без сверления
              отверстий для фиксации кабельной трассы) на высоте до 3 метров
            </CheckItem>
            <CheckItem class="office-services__offer-item">
              Сверление не более 4 отверстий до 20 сантиметров для прокладки в
              них кабеля по необходимости
            </CheckItem>
          </div>
          <div class="office-services__offer-section">
            <CheckItem class="office-services__offer-item">
              Подключение видеорегистратора и камер к сети (3 свободные розетки,
              или удлинитель заказчика)
            </CheckItem>
            <CheckItem class="office-services__offer-item">
              Подключение видеорегистратора к телевизору заказчика на расстоянии
              1.5 метра
            </CheckItem>
            <CheckItem class="office-services__offer-item">
              Подключение и установка Жесткого диска в видеорегистратор
            </CheckItem>
            <CheckItem class="office-services__offer-item">
              Настройка записи камер: постоянно; по движению; по времени
            </CheckItem>
          </div>
        </template>
      </Offers>

      <Offers class="office-services__offers">
        <template v-slot:title
          >Подключение и настройка удаленного доступа:</template
        >
        <template v-slot:item>
          <CheckItem class="office-services__offer-item">
            Настройка удаленного просмотра на 2 устройствах через протокол Р2Р
            (обучение пользователя, просмотр записей, сохранение записи на usp
            или в память телефона)
          </CheckItem>

          <CheckItem class="office-services__offer-item">
            Подключение видеорегистратора к роутеру заказчика в свободный порт,
            длинна кабеля не более 5 метров
          </CheckItem>
        </template>
      </Offers>

      <Promt class="office-services__promt" />

      <SchemeLocation class="office-services__scheme">
        <template v-slot:scheme>
          <img src="@/assets/img/scheme-office.png" alt="scheme office" />
        </template>
      </SchemeLocation>

      <ContactUs class="office-services__contacts" />
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
    Location,
    ServicePrice,
    CheckItem,
    Offers,
    Promt,
    SchemeLocation,
    ContactUs,
    CardLocation,
  },
})
export default class OfficeServicesComponent extends Vue {}
</script>
  
  <style lang="scss" scoped>
.office-services {
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
    --gap: 96px;

    @include set-item-count-in-row(3);

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
    