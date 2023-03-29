<script setup>
import { ref } from 'vue'
import { itemsData } from '../assets/itemsData.js';

const imgURL = new URL(`../assets/images/${itemsData.items[4].img}`, import.meta.url).href
const imgSrc = ref(imgURL)
</script>

<template>
    <div class="row flex-row">
        <div class="col-1"></div>
        <div id="img-col" class="col-5"> 
            <img class="img-fluid" :src="imgSrc" alt="">
        </div>
        <div class="col-5">
            <h1>Description</h1>
            <p id="description">
                {{ itemsData.items[4].description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: black;
    font-size: 1.5rem;
}
#description {
    border-radius: 2%;
    background-color: rgb(246, 246, 246);
    padding: 1rem;
}
img {
    width: 90%;
}
</style>