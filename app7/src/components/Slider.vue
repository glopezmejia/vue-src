<script setup>
    /*
    import Emre from '../assets/images/pexels-emre-can-acer-2079453.jpg' 
    import Furkanfdemir from '../assets/images/pexels-furkanfdemir-6345770.jpg' 
    import Henry_Co from '../assets/images/pexels-henry-&-co-1151243.jpg' 
    import Leeloo from '../assets/images/pexels-leeloo-thefirst-4622299.jpg' 
    import Muertos from '../assets/images/pexels-los-muertos-crew-10040002.jpg' 
    import Mark from '../assets/images/pexels-mark-stebnicki-2253524.jpg' 
    import Roma from '../assets/images/pexels-rome-dema-442969.jpg' 
    */
    import { reactive, watch, ref, onMounted } from 'vue'
    import { createClient } from 'pexels'
   

    let mediaIndex = ref(0)
    let nextIsDisabled = ref(false)
    let prevIsDisabled = ref(true)
    let nextOpacity = ref(100)
    let prevOpacity = ref(20)

    const client = createClient('TADb6mVqeiMPIHDgsCJQNIA9a3I5N5Re3IbDMI7lHOD6mSs67OR4Z5MV')

    const pexelCollection = reactive({
        media: {}
    })

    /*
    const pexelCollection = reactive({
        media: [
            {
                type: 'photo', 
                photographer: 'Mark Stebnicki',
                photographer_url: 'https://www.pexels.com/@nc-farm-bureau-mark/', 
                alt: 'Abundance of Wine Barrels',
                url: Mark
            },
            {
                type: 'photo', 
                photographer: 'Henry & Co.',
                photographer_url: 'https://www.pexels.com/@hngstrm/', 
                alt: 'Gray Barrels',
                url: Henry_Co
            },
            {
                type: 'photo', 
                photographer: 'Leeloo Thefirst',
                photographer_url: 'https://www.pexels.com/@leeloothefirst/', 
                alt: 'Bottles of Wine and Empty Glasses on a Barrel',
                url: Leeloo
            },
            {
                type: 'photo', 
                photographer: 'Rome Dema',
                photographer_url: 'https://www.pexels.com/@romedema/', 
                alt: 'Brown Wooden Barrels',
                url: Roma
            },
            {
                type: 'photo', 
                photographer: 'Los Muertos Crew',
                photographer_url: 'https://www.pexels.com/@cristian-rojas/', 
                alt: 'Copper Pot Stills at Tequila Distillery',
                url: Muertos
            },
            {
                type: 'photo', 
                photographer: 'furkanfdemir',
                photographer_url: 'https://www.pexels.com/@furkanfdemir/', 
                alt: 'Male Friend Drinking Whiskey While Playing Backgammon',
                url: Furkanfdemir
            },
            {
                type: 'photo', 
                photographer: 'Emre Can Acer',
                photographer_url: "https://www.pexels.com/@emrecan/", 
                alt: 'Empty Bottles and pendant lamps turned on',
                url: Emre
            }
        ]
    })
    */

    const photo = reactive({
        title: '',
        photographer: '', 
        photographer_url: '', 
        url: ''
    })

    async function getCollection() {
        let myCollections = await client.collections.all({per_page: 0})
        
        const id = myCollections.collections[0].id
        // console.log(`id is ${id}`)

        const mediaOfFirstCollection = await client.collections.media({id, type: 'photos', per_page: 8})

        pexelCollection.media = mediaOfFirstCollection.media
    }

    /*
    function loadImage() {
        // mediaIndex = 0; 
        photo.title = pexelCollection.media[mediaIndex.value].alt
        photo.photographer = pexelCollection.media[mediaIndex.value].photographer
        photo.photographer_url = pexelCollection.media[mediaIndex.value].photographer_url
        photo.url = pexelCollection.media[mediaIndex.value].url
    }
    */

    function loadImage() {
        // mediaIndex = 0; 
        photo.title = pexelCollection.media[mediaIndex.value].alt
        photo.photographer = pexelCollection.media[mediaIndex.value].photographer
        photo.photographer_url = pexelCollection.media[mediaIndex.value].photographer_url
        // photo.url = pexelCollection.media[mediaIndex.value].src.landscape
        photo.url = pexelCollection.media[mediaIndex.value].src?.[mediaIndex.value === 4 ? 'portrait' : 'landscape']
    }

    watch(pexelCollection, () => {
        if (pexelCollection.media.length > 0) {
            console.log(`mediaIndex is: ${mediaIndex.value}`)
            loadImage()
        }
    })

    watch(mediaIndex, () => {
        if (mediaIndex.value < 8 && mediaIndex.value >= 0) {
            loadImage()
        }
    }) 

    function nextImage() {
        prevIsDisabled.value = false;
        prevOpacity.value = 100;

        mediaIndex.value++;
        if (mediaIndex.value === 7) {
            nextIsDisabled.value = true;
            nextOpacity.value = 20;
            console.log('next button disabled')
        }
        console.log(`mediaIndex is: ${mediaIndex.value}`)
    }

    function prevImage() {
        nextIsDisabled.value = false;
        nextOpacity.value = 100;

        mediaIndex.value--;
        if (mediaIndex.value === 0) {
            prevIsDisabled.value = true;
            prevOpacity.value = 20;
            console.log('prev button disabled')
        }
        console.log(`mediaIndex is: ${mediaIndex.value}`)
    }

    /*
    onMounted( () => {
        loadImage()
    })
    */
    onMounted( () => {
        console.log('onMounted')
        getCollection()
    })
  
