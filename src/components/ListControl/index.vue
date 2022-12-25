<template>
  <div class="list-control">
    <div
      v-for="item in productsList.lists"
      :key="item.id"
      class="list-control__item"
      :class="{
        'list-control__item_active': productsList.activeList === item.id,
      }"
      @click.self="productsList.activeList = item.id"
    >
      {{ item.label }}
      <div class="list-control__delete" @click="deleteList(item.id)">
        <img src="@/assets/images/icons/delete.svg" alt="delete" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useProductsListStore } from "@/stores/productsList";

  const productsList = useProductsListStore();
  const deleteList = (id) => {
    productsList.activeList = null;
    productsList.deleteList(id);
  };
</script>

<style scoped lang="scss">
  .list-control {
    width: 100%;

    &__item {
      width: 100%;
      height: 50px;
      padding: 0 16px;
      border-radius: 20px 50px 50px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: $dark-2;
      font-size: 16px;
      cursor: pointer;
      user-select: none;

      &:not(:first-child) {
        margin-top: 3px;
      }

      &_active {
        background-color: $brand;
      }
    }

    &__delete {
      display: none;
      cursor: pointer;
    }

    &__item:hover &__delete {
      display: block;
    }
  }
</style>
