import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useChatLogStore = defineStore('chatLog', () => {
  const chat = ref(['Hey!', 'Good morning!'])
  const quickMessages = ref ([
    {message: 'What are you up to?', show: true}, 
    {message: 'Can I call you back?', show: true}, 
    {message: 'Where do you wanna go for lunch?', show: true}
  ])
  return { chat, quickMessages }
})
