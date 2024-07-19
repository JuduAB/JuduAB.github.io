import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useWebStore = defineStore('counter', () => {

  const data = reactive({
    num:0,
    loginStatu:true
  })

  return { data }
}, {
  persist: [
    {
      paths: ['data.loginStatu'],
      storage: sessionStorage,
    }
  ]
})
