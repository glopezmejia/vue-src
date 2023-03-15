<script setup>
    import Child from './Child.vue'
    import { ref, provide } from 'vue'

    const cpu = ref('');
    const gpu = ref('');
    const mb = ref('');

    provide('pcParts', { cpu, gpu, mb })

</script>
<template>
    <main class="container mt-2 mt-lg-3 mt-xl-4">
        <section class="row">
            <div class="col-12 col-lg-6">
                <form action="#">
                    <fieldset>
                        <legend> What are your PC parts?</legend>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="cpu" placeholder="Ryzen 5 2600" v-model="cpu">
                            <label for="cpu">CPU</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="gpu" placeholder="NVIDIA RTX 3060ti" v-model="gpu">
                            <label for="gpu">GPU</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="motherboard" placeholder="MSI PRO B450-A PRO MAX" v-model="mb">
                            <label for="motherboard">MOTHERBOARD</label>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="col-12 col-lg-6 mt-2 mt-lg-0">
                <Child></Child>
            </div>
        </section>
        <section id="description">
            <div class="row">
                <div class="col">
                    <h2>Description:</h2>
                    <p>There are three components in this webapp: Parent, Child, and Granchild. The Parent component is the left column and obtains 3 inputs from the user. The column on the right is formed by the Child component, which contains an h1 tag and the Granchild component. The Grandchild displays to the user a list of pc parts that are "recommended" to upgrade. The purpose of this app was to experiment with the provide and inject functions from vue. In the parent, I am storing the user input and <span>providing</span> them to the Granchild directly without having to use props. The Grandchild component then <span>injects</span> the data passed down by the Parent component which can then by destructured and displayed as desired. </p>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
    legend {
        font-weight: bold;
        font-size: 2rem; 
    }
    #description {
        margin: 2rem 0 0 0; 
    }
    span {
        font-weight: bold;
    }
</style>