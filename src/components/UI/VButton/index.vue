<template>
  <button class="v-button" :class="`v-button_${color}`" :disabled="disabled">
    <span class="v-button__icon-left" v-if="$slots.iconLeft">
      <slot name="iconLeft"></slot>
    </span>
    <span class="v-button__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>
    {{ label }}
  </button>
</template>

<script setup>
  defineProps({
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
  });
</script>

<style scoped lang="scss">
  .v-button {
    height: 34px;
    padding: 0 25px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;

    &_brand {
      background-color: $brand;

      &:hover {
        background-color: rgba($brand, 0.8);
      }
    }

    &_blue {
      background-color: $blue;

      &:hover {
        background-color: rgba($blue, 0.8);
      }
    }

    &_red {
      background-color: $red;

      &:hover {
        background-color: rgba($red, 0.8);
      }
    }

    &_green {
      background-color: $green;

      &:hover {
        background-color: rgba($green, 0.8);
      }
    }

    &_grey {
      background-color: $light-grey-1;

      &:hover {
        background-color: rgba($light-grey-1, 0.8);
      }
    }

    &_disabled {
      background-color: #c2d3f4 !important;
      cursor: no-drop;
    }

    &__icon-left {
      margin-right: 4px;
      margin-top: 3px;
    }

    &__icon {
      margin-top: 3px;
    }
  }
</style>
