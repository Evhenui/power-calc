<template>
    <section class="home-services">
        <div class="home-services__wrapper">
            <DescriptionSection class="home-services__description">Системы видеонаблюдения решают множество задач, связанных с обеспечением безопасности в частном доме. Не важно, большой или маленький у Вас дом и участок земли, расположен он в городе или за городом, живете Вы там постоянно или бываете наездами, позаботьтесь о безопасности своего имущества.</DescriptionSection>
            <Capabilities class="home-services__capabilities">
                <template v-slot:title>Система безопасности позволяет:</template>
                <template v-slot:card>
                    <CardCapabilities>
                        <template v-slot:image>
                            <img src="../../assets/img/home-capabilities.svg" alt="view teritory">
                        </template>
                        <template v-slot:subtitle>Просматривать периметр придомовой территории</template>
                    </CardCapabilities>
                    <CardCapabilities>
                        <template v-slot:image>
                            <img src="../../assets/img/lock-capabilities.svg" alt="view teritory">
                        </template>
                        <template v-slot:subtitle>Обезопасить от нежелательных гостей</template>
                    </CardCapabilities>
                </template>
            </Capabilities>
            <InstallerBunner class="home-services__bunner" />
            <DescriptionSection class="home-services__description">По статистике, установка камер видеонаблюдения в частных домах снижает риск совершение краж на 70%, а в случае, если это произошло, возможность опознать и найти грабителей увеличивается на 60%. </DescriptionSection>
            <BasicKit></BasicKit>
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import DescriptionSection from './sections/DescriptionSection.vue';
import Capabilities from './sections/Capabilities.vue';
import CardCapabilities from './UI/CardCapabilities.vue';
import InstallerBunner from './sections/InstallerBunner.vue'
import BasicKit from "./sections/BasicKit.vue"

@Component({
    components: {
        DescriptionSection,
        Capabilities,
        CardCapabilities,
        InstallerBunner,
        BasicKit
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

    &__description {
        @extend %width-main;
    
        margin: 0 auto 64px auto;
        @extend %padding-wrp;
    }

    &__capabilities {
        @extend %width-main;
    
        margin: 0 auto 64px auto;
        @extend %padding-wrp;
    }

    &__bunner {
        margin-bottom: 64px;
    }
}

</style>
  