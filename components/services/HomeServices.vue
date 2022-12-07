<template>
    <section class="home-services">
        <div class="home-services__wrapper">
            <DescriptionSection>Системы видеонаблюдения решают множество задач, связанных с обеспечением безопасности в частном доме. Не важно, большой или маленький у Вас дом и участок земли, расположен он в городе или за городом, живете Вы там постоянно или бываете наездами, позаботьтесь о безопасности своего имущества.</DescriptionSection>
            <Capabilities>
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
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import DescriptionSection from './sections/DescriptionSection.vue';
import Capabilities from './sections/Capabilities.vue';
import CardCapabilities from './UI/CardCapabilities.vue';

@Component({
    components: {
        DescriptionSection,
        Capabilities,
        CardCapabilities,
    },
})
export default class HomeServicesComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.home-services {
    @extend %padding-wrp;

    background-color: white;

    &__wrapper {
        @extend %width-main;

        margin: 0 auto;
    }

}

</style>
  