<script setup>
    import { useChatLogStore } from '../stores/ChatLog.js'
    import { ref } from 'vue'
    
    const store = useChatLogStore();
    const messageInput = ref('')

    function submit (e) {
        e.preventDefault();
        if (messageInput.value != '') {
            store.chat.push(messageInput.value)
            messageInput.value = ''
        }
    }
</script>

<template>
    <main class="chat-window">
        <section id="heading" class="d-flex justify-content-center">
            <h2>Joe</h2>
        </section>
        <section id="content" class="d-flex flex-column align-items-end">
            <TransitionGroup name="group-messages">
                <p class="messageBubble" v-for="message in store.chat" :key="message"> {{ message }}</p>
                <!-- <p class="messageBubble" v-for="message in store.chat" :key="message"> <div>{{ message }}</div></p> -->
            </TransitionGroup>
        </section>
        <form id="userForm" @submit="submit">
            <div id="userInput" class="d-flex flex-row">
                <textarea v-model="messageInput" id="userMessage" cols="30" rows="1" placeholder="Message"></textarea>
                <button class="btn btn-primary" type="submit">↑</button>
            </div>
        </form>
    </main>

</template>

<style>
    .chat-window {
        position: relative;
        height: 450px;
        width: 350px;
        border-radius: 1rem;
        /* overflow: hidden ; */
    }
    h2 {
        font-weight: 400;
        font-size: 1.25rem;
        padding: 10px 0 5px 0;
    }
    .chat-window, #userMessage {
        background-color: rgb(8, 8, 8);
        color: white
    }
    #heading {
        border-radius: 1rem 1rem 0 0;
    }
    #content {
        margin: 5px 10px 100px 0; 
        height: 350px;
        overflow: auto;
    }
    .messageBubble {
        background-color: rgb(0, 98, 255);
        width:fit-content;
        border-radius: 2rem;
        padding: 5px 10px 5px 10px;
        margin: 2px 0 0 0;
        /* overflow: scroll; */
    }
    #userForm {
        position: absolute;
        bottom: 0;
        padding: 5px 0 8px 15px;
        border-top: solid gray 1px;
        border-radius: 0 0 1rem 1rem; 
        background-color: rgb(8, 8, 8);
        width: 100%
    }
    #heading {
        background-color: rgb(40, 40, 40);
    }
    #userMessage {
        margin-right: 4px;
        border-color: gray;
    }
    #userMessage:focus {
        outline: none !important;
        border-color: #719ECE;
        box-shadow: 0 0 10px #719ECE;
    }
    #userMessage {
        border-radius: 1rem;
        padding: 5px 0 5px 10px;
    }
    .btn {
        border-radius: 2rem;
    }
    .group-messages-enter-active
    /* , .group-messages-leave-active  */ {
    transition: all 0.5s ease;
    }
    .group-messages-enter-from
    /* , .group-messages-leave-to  */
    {
    opacity: 0;
    transform: translateX(-30px);
    }
</style>