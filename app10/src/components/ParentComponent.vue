<script>
import { reactive, ref, watch } from 'vue'
import FormComponent from "./FormComponent.vue";
import CardComponent from "./CardComponent.vue";

export default {
    components: {
        FormComponent,
        CardComponent,
    },
    setup() {
        const runnersArr = reactive({
            runner: []
        })

        return {
            runnersArr,
        }
    }
};
</script>

<template>
    <main class="container mt-3">
        <div class="row flex-column">
            <div class="col p-0">
                <FormComponent @runner-registered="runnerInfo => runnersArr.runner.push({
                    firstName: runnerInfo.firstName,
                    lastName: runnerInfo.lastName,
                    email: runnerInfo.email
                })" class="child-component" id="form-child">
                </FormComponent>
            </div>
        </div>

        <div class="row">
            <CardComponent v-for="runner in runnersArr.runner" :firstName="runner.firstName" :lastName="runner.lastName"
                :email="runner.email" class="child-component col-md-6 col-xl-4" id="card-child">
            </CardComponent>
        </div>
    </main>
</template>

<style>
#card-child {
    border: solid grey 2px;
    margin-bottom: 5px;
}

#form-child {
    margin-bottom: 10px;
}
@media (max-width: 300px) {
    .container {
        max-width: 300px;
    }
}
@media (max-width: 576px) {
    .container {
        max-width: 450px;
    }
}
@media (min-width: 800px) {
    .container {
        padding: 50px;
    }
}
</style>
