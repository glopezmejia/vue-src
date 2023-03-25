<script setup>
import { itemsData } from '../assets/itemsData'
import Navbar from '../components/Navbar.vue'
import Item from '../components/Item.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const header = ref('Items')
const hints = ref(null)
const button = ref(null)

function showHints() {
  hints.value.style.display = (hints.value.style.display === 'none') ? 'block' : 'none';
}


</script>

<template>
  <Navbar :header="header"></Navbar>
  <div class="container">
    <RouterView></RouterView>
    <h1>List of Boards for Sale</h1>
    <Item v-for="item in itemsData.items" :item="item"></Item>
    <button ref="button" @click="showHints">Search Hint</button>
    <div ref="hints" id="hints">
      <p>To <span class="searchSpan">Search</span> for a board using the <span class="urlSpan">search input</span>, type the first word on the board's name:</p>
      <ul>
        <li>leafline</li>
        <li>swirl</li>
        <li>drift</li>
        <li>star</li>
        <li>space</li>
      </ul>

    </div>
  </div>
</template>

<style scoped>
  body {
    margin-bottom: 500px;
  }
  h1 {
    font-size: 1.75rem;
  }
  button {
    margin-top: 5px;
    background-color: white;
    border: gray 2px solid;
    border-radius: 20px;
    padding: 5px 10px;
    color: rgb(36, 166, 36);
    font-weight: bold;
  }
  button:hover {
    background-color: rgb(36, 166, 36);
    color: white;
  }
  p {
    margin-bottom: 5px;
  }
  #hints {
    background-color: rgb(230, 255, 230);
    padding: 10px 20px;
    border-radius: 15px;
    display: none;
  }
  #hints ul li {
    font-family: 'Courier New', Courier, monospace;
  }
  .searchSpan {
    font-style: italic;
  }
  .urlSpan{
    font-weight: bold;
  }
</style>