<template>
  <section class="empty">
    <BreadCrumbs 
        class="empty__crambs"
        :menuItem="crambsItem"
    />
    <div class="empty__wrapper">
      <h1 class="empty__title">Сравнение товаров</h1>
      <div class="empty__select-product">
        <div class="empty__image-wrapper">
          <img src="@/assets/img/emptyComparison.png" alt="empty page" />
        </div>
        <h2 class="empty__subtitle">Выберите товары для сравнения</h2>
        <ButtonSimple>Перейти в каталог</ButtonSimple>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import ButtonSimple from "../UI/ButtonSimple.vue";
import BreadCrumbs from "../UI/BreadCrumbs.vue";

@Component({
  components: {
    ButtonSimple,
    BreadCrumbs
  },
})
export default class CharacteristicsEmptyComponent extends Vue {
    crambsItem: Array<string> = ['Главная', 'Продукция', 'Акция']
}
</script>

<style lang="scss" scoped>
.empty {
    padding-top: 16px;

    @include bigMobile {
        background-color: white;

        padding-top: 8px;
    }

    &__crambs {
        margin-bottom: 32px;

        @include bigMobile {
            margin-bottom: 68px;
        }
    }

    &__wrapper {
        @include flex-container(column, center, center);
        
        gap: 48px;
        padding-bottom: 590px;
    }

    &__title {
        @include fontUnify(36, 43, 700);
        color: #2B2B2B;

        @include bigMobile {
            display: none;
        }
    }

    &__select-product {
        max-width: 954px;
        width: 100%;

        @include flex-container(column, center, center);

        background-color: white;
        
        border-radius: 36px;

        padding: 24px;

        @include bigMobile {
            padding: 16px 16px 136px 16px;
        }
    }

    &__image-wrapper {
        margin-bottom: 46px;

        @include bigMobile {
            margin-bottom: 32px;
        }
    }

    &__subtitle {
        @include fontUnify(28, 39, 600);
        color: #2B2B2B;
        letter-spacing: 0.02em;

        margin-bottom: 62px;

        @include bigMobile {
            @include fontUnify(20, 30, 600);
            text-align: center;
            color: $color-main;

            margin-bottom: 116px;
        }
    }
}

</style>
   