<script setup>
import { ref } from 'vue';
import { useGameDataStore } from '../stores/gamedata.js'

const store = useGameDataStore();
const answerElm = ref(null)
const isDisabled = ref(false)

//handler for submit button
function submit(e) {
    e.preventDefault();
    let ans = answerElm.value.value.toLowerCase();
    if (store.dataIndex < 13) {
        if (ans == store.data[store.dataIndex].answer) {
            console.log('Correct!')
            store.score++;
            answerElm.value.value = ''
            store.dataIndex++;
            if (store.dataIndex == 13) {
                store.gameRunning = false;
                alert('Game Over')
            }
        } else {
            console.log('Incorrect!')
            answerElm.value.value = ''
        }
    }
}

//handler for reveal button
function reveal() {
    store.answerRevealed = true;
    isDisabled.value = true;
}

//handler for skip button
function ok() {
    if (store.dataIndex < 13) {
        store.answerRevealed = false;
        isDisabled.value = false;
        store.dataIndex++;
        if (store.dataIndex == 13) {
            store.gameRunning = false;
            alert('Game Over')
        }
    }
}

//handler for reset button
function reset() {
    store.dataIndex = 0;
    store.gameRunning = false;
    store.score = 0;
    store.answerRevealed = false;
    isDisabled.value = false;
}
</script>

<template>
    <main>
        <div class="score-container">
            <span> Score: </span>
            <span id="score"> {{ store.score }} </span>
        </div>
        <div id="question-container" class=" d-flex align-items-center">
            <p id="question"> {{ store.data[store.dataIndex].question }} </p>
        </div>
        <form action="#">
            <div class="form-floating mb-3">
                <input ref="answerElm" :disabled="isDisabled" type="text" class="form-control" id="answerInput"
                    placeholder="Type your answer here">
                <label for="answerInput">Type your answer here</label>
            </div>
            <div class="button-container">
                <button @click="submit">Submit</button>
                <button @click="reveal">Reveal</button>
                <button @click="reset">Reset</button>
            </div>
            <div v-if="store.answerRevealed" class="skipped-question">
                <span> Answer: </span>
                <span id="answer"> {{ store.data[store.dataIndex].answer }}</span>
                <button id="ok-btn" @click="ok">OK</button>
            </div>
        </form>
    </main>
</template>

<style>
.score-container {
    display: flex;
    justify-content: end;
}

#score {
    margin: 0 0 5px 5px;
    border: solid 1px #377771;
    border-radius: 1rem;
    background-color: #377771;
    color: white;
    padding: 0 8px;
}

#question-container {
    min-width: 300px;
    min-height: 200px;
    border: solid 1rem #ED6A5E;
    margin: 0 0 20px 0;
    background-color: #FF8E72;
    border-radius: 1rem;
}

#question {
    font-size: 1.5rem;
}

.button-container,
.skipped-question {
    display: flex;
    justify-content: center;
}

.skipped-question {
    align-items: center;
    margin: 20px 0;
    height: 40px;
    background-color: #FFAF87;
    border-radius: 2rem;
}

#answer {
    font-weight: 600;
    margin: 0 0 0 5px;
}

#ok-btn {
    padding: 0 10px;
}

button {
    margin: 0 0.5rem;
    border-radius: 2rem;
    background-color: #377771;
    border: none;
    color: white;
    padding: .75rem;
}

button:hover {
    background-color: #3eac8b;
}

p {
    margin: 20px;
}
</style>