<script setup>
    import Login from '../components/Login.vue'
    import Navbar from '../components/Navbar.vue';
    import { ref } from 'vue'

    const header = ref('Login')
    const link = ref('Home')
</script>

<template>
    <main>
        <Navbar :header="header" :link="link"></Navbar>
        <Login></Login>
    </main>
</template>


<style> 
</style>

