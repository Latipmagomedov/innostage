<template>
  <form class="create-product" @submit.prevent="createProduct">
    <VInput
      v-model="form.title"
      placeholder="Продукт"
      class="create-product__inp"
    />
    <VInput
      v-model="form.length"
      placeholder="Кол-во"
      type="number"
      class="create-product__inp"
    />

    <VSelect
      class="create-product__inp"
      v-model="form.lengthType"
      :options="productsList.units"
    />

    <VButton class="create-product__btn" color="brand">
      <template #icon>
        <img src="@/assets/images/icons/plus.svg" alt="done" />
      </template>
    </VButton>
  </form>
</template>

<script setup>
  import { reactive } from "vue";
  import { useProductsListStore } from "@/stores/productsList";

  const productsList = useProductsListStore();

  const form = reactive({
    title: "",
    length: "",
    lengthType: "ШТ",
  });

  const createProduct = () => {
    if (!form.title.trim()) return;

    productsList.createProduct({
      id: Date.now(),
      done: false,
      title: form.title,
      length: form.length ? form.length : 1,
      lengthType: form.lengthType,
    });

    form.title = "";
    form.length = "";
    form.lengthType = "ШТ";
  };
</script>

<style scoped lang="scss">
  .create-product {
    background-color: $black;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding: 30px 0;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 4fr 1fr 1fr 48px;

    &__btn {
      min-height: 100%;
    }
  }
</style>
