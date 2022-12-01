<template>
    <nav class="navigation">
        <section class="navigation__status">
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
            <div class="navigation__filter-body">
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <div>
                    <input type="checkbox" id="stock" name="stock" value="yes">
                    <label for="stock">1000/900 (43)</label>
                </div>
                <ShowAll/>
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

@Component({
    components: {
        FilterPriceControl,
        ShowAll
    },
})
export default class NavigationBarComponent extends Vue {

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

    &__status {
        border-bottom: 1px solid #D1D1D1;

        padding: 0 16px 16px 16px;
    }

    &__filter {
        border-bottom: 1px solid #D1D1D1;

        padding: 16px 8px;

        &:last-child {
            border: none;
        }
    }

    &__filter-header {
        @include flex-container(row, space-between, center);

        cursor: pointer;

        transition: margin-bottom .2s ease-in-out;

        &.active {
            margin-bottom: 8px;
        }
        &.active .navigation__arrow{
            transform: rotateZ(180deg);
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

        transform: rotateZ(0);

        transition: transform .2s ease-in-out;
    }

    &__filter-body {
        --height: 0;
        height: var(--height);

        transition: height .2s ease-in-out;

        overflow: hidden;
    }
}
</style>
          