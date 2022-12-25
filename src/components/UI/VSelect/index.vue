<template>
  <select class="v-select" v-model="inputVal">
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
      :selected="index === 0"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    modelValue: [String, Number],
    options: Array,
    placeholder: {
      type: String,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const inputVal = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
  });
</script>

<style scoped lang="scss">
  .v-select {
    height: 48px;
    padding-left: 16px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: $dark-2;
    color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
  }
</style>
