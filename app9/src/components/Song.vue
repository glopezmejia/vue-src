<script setup>
import { ref } from "vue";

const props = defineProps([
  "index",
  "img",
  "title",
  "artist",
  "duration",
  "audio",
]);

// console.log(props.img) //vite doesn't read the string
let imgURL = new URL(`../assets/images/${props.img}`, import.meta.url).href  
// const imgURL = new URL(props.img, import.meta.url).href  //this won't work because it's a dynamic url
// console.log(imgURL);
</script>

<template>
  <div class="container">
    <div id="songRow" class="row align-items-center no-gutters">
      <div class="col d-none col--styles">
        {{ index }}
      </div>
      <div class="col-2 col--styles">
        <img class="img-fluid" :src="imgURL" alt="" />
        <!-- <img class="img-fluid" :src="props.img" alt="" /> -->
      </div>
      <div class="col-8 col--styles">
        <div class="row flex-column">
            <div id="title" class="col col--styles my-0">
            {{ title }}
            </div>
            <div id="artist" class="col col--styles">
            {{ artist }}
            </div>
        </div>
      </div>
      <div id="duration" class="col-2 col--styles">
        {{ duration }}
      </div>
    </div>
  </div>
</template>
<style>
#songRow:hover {
    background-color: rgb(64, 63, 63);
    color: white;
}
#songRow {
    padding-top: 10px;
    padding-bottom: 0;
    border-radius: 0.5rem;
}
img {
  max-height: 90px;
}

#title {
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 0;
}

#artist {
  margin-bottom: 0;
}

#artist, #duration {
    font-size: 0.8rem;
    color: #989898
}
#duration {
    margin: 0;
    padding-bottom: 10px;
}

.col--styles {
  margin-bottom: 0.75rem;
  /* padding:0; */
}
img {
  max-height: 70px;
}

@media (max-width: 576px) {
  #title {
    height: -200px;
  }
}
</style>
