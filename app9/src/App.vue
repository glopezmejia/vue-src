<script>
import Song from "./components/Song.vue";
import { ref, reactive, onMounted, watch, onBeforeMount } from "vue";

import playlist from "./assets/playlist.json" assert { type: "json" };

export default {
  components: {
    Song,
  },

  setup() {
    //initializes the object returned by the JSON object
    let response = playlist;

    const displayPlayBtn = ref("block");
    const displayPauseBtn = ref("none");

    let audioElm = ref(null);
    let trackArray;
    let trackURL = reactive({
      url : ''
    });

    // const data = async function () {
    //   let response = await fetch('../src/assets/audio/take-on-me.mp3')
    //   console.log("response is : " + response.status)
    //   if (response.status === 200) {
    //     trackURL.url = response.url;
    //     console.log(`trackURL is: ${trackURL.url}`)
    //   } else {
    //     console.log("status is " + response.status)
    //   }
    // }


    //truthy variables 
    const isMuted = ref('true')

    onBeforeMount(() => {
      console.log("audio element before mounted: " + audioElm.value)
    })

    watch(audioElm, () => {
      //document.querySelector("audio"):
      console.log(`audio element after it was updated: ${audioElm.value}`);
      console.log('audioElm is initialized') 

    })
    onMounted(() => {
      data();
    })

    //not calling this method to see if the problem is the json data
    function getMusic () {
      trackArray = response.tracks.map((track) => track.audio)
      trackURL.url = trackArray[0];
      console.log('reinitialized trackURL')
    }    

    async function pressedPlay() {
      displayPlayBtn.value = "none";
      displayPauseBtn.value = "block";
      // console.log( audioElm.value.play());
      let promise = await audioElm.value.play();
      if (promise === undefined) {
        console.log("audio promise is: " + promise)
      } else {
        audioElm.value.pause();
      }
      // console.log("after await: " + promise);
      isMuted.value = false;
    }
    function pressedPause() {
      displayPauseBtn.value = "none";
      displayPlayBtn.value = "block";
      audioElm.value.pause();
    }

    return {
      response,
      displayPlayBtn,
      displayPauseBtn,
      pressedPlay,
      pressedPause,
      trackArray,
      trackURL,
      audioElm,
      isMuted,
      getMusic, 

      // audioStillLoading, 

    };
  },
};
</script>

<template>
  <header id="header">
    <h1>Best of the 80s</h1>
  </header>
  <main class="container">
    <section>
      <div class="row">
        <div class="col">
          <Song v-for="track in response.tracks" :index="track.index" :img="track.img" :title="track.title"
            :artist="track.artist" :duration="track.duration" />
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="music-component">
      <audio ref="audioElm" :muted="isMuted" preload="none" id="audio">
        <source :src="trackURL.url" type="audio/mpeg">
      </audio>
    </div>
    <div class="btn-container">
      <button @click="pressedPlay" id="play-btn" type="button" :style="{ display: displayPlayBtn }"  >
        <!-- <p id="playIcon">&#9658;</p> -->
        <i id="playIcon" class="fa-solid fa-play"></i>
      </button>
      <button @click="pressedPause" id="pause-btn" type="button" :style="{ display: displayPauseBtn }"  >
        <p id="pauseIcon">&#9646;&#9646;</p>
      </button>
    </div>
  </footer>
</template>

<style>
body {
  background-color: #181818;
  color: white;
  margin-top: 80px;
  margin-bottom: 80px;
  /* avoids collision with footer! */
}

#header {
  background-color: rgb(11, 95, 68);
  border-top: 0.10px solid rgb(164, 164, 164);
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
}

#header h1 {
  font-size: 1.5rem;
}

footer {
  background-color: rgb(33, 33, 33);
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  border-top: 0.25px solid rgb(164, 164, 164);
}

.btn-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#pause-btn,
#play-btn {
  font-size: 1rem;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: none;
}

#pauseIcon {
  margin: 0 0 6px 0;
  transform: scale(1.3, 2.2);
  color: #181818;
}

#playIcon {
  margin: 0;
  transform: scale(1.2);
  padding-left: 3px;
  color: #181818;
}

#play-btn:hover {
  height: 47px;
  width: 47px;
}

#pause-btn:hover {
  height: 47px;
  width: 47px;
}

@media (max-width: 576px) {
  #header h1 {
    font-size: 1.2rem;
  }

  body {
    margin-top: 70px;
    margin-bottom: 75px;
    /* avoids collision with footer! */
  }

}
</style>
