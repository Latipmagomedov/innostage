<template>
  <header class="header">
    <VInput
      class="header__search"
      v-model="search"
      @input="$emit('search', search)"
      placeholder="Поиск..."
    >
      <template #iconLeft>
        <img src="@/assets/images/icons/search.svg" alt="search" />
      </template>
    </VInput>

    <VButton
      class="header__filtration"
      color="brand"
      label="По алфавиту"
      v-if="filtration === 'alphabetically'"
      @click="filtrationProducts('')"
    />
    <VButton
      class="header__filtration"
      color="brand"
      label="По умолчанию"
      v-else
      @click="filtrationProducts('alphabetically')"
    />
  </header>
</template>

<script setup>
  import { ref } from "vue";

  const emit = defineEmits(["filtration", "search"]);

  const search = ref("");
  const filtration = ref("");

  const filtrationProducts = (val) => {
    filtration.value = val;
    emit("filtration", filtration.value);
  };
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $black;

    &__search {
      width: 400px;
    }
  }
</style>
