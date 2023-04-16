<script setup>
  import { useGameDataStore } from './stores/gamedata.js'
  import Questionnaire from './components/Questionnaire.vue';

  const store = useGameDataStore();

  //start button handler
  function startGame () {
    store.dataIndex = 0;
    store.gameRunning = true;
  }

</script>

<template>
  <div id="container" class="container d-flex justify-content-center align-items-center">
    <button id="start-btn" v-if="!store.gameRunning" @click="startGame">Start</button>
    <Questionnaire v-if="store.gameRunning"></Questionnaire>
  </div>
</template>

<style>
  body {
    margin: 0; 
    padding: 0; 
  }
  #start-btn {
    font-size: 2rem;
    padding: 2rem;
    border-radius: 5rem;
  }
  #container {
    height: 100vh;
  }
</style>