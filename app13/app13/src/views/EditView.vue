<script setup>
import Navbar from '../components/Navbar.vue';
import { useUserInfoStore } from '../stores/UserInfo.js'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const store = useUserInfoStore()
const route = useRoute()
const router = useRouter()

const header = ref('Edit')
const link = ref('Profile')

const firstName = ref(store.firstName)
const lastName = ref(store.lastName)
const street = ref(store.street)
const city = ref(store.city)
const state = ref(store.state)
const zipcode = ref(store.zipcode)

function test() {
    console.log('hi')
}

function saveProfileInfo() {
    if (firstName.value != store.firstName) {
        store.firstName = firstName.value
    }
    if (lastName.value != store.lastName) {
        store.lastName = lastName.value
    }
    if (street.value != store.street) {
        store.street = street.value
    }
    if (city.value != store.city) {
        store.city = city.value
    }
    if (state.value != store.state) {
        store.state = state.value
    }
    if (zipcode.value != store.zipcode) {
        store.zipcode = zipcode.value
    }
    router.push("/profile")
}

</script>

<template>
    <Navbar :header="header" :link="link"></Navbar>
    <div class="container">
        <div class="row">
            <div class="col-2">
            </div>
            <div class="col">
                <form @submit.prevent="submit" class="form-floating">
                    <input class="form-control" v-model="firstName" id="firstName" type="text" placeholder="firstName">
                    <label for="firstName">First Name</label>
                </form>

                <form @submit.prevent="submit" class="form-floating">
                    <input class="form-control" v-model="lastName" id="lastName" type="text" placeholder="Last Name">
                    <label for="lastName">Last Name</label>
                </form>

                <form @submit.prevent="submit" class="form-floating">
                    <input class="form-control" v-model="street" id="street" type="text" placeholder="Street">
                    <label for="street">Street Address</label>
                </form>
                <form @submit.prevent="submit" class="form-floating">
                    <input class="form-control" v-model="city" id="city" type="text" placeholder="City">
                    <label for="city">City</label>
                </form>
                <form @submit.prevent="submit" class="form-floating">
                    <input class="form-control" v-model="state" id="state" type="text" placeholder="State">
                    <label for="state">State</label>
                </form>
                <form @submit.prevent="submit" class="form-floating">
                    <input class="form-control" v-model="zipcode" id="zipcode" type="number" placeholder="Zipcode">
                    <label for="zipcode">Zipcode</label>
                </form>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="button-div">
            <button @click="saveProfileInfo">Save</button>
        </div>
    </div>
</template>

<style>
p {
    margin: 35px 0;
}

p:nth-of-type(1) {
    margin: 25px 0;
}

p:nth-of-type(3) {
    margin: 25px 0;
}

p:nth-of-type(4) {
    margin: 40px 0;
}

input {
    margin: 5px 0;
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