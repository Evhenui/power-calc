<template>
    <nav class="navigation">
        <section class="navigation__status">
         <!--    <CheckBox @change="some">retert</CheckBox> -->
            <div>
                <input type="checkbox" id="stock" name="stock" value="yes">
                <label for="stock">Акции</label>
            </div>
            <div>
                <input type="checkbox" id="stock" name="stock" value="yes">
                <label for="stock">Новинки</label>
            </div>
            <div>
                <input type="checkbox" id="stock" name="stock" value="yes">
                <label for="stock">Топ продаж</label>
            </div>
        </section>
        <section class="navigation__filter">
            <div 
                @click="activeFilter"
                class="navigation__filter-header price-control"
            >
                <h1 class="navigation__filter-name">Цена</h1>
                <div class="navigation__arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="navigation__filter-body">
                <FilterPriceControl />
            </div>
        </section>
        <section class="navigation__filter">
            <div
                @click="activeFilter"
                class="navigation__filter-header"
            >
                <h1 class="navigation__filter-name">Мощность VA/W</h1>
                <div class="navigation__arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div 
                ref="filterPower"
                class="navigation__filter-body"
            >
                <div ref="checkboxPower" class="test">
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div ref="checkboxPower" class="test">
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div ref="checkboxPower" class="test">
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div ref="checkboxPower" class="test">
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div ref="checkboxPower" class="test">
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <ShowAll @click.native="showAll"/>
            </div>
        </section>
        <section class="navigation__filter">
            <div 
                @click="activeFilter"
                class="navigation__filter-header"
            >
                <h1 class="navigation__filter-name">Тип подключения к сети</h1>
                <div class="navigation__arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="navigation__filter-body">
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">Евровилка (43)</label>
                </div>
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">Клеммы (43)</label>
                </div>
            </div>
        </section>
        <section class="navigation__filter">
            <div 
                @click="activeFilter"
                class="navigation__filter-header"
            >
                <h1 class="navigation__filter-name">Тип подключения нагрузки к ИБП</h1>
                <div class="navigation__arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="navigation__filter-body">
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">IEC320 C13 (43)</label>
                </div>
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">Клеммы (43)</label>
                </div>
            </div>
        </section>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import FilterPriceControl from "../UI/FilterPriceControl.vue"
import ShowAll from "../UI/ShowAll.vue";
import CheckBox from "@components/common/buttons/CheckBox.vue"

@Component({
    components: {
        FilterPriceControl,
        ShowAll,
        CheckBox
    },
})
export default class NavigationBarComponent extends Vue {

$refs: {
    filterPower: HTMLElement;
    checkboxPower: HTMLElement[];
};

initialHeight: number = 0;

getInitialHeight() {
    this.initialHeight = this.$refs.filterPower.scrollHeight;
}

activeFilter(event) {
    const bodySection = event.currentTarget.nextElementSibling;

    event.currentTarget.classList.toggle('active');

    if(event.currentTarget.classList.contains('active')) {
        window.getComputedStyle(bodySection).getPropertyValue('--height');
        bodySection.style.setProperty('--height', bodySection.scrollHeight + 'px'); 
    } else {
        window.getComputedStyle(bodySection).getPropertyValue('--height');
        bodySection.style.setProperty('--height', 0 + 'px');
    }
}

showAll() {
    const a = this.$refs.filterPower.offsetHeight;

    console.log(this.$refs.filterPower.scrollHeight)

    this.$refs.filterPower.classList.toggle('active')

    if(this.$refs.filterPower.classList.contains('active')) {
        window.getComputedStyle(this.$refs.filterPower).getPropertyValue('--height');
        this.$refs.filterPower.style.setProperty('--height', this.$refs.filterPower.scrollHeight + 'px'); 
    } else {
        window.getComputedStyle(this.$refs.filterPower).getPropertyValue('--height');
        this.$refs.filterPower.style.setProperty('--height', this.initialHeight + 'px'); 
    }
    
}
mounted() {
    this.getInitialHeight();
}
}
</script>

<style lang="scss" scoped>
.navigation {
    max-width: 256px;
    width: 100%;

    background-color: white;

    border: 1px solid #E9E9E9;
    border-radius: 8px;

    padding: 16px 0;

    @include bigMobile { 
        max-width: 100%;
    }

    &__status {
        border-bottom: 1px solid #D1D1D1;

        padding: 0 16px 16px 16px;
    }

    &__filter {
        border-bottom: 1px solid #D1D1D1;

        padding: 16px 8px;

        &:last-child {
            border: none;

            padding-bottom: 0;
        }
    }

    &__filter-header {
        @include flex-container(row, space-between, center);

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        cursor: pointer;

        transition: margin-bottom .2s ease-in-out;

        &.active {
            margin-bottom: 8px;
        }
        &.active .navigation__arrow{
            transform: rotateZ(0);
        }
        &.price-control.active {
            margin-bottom: 16px;
        }
    }

    &__filter-name {
        @include fontUnify(16, 22, 400);
        color: #2B2B2B;
        letter-spacing: 0.02em;
    }

    &__arrow {
        font-size: 0;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        transform: rotateZ(180deg);

        transition: transform .2s ease-in-out;
    }

    &__filter-body {
        --height: 0;
        height: var(--height);

        transition: height .2s ease-in-out;

        overflow: hidden;
    }
}

.navigation__filter-body {
    &.active {
        .test:nth-child(n + 3) {
            display: block;
        }
    }
}
.test {
    &:nth-child(n + 3) {
        display: none;
    }
}
</style>
          