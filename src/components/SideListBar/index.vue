<template>
  <div class="side-list-bar">
    <CreateList class="side-list-bar__create-list" />

    <ListControl class="side-list-bar__list-control" />

    <div class="side-list-bar__empty" v-if="!productsList.lists.length">
      Пусто
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useProductsListStore } from "@/stores/productsList";
  import ListControl from "@/components/ListControl";
  import CreateList from "@/components/CreateList";

  const productsList = useProductsListStore();
</script>

<style scoped lang="scss">
  .side-list-bar {
    position: relative;
    height: 100vh;
    padding: 25px;
    border-radius: 0 40px 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $dark;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    &__empty {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $light-grey-2;
      font-size: 24px;
    }

    &__create-list {
      width: 100%;
    }

    &__list-control {
      margin-top: 50px;
    }
  }
</style>
