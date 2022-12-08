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
  },
})
export default class HomeServicesComponent extends Vue {}
</script>

<style lang="scss" scoped>
.home-services {
  background-color: white;

  &__wrapper {
  }

  &__description,
  &__capabilities,
  &__set,
  &__location {
    @extend %width-main;

    margin: 0 auto 64px auto;
    @extend %padding-wrp;
  }

  &__bunner {
    margin-bottom: 64px;
  }
}
</style>
  