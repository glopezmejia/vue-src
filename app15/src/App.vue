<script setup>
  import Chat from './components/Chat.vue';
  import Messages from './components/Messages.vue';
</script>

<template>
  <div class="container">
    <h1>Messenger</h1>
    <div class="d-flex flex-column align-items-center">
      <div class="chat"><Chat></Chat></div>
      <div class="messages"><Messages></Messages></div>
    </div>
  </div>
</template>

<style>
  .chat {
    margin-bottom: 20px;
  }
</style>
