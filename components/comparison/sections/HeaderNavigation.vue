<template>
  <section class="header-nav">
    <div class="header-nav__wrapper">
      <h1 class="header-nav__title">Сравнение товаров</h1>
      <nav class="header-nav__navbar">
        <h3 class="header-nav__subtitle">Категории товаров</h3>
        <ul class="header-nav__list">
          <li
            class="header-nav__list-item"
            v-for="(item, id) in listSelected"
            :key="id"
          >
            <SelectedNavigationItem>
              <template v-slot:name>{{ item.name }}</template>
              <template v-slot:amount>{{ item.amount }}</template>
            </SelectedNavigationItem>
          </li>
        </ul>
        <Dropdown class="header-nav__dropdown"></Dropdown>
      </nav>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SelectedNavigationItem from "../UI/SelectedNavigationItem.vue";
import Dropdown from "../UI/Dropdown.vue"

@Component({
  components: {
    SelectedNavigationItem,
    Dropdown
  },
})
export default class HeaderNavigationComponent extends Vue {
  listSelected = [
    { id: 1, name: "Комплект резервного питания", amount: 12 },
    { id: 2, name: "Комплект питания", amount: 2 },
    { id: 3, name: "Комплект питания", amount: 2 },
    { id: 4, name: "Комплект резервного питания", amount: 12 },
    { id: 5, name: "Комплект резервного питания", amount: 12 },
    { id: 6, name: "Комплект питания", amount: 2 },
  ];
}
</script>
 
<style lang="scss" scoped>
.header-nav {
  margin-bottom: 24px;

  @media (max-width: 860px) {
    margin-bottom: 16px;
    padding-right: 16px;
  }

  &__wrapper {
  }

  &__title {
    @include fontUnify(36, 43, 700);
    color: #2b2b2b;

    margin-bottom: 32px;

    @media (max-width: 860px) {
      @include fontUnify(24, 29, 700);

      margin-bottom: 16px;
    }
  }

  &__subtitle {
    @include fontUnify(20, 28, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    margin-bottom: 16px;

    @media (max-width: 860px) {
      @include fontUnify(16, 22, 400);

      margin-bottom: 8px;
    }
  }

  &__list {
    @include flex-container(row, left, center);
    gap: 16px;
    padding-bottom: 16px;

    overflow-y: auto;

    @media (max-width: 860px) {
      display: none;
    }
    
    &::-webkit-scrollbar {
      height: 8px;
      background-color: #d1d1d1;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:horizontal {
      background-color: #393d38;
      border-radius: 100px;
    }
  }

  &__dropdown {
    display: none;

    @media (max-width: 860px) {
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
 