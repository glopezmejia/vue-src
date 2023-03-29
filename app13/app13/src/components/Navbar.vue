<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'

const props = defineProps(['header', 'link'])
</script>

<template>
    <nav>
        <div class="container">
            <div class="row px-0">
                <div id="header" class="col-10"> {{ props.header }}</div>
                <!-- <div class="col-4"></div> -->
                <div class="col-2">
                    <RouterLink class="link" :to="props.link">{{ props.link}}</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

#header {
    color: white;
    font-size: 2rem;
}

.link {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.link:hover {
    font-weight: 600;
}

nav {
    background-color: rgb(36, 166, 36);
    height: 70px;
    margin-bottom: 2rem;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>