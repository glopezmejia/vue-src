import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', () => {
  const username = ref('MasterRoshi')
  const password = ref('Kamehameha')

  const firstName = ref('Kame') 
  const lastName = ref('Sennin') 
  const street = ref('3571 Millbrook Road')
  const city = ref('Wood Dale')
  const state = ref('IL')
  const zipcode = ref(60191)

  return { username, password, firstName, lastName, street, city, state, zipcode }
})

