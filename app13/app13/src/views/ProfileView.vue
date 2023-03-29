<script setup>
    import Navbar from '../components/Navbar.vue';
    import { useUserInfoStore } from '../stores/UserInfo.js'
    import { ref } from 'vue'

    const store = useUserInfoStore()
    const header = ref('Profile')
    const link = ref('Edit')
</script>
<template>
    <Navbar :header="header" :link="link"></Navbar>
    <div class="container">

        <div class="row">
            <div class="col"></div>
            <div id="headers" class="col">
                <p>First Name</p>
                <p>Last Name</p>
                <p>Street Address</p>
                <p>City</p>
                <p>State</p>
                <p>Zipcode</p>
            </div>
            <div class="col">
                <p>{{ store.firstName }}</p>
                <p>{{ store.lastName }}</p>
                <p>{{ store.street }}</p>
                <p>{{ store.city }}</p>
                <p>{{ store.state }}</p>
                <p>{{ store.zipcode }}</p>
            </div>
            <div class="col"></div>
        </div>

    </div>
</template>

<style>
#headers {
    color: rgb(97, 96, 96);
}
</style>