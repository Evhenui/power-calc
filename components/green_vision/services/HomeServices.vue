<template>
  <section class="home-services">
    <div class="home-services__wrapper">
      <DescriptionSection class="home-services__description"
        >Системы видеонаблюдения решают множество задач, связанных с
        обеспечением безопасности в частном доме. Не важно, большой или
        маленький у Вас дом и участок земли, расположен он в городе или за
        городом, живете Вы там постоянно или бываете наездами, позаботьтесь о
        безопасности своего имущества.</DescriptionSection
      >

      <Capabilities class="home-services__capabilities">
        <template v-slot:title>Система безопасности позволяет:</template>
        <template v-slot:card>
          <CardCapabilities>
            <template v-slot:image>
              <img
                src="../../../assets/img/home-capabilities.svg"
                alt="view teritory"
              />
            </template>
            <template v-slot:subtitle
              >Просматривать периметр придомовой территории</template
            >
          </CardCapabilities>

          <CardCapabilities>
            <template v-slot:image>
              <img
                src="../../../assets/img/lock-capabilities.svg"
                alt="view teritory"
              />
            </template>
            <template v-slot:subtitle
              >Обезопасить от нежелательных гостей</template
            >
          </CardCapabilities>
        </template>
      </Capabilities>

      <InstallerBunner class="home-services__bunner" />

      <DescriptionSection class="home-services__description"
        >По статистике, установка камер видеонаблюдения в частных домах снижает
        риск совершение краж на 70%, а в случае, если это произошло, возможность
        опознать и найти грабителей увеличивается на 60%.
      </DescriptionSection>

      <BasicSet class="home-services__set">
        <template v-slot:cards>
          <CardBasicSet>
            <template v-slot:amount>х8</template>
            <template v-slot:image>
              <img src="@/assets/img/camera-set.png" alt="camera" />
            </template>
            <template v-slot:name>Наружная IP камера</template>
          </CardBasicSet>

          <CardBasicSet>
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/switch-set.png" alt="switch" />
            </template>
            <template v-slot:name>Коммуникатор сетевой POE</template>
          </CardBasicSet>

          <CardBasicSet>
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/dvr-set.png" alt="dvr" />
            </template>
            <template v-slot:name>Видеорегистратор</template>
          </CardBasicSet>

          <CardBasicSet>
            <template v-slot:amount>х1</template>
            <template v-slot:image>
              <img src="@/assets/img/hdmi-set.png" alt="hdmi" />
            </template>
            <template v-slot:name>Кабель HDMI 1.5 м</template>
          </CardBasicSet>

          <CardBasicSet>
            <template v-slot:amount>х2</template>
            <template v-slot:image>
              <img src="@/assets/img/patch-cord-set.png" alt="patch cord" />
            </template>
            <template v-slot:name>Патч-корд</template>
          </CardBasicSet>

          <CardBasicSet>
            <template v-slot:image>
              <img src="@/assets/img/materials-set.png" alt="materials" />
            </template>
            <template v-slot:name>Материалы для подключения</template>
          </CardBasicSet>
        </template>
      </BasicSet>

      <Location class="home-services__location">
        <template v-slot:cards>
          <CardLocation>
            <template v-slot:image>
              <img
                src="@/assets/icons/home-teritory-location.svg"
                alt="home teritory"
              />
            </template>
            <template v-slot:subtitle>Придомовая территория</template>
          </CardLocation>

          <CardLocation>
            <template v-slot:image>
              <img src="@/assets/icons/garage-location.svg" alt="garage" />
            </template>
            <template v-slot:subtitle>Гараж</template>
          </CardLocation>

          <CardLocation>
            <template v-slot:image>
              <img src="@/assets/icons/road-location.svg" alt="road" />
            </template>
            <template v-slot:subtitle>Обзор на улицу</template>
          </CardLocation>
        </template>
      </Location>

      <ServicePrice class="home-services__service-price">
        <template v-slot:price>27 000 грн</template>
        <template v-slot:item>
          <PriceItem class="home-services__price-item">Комплект видеонаблюдения FullHD разрешения, камеры для наружной и внутренней установки с инфракрасной подсветкой до 20 метров </PriceItem>
          <PriceItem class="home-services__price-item">Видеорегистратор без накопителя</PriceItem>
          <PriceItem class="home-services__price-item">Установка цветного видеодомофона и электромеханического замка</PriceItem>
        </template>
        <template v-slot:image>
          <img src="@/assets/img/home-card.png" alt="home">
        </template>
      </ServicePrice>

      <Offers class="home-services__offers">
        <template v-slot:title>Работы по установке:</template>
        <template v-slot:item>
          <div class="home-services__offer-section">
            <PriceItem class="home-services__offer-item">Установка 8 камер на высоте не более 3 метров (с коробками) </PriceItem>
            <PriceItem class="home-services__offer-item">Прокладка кабеля открытым способом не более 18 метров до камеры (крепление стяжки; клипсы;под армрстронгом, без сверления отверстий для фиксации кабельной трассы) на высоте до 3 метров </PriceItem>
            <PriceItem class="home-services__offer-item">Сверление не более 4 отверстий до 20 сантиметров для прокладки в них кабеля по необходимости</PriceItem>
          </div>
          <div class="home-services__offer-section">
            <PriceItem class="home-services__offer-item">Подключение видеорегистратора и камер к сети (3 свободные розетки, или удлинитель заказчика)</PriceItem>
            <PriceItem class="home-services__offer-item">Подключение видеорегистратора к телевизору заказчика на расстоянии 1.5 метра </PriceItem>
            <PriceItem class="home-services__offer-item">Установка СКУД</PriceItem>
          </div>
        </template>
      </Offers>

      <Offers class="home-services__offers">
        <template v-slot:title>Подключение и настройка удаленного доступа:</template>
        <template v-slot:item>
          <PriceItem class="home-services__offer-item">Настройка удаленного просмотра на 2 устройствах через протокол Р2Р все изменения и дополнительные работы и оборудование оговаривается и оплачивается отдельно!</PriceItem>
          <PriceItem class="home-services__offer-item">Подключение видеорегистратора к роутеру заказчика в свободный порт, длинна кабеля не более 5 метров. </PriceItem>
        </template>
      </Offers>

      <Promt class="home-services__promt" />

      <SchemeLocation class="home-services__scheme">
        <template v-slot:scheme>
          <img src="@/assets/img/scheme-home.png" alt="scheme home">
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
import CardCapabilities from "./UI/CardCapabilities.vue";
import InstallerBunner from "./sections/InstallerBunner.vue";
import BasicSet from "./sections/BasicSet.vue";
import CardBasicSet from "./UI/CardBasicSet.vue";
import Location from "./sections/Location.vue";
import CardLocation from "./UI/CardLocation.vue";
import ServicePrice from "./sections/ServicePrice.vue"
import PriceItem from "./UI/PriceItem.vue";
import Offers from "./sections/Offers.vue"
import Promt from "./sections/Promt.vue"
import SchemeLocation from "./sections/SchemeLocation.vue"
import ContactUs from "./sections/ContactUs.vue"

@Component({
  components: {
    SvgIcon,
    DescriptionSection,
    Capabilities,
    CardCapabilities,
    InstallerBunner,
    BasicSet,
    CardBasicSet,
    Location,
    CardLocation,
    ServicePrice,
    PriceItem,
    Offers,
    Promt,
    SchemeLocation,
    ContactUs
  },
})
export default class HomeServicesComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.home-services {
  background-color: white;

  &__wrapper {
  }

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

  &__bunner {
    margin-bottom: 64px;
  }

  &__price-item {
    max-width: 434px;
    width: 100%;
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
  