</script>
<template>
    <div class="container mt-3 mt-md-4">
        <div class="row text-center">

            <div class="col-1 col-lg-2 col-xl-3"></div>

            <div class="col">
                <div id="photographer_name" class="text-start mb-4">
                    <h1> {{ photo.photographer }}</h1>
                    <button id="visit">
                        <a :href="photo.photographer_url" target="_blank">
                        visit
                        </a>
                    </button>
                </div>
                <div class="row justify-content-between">
                    <div id="prev--btn" class="col image_control">
                        <button @click="prevImage" id="prev_btn" type="button" :disabled="prevIsDisabled" :style="{opacity: prevOpacity + '%'}">&#8249;</button>
                    </div>
                    <div class="col"></div>
                    <div id="next--btn" class="col image_control">
                        <button @click="nextImage" id="next_btn" type="button" :disabled="nextIsDisabled" :style="{opacity: nextOpacity + '%'}">&#8250;</button>
                    </div>
                </div>

                <div class="img--box">
                    <img id="image" class="img-fluid mt-3" :src="photo.url" :alt="photo.url">
                </div>
               
                <h2 id="photo_title" class="mt-3 text-start"> {{ photo.title }} </h2> 
                
            </div>

            <div class="col-1 col-lg-2 col-xl-3"></div>
        </div>
    
    </div>
</template>
<style>
    body{
        background-color: #1b1a1a;    
    }
    #photo_title {
        color: white;
        font-size: 1.5rem;
    }   

    #photographer_name, #photographer_name a {
        color: orange;
    }
    #photographer_name{
        font-size: 1.25rem;
    }
    #photographer_name a {
        text-decoration: none;
    }
    span {
        font-size: 2rem;
    }
    #visit {
        background-color: #1b1a1a;
        border: orange solid 2px;
        border-radius: 2rem;
        padding: 0rem 1.5rem;
    }
    #image {
        border-radius: 0.50rem;
    }
    .image_control {
        color: white;
        font-size: 1.5rem;
    }
    #next_btn, #prev_btn {
        padding: 0 2rem;
        background-color: #2e2e2e;
        color: white;
        border: 0;
    }
    #prev_btn:hover, #next_btn:hover {
        background-color: #565555;
    }
    #prev_btn{
        border-radius: 10px 0 0 10px;
    }
    #next_btn{
        border-radius: 0 10px 10px 0;
    }
    #prev--btn {
        text-align: start;
    }
    #next--btn {
        text-align: end;
    }
    .img--box img {
        max-height: 440px;
        box-shadow: 0 0 5px 5px #2e2e2e;
    }
</style>