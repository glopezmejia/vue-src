<script setup> 
    import Grandchild from './Grandchild.vue'
</script>
<template>
    <main>
        <h1> You should upgrade your: </h1>
        <section>
            <Grandchild></Grandchild>
        </section>
    </main>

</template>

<style scoped>
    h1 {
        font-weight: bold;
        font-size: 2rem;
        padding: 5px 0;
    }

    section {
        border: solid 2px rgb(228, 228, 228);
    }
</style>