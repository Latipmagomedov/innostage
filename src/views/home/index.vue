<template>
  <div class="home">
    <SideListBar class="home__side-list-bar" />
    <div class="home__wrapper" v-if="productsList.activeList">
      <MainHeader
        class="home__header"
        @search="search = $event"
        @filtration="filtration = $event"
      />
      <div class="home__products">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="home__product"
        />
      </div>
      <CreateProduct class="home__create-product" />
    </div>

    <h1 class="home__empty" v-else>Нажмите на нужный список слева</h1>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";
  import { useProductsListStore } from "@/stores/productsList";

  import SideListBar from "@/components/SideListBar";
  import MainHeader from "@/components/MainHeader";
  import ProductItem from "@/components/ProductItem";
  import CreateProduct from "@/components/CreateProduct";

  const productsList = useProductsListStore();

  const search = ref("");
  const filtration = ref("");

  const products = computed(() => {
    let sortProducts = productsList.products;

    if (filtration.value === "alphabetically") {
      sortProducts = [...productsList.products].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return sortProducts.filter((product) => {
      const result = product.title
        .toLocaleLowerCase()
        .includes(search.value.toLocaleLowerCase());

      return result;
    });
  });
</script>

<style scoped lang="scss">
  .home {
    display: flex;

    &__side-list-bar {
      width: 30%;
      position: sticky;
      top: 0;
      left: 0;
    }

    &__wrapper {
      position: relative;
      width: 70%;
      max-width: 1360px;
      height: 100vh;
      padding: 0 48px;
      overflow: auto;
    }

    &__header {
      position: sticky;
      top: 0;
      left: 0;
    }

    &__products {
      min-height: calc(100vh - 217px);
    }

    &__product {
      &:not(:first-child) {
        margin-top: 4px;
      }
    }

    &__create-product {
      width: 100%;
      position: sticky;
      bottom: 0;
      left: 0;
    }

    &__empty {
      max-width: 300px;
      margin: auto;
      color: $grey;
      text-align: center;
      font-size: 24px;
    }
  }
</style>
