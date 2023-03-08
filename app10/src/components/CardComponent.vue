<script setup>
import {computed, ref, watch} from 'vue'
import icon from '../assets/images/icon.webp'

const image = ref(icon)

const props = defineProps([
    "firstName",
    "lastName",
    "email"
]);

const fullName = computed (() => `${props.firstName} ${props.lastName}`)

</script>

<template>
    <div class="card">
        <img :src="image">
        <p> {{ fullName }}</p>
        <p> {{ props.email }} </p>
    </div>
</template>

<style>
    .card {
        display: flex;
        align-items: center;
        padding: 15px;
    }
    img {
       max-width: 100px; 
    }
</style>
