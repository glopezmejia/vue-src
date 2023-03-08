<script setup>
import { reactive } from 'vue'

const runnerInfo = reactive({
    firstName: '',
    lastName: '',
    email: ''
})
</script>

<template>
    <main>
        <form action="#">
            <legend>Contact Card</legend>
            <main>
                <input class="form-control" type="text" placeholder="First Name" v-model="runnerInfo.firstName">
                <input class="form-control" type="text" placeholder="Last Name" v-model="runnerInfo.lastName">
                <input class="form-control" type="email" placeholder="Email" v-model="runnerInfo.email">
                <button @click="$emit('runnerRegistered', runnerInfo)" class="btn btn-primary">Submit</button>
            </main>
        </form>
    </main>
</template>

<style>
    .form-control {
        margin-bottom: 5px;
    }
</style>

