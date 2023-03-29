<script setup>
  import Navbar from '../components/Navbar.vue'
  import parkImg from '../assets/images/park.jpg'
  import { ref } from 'vue'

  const imgSrc = ref(parkImg);
  const header = ref('Home')
</script>

<template>
  <Navbar :header="header"></Navbar>
  <div class="container">
    <img class="img-fluid" :src="imgSrc" alt="">
  </div>
  
</template>

<style>
</style>

