<script setup>
    import { useChatLogStore } from '../stores/ChatLog.js'
    
    const store = useChatLogStore();

    function removeQuickMessage(index) {
        store.quickMessages[index].show = false;
    }

    function sendQuickMessage(index) {
        store.chat.push(store.quickMessages[index].message)
    }

    function restoreQuickMessages() {
        let index = 0;
        while(index < 3) {
            store.quickMessages[index].show = true;
            index++;
        }
    }
</script>

<template>
    <div class="row flex-column">
        <Transition name="removeOrAddMessageTransition">
            <div v-if="store.quickMessages[0].show" class="col">
                <span @click="sendQuickMessage(0)"> {{ store.quickMessages[0].message }}</span>
                <button @click="removeQuickMessage(0)" type="button"><i class="fa-solid fa-trash-can"></i></button> 
            </div>
        </Transition>
        
        <Transition name="removeOrAddMessageTransition">
            <div v-if="store.quickMessages[1].show" class="col">
                <span @click="sendQuickMessage(1)"> {{ store.quickMessages[1].message }}</span>
                <button @click="removeQuickMessage(1)" type="button"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </Transition>

        <Transition name="removeOrAddMessageTransition">
            <div v-if="store.quickMessages[2].show" class="col">
                <span @click="sendQuickMessage(2)"> {{ store.quickMessages[2].message }}</span>
                <button @click="removeQuickMessage(2)" type="button"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </Transition>
        <div class="btn-parent d-flex justify-content-center">
            <button @click="restoreQuickMessages" id="reset-btn" type="button">Reset</button>
        </div>
    </div>
</template>

<style>
    span {
        background-color: rgb(238, 238, 238);
        padding: 10px;
        border-radius: 10px;
        margin-right: 5px;
        cursor: pointer;
    }
    .col {
        margin: 0 0 15px 0;
    }
    .removeOrAddMessageTransition-enter-active {
        transition: opacity 1s ease;
    } 
    .removeOrAddMessageTransition-leave-active {
        transition: opacity .25s ease;
    }
    .removeOrAddMessageTransition-enter-from, 
    .removeOrAddMessageTransition-leave-to {
        opacity: 0;
    }
    button {
        border-radius: 1rem;
        background: rgb(0, 98, 255);
        color: white;
        border-color: transparent;
    }
    #reset-btn {
        width: 100px; 
    }
</style>