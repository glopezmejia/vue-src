<script setup>
    import Navbar from '../components/Navbar.vue'
    import { ref } from 'vue'

    const header = ref('Home')
    const link = ref('Login')
</script>


<template>
    <Navbar :header="header" :link="link" ></Navbar>
</template>
