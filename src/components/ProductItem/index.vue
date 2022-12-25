<template>
  <div class="product" :class="{ product_done: product.done }">
    <input
      type="text"
      class="product__inp product__name"
      v-model="product.title"
    />
    <input
      type="number"
      class="product__inp product__length"
      v-model="product.length"
    />
    <VSelect
      class="product__inp product__length-type"
      v-model="product.lengthType"
      :options="productsList.units"
    />
    <VButton
      class="product__btn"
      color="green"
      @click="product.done = !product.done"
    >
      <template #icon>
        <img src="@/assets/images/icons/done.svg" alt="done" />
      </template>
    </VButton>
    <VButton
      class="product__btn"
      color="red"
      @click="productsList.deleteProduct(product.id)"
    >
      <template #icon>
        <img src="@/assets/images/icons/delete.svg" alt="delete" />
      </template>
    </VButton>
  </div>
</template>

<script setup>
  import { useProductsListStore } from "@/stores/productsList";

  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });

  const productsList = useProductsListStore();
</script>

<style scoped lang="scss">
  .product {
    height: 48px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 4fr 50px 100px 100px 80px;
    background-color: $dark-2;
    overflow: hidden;

    &_done {
      background-color: $dark;
    }

    &_done &__name {
      text-decoration: line-through;
    }

    &__inp {
      height: 100%;
      background-color: transparent;
      color: #fff;

      &:not(:first-child) {
        border-left: 1px solid $light-grey-1;
      }
    }

    &::v-deep(&__length-type) {
      padding: 0;
      border-radius: 0;
    }

    &_done &__inp {
      color: $grey;
    }

    &__length,
    &__length-type {
      padding: 0;
      text-align: center;
    }

    &__length {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &::v-deep(&__btn) {
      height: 100%;
      border-radius: 0;
    }
  }
</style>
