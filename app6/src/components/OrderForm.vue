
<script setup>
    import { reactive } from 'vue';
    import { ref } from 'vue';

    const user = reactive({
        name: {
            first: null,
            last: null
        }, 
        email: null,
        tShirtModel: null,
        size: null,
        quantity: null,
        deliveryDate: null, 
        deliveryAddr: {
            st1: null,
            st2: null,
            city: null,
            zip: null
        }
    })

    function printUser () {
        if (user.name.first !== null &&
            user.name.last !== null &&
            user.email !== null &&
            user.tShirtModel !== null &&
            user.size !== null &&
            user.quantity !== null &&
            user.deliveryDate !== null &&
            user.deliveryAddr.st1 !== null && 
            user.deliveryAddr.city !== null &&
            user.deliveryAddr.zip !== null
        ) {
            const userJSON = JSON.stringify(user)
            console.log(userJSON)

            alert(`Thank you ${user.name.first.trim()}! You order has been sent!`)
        }
    }
</script>

<template>
    <!-- <div>
        <p> {{ user.deliveryAddr.st1 }} {{ user.deliveryAddr.st2 }} {{ user.deliveryAddr.city }} {{ user.deliveryAddr.zip }} </p>
    </div> -->
    <div class="container">
        <form action="#" class="my-3 mx-lg-4" validate>
        <!-- <form action="#" class="my-5 m-lg-5" validate> -->
            <fieldset class="border border-white shadow-lg">
                <header class="px-2 px-lg-5 py-3 border text-white">
                    <div class="row">
                        <div class="col">
                            <h1>Order Form</h1>
                            <p>Please fill in your information and we'll be sending your order in no time.</p>
                        </div>
                    </div>
                </header>
                <main class="mt-4 px-2 px-lg-5">
                    <div id="nameRow" class="row">
                        <div class="col-12 col-md-4">
                            <label for="firstName">Name</label> <span>*</span>
                        </div>
                        <div class="col-6 col-md-4">
                            <input v-model="user.name.first" type="text" id="firstName" name="firstName" placeholder="John" required>
                        </div>
                        <div class="col-6 col-md-4">
                            <input v-model="user.name.last" type="text" id="lastName" name="lastName" placeholder="Doe" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4">
                            <label for="email">Email</label> <span>*</span>
                        </div>
                        <div class="col-12 col-md-4">
                            <input v-model="user.email" type="email" id="email" name="email" placeholder="johndoe@domain.com" required>
                        </div>
                        <div class="col-12 col-md-4">
                            <!-- empty -->
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-3">
                            <label for="greenShirt">T-shirt model</label> <span>*</span>
                        </div>
                        <div class="col-4 col-md-3 t-shirt">
                            <label for="greenShirt">
                                <img src="../assets/2.png" class="img-fluid" alt="image of green shirt">
                            </label>
                            <input v-model="user.tShirtModel" type="radio" id="greenShirt" name="shirt" value="greenShirt" required>
                        </div>
                        <div class="col-4 col-md-3 t-shirt">
                            <label for="orangeShirt">
                                <img src="../assets/1.png" class="img-fluid" alt="image of orange shirt">
                            </label>
                            <input v-model="user.tShirtModel" type="radio" id="orangeShirt" name="shirt" value="orangeShirt">
                        </div>
                        <div class="col-4 col-md-3 t-shirt">
                            <label for="redShirt">
                                <img src="../assets/3.png" class="img-fluid" alt="image of red shirt">
                            </label>
                            <input v-model="user.tShirtModel" type="radio" id="redShirt" name="shirt" value="redShirt">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4">
                            <label for="size">Size</label> <span>*</span>
                        </div>
                        <div class="col-12 col-md-4">
                            <select v-model="user.size" name="size" id="size" required>
                                <option value="">---choose option---</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4">
                            <!-- empty -->
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4">
                            <label for="quantity">Quantity</label> <span>*</span>
                        </div>
                        <div class="col-12 col-md-4">
                            <input v-model="user.quantity" type="number" id="quantity" name="quantity" placeholder="1" required> 
                        </div>
                        <div class="col-12 col-md-4">
                            <!-- empty -->
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-4">
                            <label for="deliveryDate">Delivery Date</label> <span>*</span>
                        </div>
                        <div class="col-12 col-md-4">
                            <input v-model="user.deliveryDate" type="date" id="deliveryDate" name="deliveryDate" min="2023-02-10" required>
                        </div>
                        <div class="col-12 col-md-4">
                            <!-- empty -->
                        </div>
                    </div>
                </main>
                <footer class="px-2 px-lg-5 pt-2">
                    <div class="box pt-4 rounded">
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <label for="street-1">Delivery Address</label>
                            </div>
                            <div class="col-12 col-md-8">
                                <input v-model="user.deliveryAddr.st1" type="text" id="street-1" name="street-1" placeholder="Street Address" required> <span class="requiredInput">*</span>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-0 col-md-4">
                                <!-- empty -->
                            </div>
                            <div class="col-12 col-md-8">
                                <input v-model="user.deliveryAddr.st2" type="text" id="street-2" name="street-2" placeholder="Street Address Line 2">
                            </div>
                            <div class="w-100">
                                <!-- multirow -->
                            </div>
                            <div class="col-0 col-md-4">
                                <!-- empty -->
                            </div>
                            <div class="col-12 col-md-8">
                                <input v-model="user.deliveryAddr.city" type="text" id="city" name="city" placeholder="City" required> <span id="requiredSpecial">*</span>
                            </div>
                            <div class="col-0 col-md-4">
                                <!-- empty -->
                            </div>
                            <div class="col-12 col-md-8">
                                <input v-model="user.deliveryAddr.zip" type="text" id="zipcode" name="zipcode" placeholder="Postal / Zip Code" required> <span class="requiredInput">*</span>
                            </div>
                        </div>
                    </div>

                    <div class="row text-end">
                        <div class="col px-0">
                            <button @click="printUser" class="btn rounded text-white" id="purchase-btn" type="submit">Purchase</button>
                        </div>
                    </div>
                </footer>
            </fieldset>
        </form>
    </div>

</template>

<style>
    fieldset {
        border-radius: 2rem;
    }
    header {
        border-radius: 2rem 2rem 0 0;
        background-color: rgb(46, 184, 46);
    }
    .row:nth-of-type(1) {
        margin: 0 0;
    }
    .row, #city {
        margin: 20px 0px;
    }
    .t-shirt {
        text-align: center;
    }
    span {
        color: red;
    }
    .box {
        background-color: rgb(244, 244, 244);
        padding: .5rem 0;
    }
    #street-1, #street-2 {
        width: 100%;
    }
    #purchase-btn {
        background-color: rgb(46, 184, 46);
    }
    input {
        padding-left: 0.5rem;
        width: 100%;
    }
    .requiredInput {
        position: absolute;
        transform: translate(-15px, 5px);
    }
    #requiredSpecial {
        position: absolute;
        transform: translate( -15px, 25px);
    }
</style>