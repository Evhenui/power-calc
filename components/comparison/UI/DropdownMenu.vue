<template>
  <div @click="active = !active" class="dropdown" :class="{ active: active }">
    <div class="dropdown__input">
      <span class="dropdown__selected-item" :class="{ active: activeSelect }">{{
        selectItem
      }}</span>
      <svg
        class="dropdown__arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9.125L12 14.875L18 9.125"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="dropdown__list">
      <div class="dropdown__list-wrapper">
        <ul class="dropdown__menu">
          <li
            v-for="(item, index) in listSelect"
            :key="index"
            @click="getItem"
            class="dropdown__item"
          >
            {{ item.itemName }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class DropdownMenuComponent extends Vue {
  active: boolean = false;
  activeSelect: boolean = false;
  selectItem: string = "Списки сравнения";

  listSelect = [
    { itemName: "Комплект резервного питания" },
    { itemName: "Комплект питания" },
    { itemName: "Комплект резервного питания" },
    { itemName: "Комплект питания" },
  ];

  getItem(event) {
    this.selectItem = event.target.innerText;
    this.activeSelect = true;
  }
}
</script>
   
<style lang="scss" scoped>
.dropdown {
  position: relative;

  &.active {
    .dropdown__list {
      visibility: visible;
      opacity: 1;
      z-index: 100;
    }
    .dropdown__arrow {
      transform: rotateZ(180deg);
    }
    .dropdown__input {
      border-color: red;
    }
    .dropdown__label {
      color: red;
    }
    .dropdown__input {
      border-color: red;
    }
  }

  &__input {
    width: 100%;
    height: 48px;

    @include flex-container(row, space-between, center);

    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 8px;

    background-color: white;

    padding: 17px 14px;

    &.is-invalid {
      border-color: red;
    }
  }

  &__selected-item {
    @include fontUnify(16, 22, 700);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    &.active {
      @include fontUnify(16, 22, 400);
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &__arrow {
    transform: rotateZ(0deg);
    transition: all 0.2s ease-in-out;
  }

  &__list {
    width: 100%;

    position: absolute;
    top: 48px;
    z-index: -100;

    box-shadow: 0px 4px 22px -8px rgba(0, 0, 0, 0.15);
    background-color: white;
    
    visibility: hidden;
    opacity: 0;
    
    transition: 0.2s ease-in;
  }

  &__menu {
    @include flex-container(column, space-between, left);
    gap: 8px;
  }

  &__item {
    position: relative;

    @include fontUnify(16, 22, 400);
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.02em;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    padding: 13px 14px;

    cursor: pointer;

    transition: all 0.1s ease-in-out;
  }
}
</style>
   