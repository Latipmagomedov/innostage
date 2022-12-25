import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

  export const useProductsListStore = defineStore('productsList', () => {
    const lists = ref([])
    const activeList = ref(null)
    const units = ['ШТ', 'КГ', 'БАН']

    const listsLocalStorage = localStorage.getItem('lists')
    const activeListLocalStorage = localStorage.getItem('activeList')

    if(listsLocalStorage) lists.value = JSON.parse(listsLocalStorage)
    if(activeListLocalStorage) activeList.value = JSON.parse(activeListLocalStorage)

    const products = computed(() => {
      return lists.value.find(list => list.id === activeList.value).products
    })

    const createList = (list) => {
      lists.value.push(list)
    }
    const deleteList = (id) => {
      lists.value.splice(lists.value.findIndex(item => item.id === id), 1)
    }
    const createProduct = (product) => {
      products.value.push(product)
    }
    const deleteProduct = (id) => {
      products.value.splice(products.value.findIndex(item => item.id === id), 1)
    }

    watch(() => lists, (state) => {
      localStorage.setItem('lists', JSON.stringify(state.value))
    }, {deep: true})

    watch(() => activeList, (state) => {
      localStorage.setItem('activeList', JSON.stringify(state.value))
    }, {deep: true})

    return {
      lists,
      activeList,
      units,
      products,
      createList,
      deleteList,
      createProduct,
      deleteProduct
    }
  })