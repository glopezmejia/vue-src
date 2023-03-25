<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const props = defineProps(['header'])
const route = useRoute()
const router = useRouter()
const searchInput = ref('')
const routesArray = ['leafline', 'swirl', 'drift', 'star', 'space'];
const isARealRoute = ref(false)
console.log(isARealRoute.value)


function search() {
    if(searchInput) {
        for(let i = 0; i < routesArray.length; i++) {
            if (routesArray[i] === searchInput.value) {
                router.push(`/items/${searchInput.value}`)
                isARealRoute = false;
            } else {
                router.push('/items')
            }
        }
    } else {
        router.push('/items')
    }
}
</script>

<template>
    <nav>
        <div class="container">
            <div class="row px-0">
                <div id="header" class="col-6"> {{ props.header }}</div>
                <div class="col-1">
                    <RouterLink class="link" to="/">Home</RouterLink>
                </div>
                <div class="col-1">
                    <RouterLink class="link" to="/items">Items</RouterLink>
                </div>
                <div class="col-4">
                    <form class="form-floating" @submit.prevent="search">
                        <input v-model="searchInput" type="search" class="form-control" id="search" name="q" placeholder="search">
                        <label for="search">Search for board ...</label>
                    </form>
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
    font-weight: 405;
}

nav {
    background-color: rgb(36, 166, 36);
    height: 70px;
    margin-bottom: 2rem;
}

.row {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 5px;
}</style>