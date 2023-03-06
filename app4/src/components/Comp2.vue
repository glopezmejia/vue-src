<script setup>
    import { ref } from 'vue'
    import { reactive } from 'vue'

    import van from '../assets/old_van.webp'
    import bike from '../assets/bike.webp'

    const imagePath = ref(van)
    // const imagePath = ref('../assets/old_van.webp')              //this doesn't work 

    const item1 = {
        p1: 'Fringilla urna porttitor rhoncus dolor purus non enim. Vitae purus faucibus ornare suspendisse. Facilisis mauris sit amet massa vitae tortor. Tellus integer feugiat scelerisque varius morbi enim nunc. Vitae congue eu consequat ac felis. Pulvinar pellentesque habitant morbi tristique senectus et. Sit amet consectetur adipiscing elit pellentesque. Sit amet consectetur adipiscing elit. Elementum facilisis leo vel fringilla est ullamcorper eget. Dolor morbi non arcu risus quis varius. Purus gravida quis blandit turpis cursus in hac habitasse platea. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquet enim tortor at auctor urna nunc id cursus. Pellentesque massa placerat duis ultricies lacus sed. Amet cursus sit amet dictum sit amet justo donec enim. Elementum pulvinar etiam non quam lacus suspendisse.', 
        p2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh. Condimentum vitae sapien pellentesque habitant morbi tristique. Eget velit aliquet sagittis id consectetur purus. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Eget mi proin sed libero enim sed. Fusce ut placerat orci nulla pellentesque dignissim enim. Id diam vel quam elementum pulvinar etiam non quam lacus. Non consectetur a erat nam at lectus. Nascetur ridiculus mus mauris vitae ultricies leo. Neque ornare aenean euismod elementum nisi quis. In est ante in nibh mauris cursus mattis molestie a. Mauris pharetra et ultrices neque ornare aenean. Ornare suspendisse sed nisi lacus sed.',
        p3: 'Tellus in hac habitasse platea. Tempus iaculis urna id volutpat lacus laoreet non. Euismod nisi porta lorem mollis aliquam ut. Nulla pharetra diam sit amet. Quam vulputate dignissim suspendisse in est ante in. Bibendum arcu vitae elementum curabitur. Quam id leo in vitae turpis massa. Lectus urna duis convallis convallis. Tellus elementum sagittis vitae et. Sit amet consectetur adipiscing elit duis tristique. Lectus proin nibh nisl condimentum id venenatis.',
    }
    const item2 = {
        p1: 'Imperdiet dui accumsan sit amet nulla. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. A scelerisque purus semper eget duis. Id nibh tortor id aliquet lectus proin. Quam nulla porttitor massa id neque. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Accumsan tortor posuere ac ut consequat semper viverra nam libero. In eu mi bibendum neque egestas congue quisque egestas diam. Diam quis enim lobortis scelerisque fermentum dui. Sed tempus urna et pharetra pharetra. Ac turpis egestas sed tempus urna et pharetra.',
        p2: 'Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Amet mattis vulputate enim nulla aliquet porttitor. Velit euismod in pellentesque massa placerat. Duis ultricies lacus sed turpis tincidunt id. Convallis tellus id interdum velit. Sed elementum tempus egestas sed sed. Dictum varius duis at consectetur. Amet porttitor eget dolor morbi non arcu. Vulputate sapien nec sagittis aliquam malesuada bibendum. Sapien eget mi proin sed libero enim sed. Neque laoreet suspendisse interdum consectetur libero id faucibus. Integer feugiat scelerisque varius morbi enim nunc faucibus. Fusce id velit ut tortor pretium. Urna nunc id cursus metus aliquam eleifend. Eu consequat ac felis donec et. Volutpat consequat mauris nunc congue nisi vitae. Turpis egestas maecenas pharetra convallis posuere morbi leo.',
        p3: 'Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Odio ut sem nulla pharetra diam. Vitae tortor condimentum lacinia quis. Est ullamcorper eget nulla facilisi. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Nibh praesent tristique magna sit amet. Posuere ac ut consequat semper viverra. Velit dignissim sodales ut eu sem integer vitae. Auctor eu augue ut lectus arcu bibendum at varius vel. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Tortor consequat id porta nibh venenatis cras sed. Lacinia quis vel eros donec ac odio tempor. Ornare massa eget egestas purus. Nec feugiat nisl pretium fusce id velit ut tortor. Egestas purus viverra accumsan in nisl. Sed tempus urna et pharetra pharetra massa massa.', 
    }

    const loremIpsum = reactive({ 
        p1: item1.p1,
        p2: item1.p2,
        p3: item1.p3
    })
    
    const isDisabled = ref(false)

    function nextImage() {
        if (imagePath.value === van) {
            imagePath.value = bike;
            loremIpsum.p1 = item2.p1;
            loremIpsum.p2 = item2.p2;
            loremIpsum.p3 = item2.p3;
        }
        else {
            imagePath.value = van;
            loremIpsum.p1 = item1.p1;
            loremIpsum.p2 = item1.p2;
            loremIpsum.p3 = item1.p3;
        }
    }

    function disableButton() {
        isDisabled.value = true
        alert('Good Choice!!!')
    }
</script>

<template>
    <div class="container">
        <img id="vehicle" :src="imagePath" alt="">
        <div class="button-container">
            <button @click="disableButton">YES</button>
            <button :disabled="isDisabled" @click="nextImage">NO</button>
        </div>
        <h2>Description</h2>
        <p> {{ loremIpsum.p1 }}</p>
        <p> {{ loremIpsum.p2 }}</p>
        <p> {{ loremIpsum.p3 }}</p>
    </div>
</template>

<style>
    button {
        margin: 0rem 0.25rem;
        width: 5rem;
        border-radius: 15px;
    }
    #vehicle {
        width: 60%;
        margin: -1.5rem 0 1rem 0 ;
        max-height: 260px;
    }
    p::first-letter {
        font-weight: 900;
        font-size: x-large;
        font-style: italic;
    }
    h2 {
        margin: 1rem auto 0;
    }
</style>