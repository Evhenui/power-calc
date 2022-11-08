<template>
    <section class="menu-bar">
        <div class="menu-bar__wrapper">
            <h3 class="menu-bar__title">Характеристики:</h3>
            <section class="menu-bar__inputs">
                <input-radio>Все</input-radio>
                <input-radio>Только отличия</input-radio>
            </section>
            <section class="menu-bar__buttons">
                <button-white>Добавить товар</button-white>
                <button-white :buttonType="buttonClear">Очистить список</button-white>
            </section>
        </div>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import ButtonWhite from "../UI/ButtonWhite.vue";
import InputRadio from "../UI/InputRadio.vue";

@Component({
   components: {
    ButtonWhite,
    InputRadio,
   }
})
export default class CharacteristicsBarComponent extends Vue {

    buttonClear: boolean = true;
}
</script>
 
<style lang="scss" scoped>
.menu-bar {

    &__wrapper {
        max-width: 274px;
        width: 100%;

        padding: 16px;

        background-color: white;

        border: 1px solid #E9E9E9;

    }

    &__title {
        @include fontUnify(16, 22, 600);
        letter-spacing: 0.02em;
        color: #2B2B2B;

        margin-bottom: 16px;

    }

    &__inputs {
    }

    &__buttons {
        @include flex-container(column, flex-start, stretch);
        gap: 24px;
    }
}

</style>
 