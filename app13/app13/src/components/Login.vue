<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserInfoStore } from '../stores/UserInfo.js'

const username = ref('')
const password = ref('')

const store = useUserInfoStore()
const route = useRoute()
const router = useRouter()

console.log(`Username: ${store.username}`);
console.log(`Password: ${store.password}`);

function authenticateUser() {
    if (username.value == store.username && password.value == store.password) {
        router.push("/profile")
        console.log("Logged in!")
    } else {
        console.log("failed to log in!")
    }
}
</script>

<template>
    <div class="container">
        <div class="form">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <p>Inspect to find the login information!</p>
                    <form @submit.prevent="submit" class="form-floating">
                        <input v-model="username" type="text" class="form-control" id="username" placeholder="Username">
                        <label for="username">Username</label>
                    </form>
                </div>
                <div class="col-3"></div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col">
                    <form @submit.prevent="submit" class="form-floating">
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                        <label for="password">Password</label>
                    </form>
                </div>
                <div class="col-3"></div>
            </div>
            <div class="button-div">
                <button @click="authenticateUser">Log In</button>
            </div>
        </div>
    </div>
</template>

<style>
.button-div {
    margin-top: 20px;
    display: flex;
    justify-content: center;
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
</style>