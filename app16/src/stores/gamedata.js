import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useGameDataStore = defineStore('GameData', () => {
  const gameRunning = ref(false)
  const dataIndex = ref(0)
  const answerRevealed = (false)
  const score = ref(0)
  const data = reactive([
    {
      question: "What goes up and down but can't move?",
      answer: "staircase"
    },
    {
      question: "What goes up but never down?",
      answer: "age"
    },
    {
      question: "I have one head, one foot, and four legs. What am I?",
      answer: "bed"
    },
    {
      question: "I have teeth but can’t eat. What am I?",
      answer: "comb"
    },
    {
      question: "If I drink, I die. If I eat, I’m fine. What am I?",
      answer: "fire"
    },
    {
      question: "What gets bigger and bigger the more you take away from it?",
      answer: "hole"
    },
    {
      question: "What has one eye but can’t see anything at all?",
      answer: "needle"
    },
    {
      question: "What starts with “e” and ends with “e” but only has one letter in it?",
      answer: "envelope"
    },
    {
      question: "What has a face and two hands, but no arms or legs?",
      answer: "clock"
    },
    {
      question: "I’m so fragile that if you say my name, you’ll break me. What am I?",
      answer: "silence"
    },
    {
      question: "What kind of tree can you carry in your hand?",
      answer: "palm"
    },
    {
      question: "What can one catch that is not thrown?",
      answer: "cold"
    },
    {
      question: "What has a head and a tail but no body?",
      answer: "coin"
    },
    // {
    //   question: "",
    //   answer: ""
    // },
  ])
  const timer = ref(30)

  function decrementTimer() {
    timer.value++;
  }
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { gameRunning, data, decrementTimer, dataIndex, answerRevealed, score }
})
