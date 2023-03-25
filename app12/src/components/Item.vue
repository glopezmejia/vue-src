<script setup>
    const props = defineProps(['item'])
    // console.log(props.item)
</script>

<template>
    <div class="container">
        <div id="item" class="row p-2 my-1 flex-row">
            <div id="itemTitle" class="col-4 px-0">{{ props.item.title }}</div>
            <div class="col-8"> {{ props.item.simpleDescription }} </div>
        </div>
    </div>
</template>

<style>
    #item {
        border: solid .25px rgb(230, 229, 229);
        border-radius: .5rem;
        box-shadow: -4px 4px 4px 2px rgba(235,235,235,0.97);
    }
    #itemTitle {
        font-weight: bold;
    }
</style>