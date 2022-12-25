<template>
  <form class="create-list" @submit.prevent="createList">
    <VInput
      class="create-list__inp"
      v-model="listValue"
      placeholder="Создание списка"
    />
    <VButton class="create-list__btn" label="+" color="brand" />
  </form>
</template>

<script setup>
  import { ref } from "vue";
  import { useProductsListStore } from "@/stores/productsList";

  const productsList = useProductsListStore();

  const listValue = ref("");
  const createList = () => {
    if (!listValue.value.trim()) return;

    productsList.createList({
      id: Date.now(),
      label: listValue.value,
      products: [],
    });
    listValue.value = "";
  };
</script>

<style scoped lang="scss">
  .create-list {
    display: flex;

    &__inp {
      width: 100%;
      height: 48px;
      margin-right: 10px;
    }

    &__btn {
      width: 48px;
      min-height: 48px;
    }
  }
</style>
