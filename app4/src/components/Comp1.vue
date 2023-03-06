<script setup>
    import { ref } from 'vue'
    import question from '../assets/question.webp'

    const title = ref('Should I buy this and fix it?')
    const imagePath = ref(question)
</script>

<template>
    <div class="container">
        <h1> {{ title }}</h1>
        <img id="question" :src="imagePath" alt="">
    </div>
</template>

<style>
    body{
        margin: 0;
        padding: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 20rem;
    }    
    #question {
        width: 10%;
    }
    
</style>