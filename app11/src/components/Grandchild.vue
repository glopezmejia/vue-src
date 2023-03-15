<script setup>
    import { inject } from 'vue'

    const { cpu, gpu, mb } = inject('pcParts')


</script>

<template>
    <main>
        <ul>
            <li><a href="https://www.newegg.com/p/pl?d=cpu">CPU</a>: {{ cpu }}</li>
            <li><a href="https://www.newegg.com/p/pl?d=gpu">GPU</a>: {{ gpu }}</li>
            <li><a href="https://www.newegg.com/p/pl?d=motherboards">MOTHERBOARD</a>: {{ mb }} </li>
        </ul>
    </main>

</template>

<style scoped>
    main {
        padding: 5px 0;
    }
    li {
       line-height: 3rem; 
    }
</style>