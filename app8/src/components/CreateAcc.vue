<script setup>
    import icon from '../assets/images/icon.webp'
    import { ref, reactive, watch, onMounted } from 'vue'
    
    const profilePic = ref(icon);
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const password2 = ref('');

    const inputs = reactive({
        isUsernameValid : false,
        isEmailValid : false,
        isPasswordValid : false,
        isPhoneNumberValid : false
    });

    const phoneNumber = ref('');
    let sNumber = '';
    let numArray = [];

    const input = ref(null); //ref template

    const isDisabled = ref('true')

    function uploadImg() {
        const file = document.querySelector('#formFile').files[0];
        const reader = new FileReader();

        reader.onloadend = function () {
            profilePic.value = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } 
    }

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    
    //validates that username is atleast 4 characters
    watch(username, () => {
        const usernameInput = document.querySelector('#username')
        if(username.value.length >= 4) {
            usernameInput.classList.remove('incorrect-input')
            inputs.isUsernameValid = true;
        } else {
            usernameInput.classList.add('incorrect-input')
            inputs.isUsernameValid = false;
        }

    })

    //validates the email format and adds/removes incorrect input class
    watch(email, () => {
        let emailInput = document.querySelector('#email');
        if (emailRegex.test(email.value) === false) {
            emailInput.classList.add('incorrect-input')
            inputs.isEmailValid = false;
        } else {
            console.log('this is a legit email')
            emailInput.classList.remove('incorrect-input')
            inputs.isEmailValid = true;
        }
    })

     // formats phoneNumber in the user info 
     watch(phoneNumber, () => {
        const phoneNumberInput = document.querySelector('#phoneNumber')
        sNumber = phoneNumber.value.toString();
        sNumber = sNumber.replaceAll('-', '')
        if (sNumber.length === 10) {
            // sNumber = sNumber.replaceAll('-', '')
            phoneNumberInput.classList.remove('incorrect-input')
            numArray = [sNumber.slice(0,3), sNumber.slice(3,6), sNumber.slice(6,10)].join('-'); //0123456789 to 012 345 6789
            phoneNumber.value = numArray;
            inputs.isPhoneNumberValid = true; 
        } else {
            phoneNumberInput.classList.add('incorrect-input')
            inputs.isPhoneNumberValid = false;
        }   
    })

    //validates password1 and password2
    watch([password, password2], () => {
        let passwordInput = document.querySelector('#password');
        let password2Input = document.querySelector('#password2');
        if (password.value.length > 0 && password2.value.length > 0) {
            //passwords have content
            if ((passwordRegex.test(password.value)) && (passwordRegex.test(password2.value))) {
                //both match format
                if(password.value === password2.value) {
                    //they match each other and format (GOOD)
                    passwordInput.classList.remove('incorrect-input')
                    password2Input.classList.remove('incorrect-input')
                    inputs.isPasswordValid = true;
                } else {
                    //they don't match each other but match format
                    inputs.isPasswordValid = false;
                    passwordInput.classList.add('incorrect-input')
                    password2Input.classList.add('incorrect-input')
                }
            } else {
                //don't match format
                inputs.isPasswordValid = false;
                passwordInput.classList.add('incorrect-input')
                password2Input.classList.add('incorrect-input')
            } 
        } else {
            //either password doesn't match the format 
            inputs.isPasswordValid = false;            
        }
    })
    
    //watches the inputs that should be validated and enables/disables submit button
    watch(inputs, () => {
        if (inputs.isUsernameValid && inputs.isEmailValid && inputs.isPhoneNumberValid && inputs.isPasswordValid) {
            isDisabled.value = false;
        } else {
            isDisabled.value = true;
        }
    })    

    //watches inputs validation and displays red instructions
    watch([username, email, phoneNumber, password, password2], () => {
        const footer = document.querySelector('#footer')
        if (inputs.isUsernameValid === false || inputs.isEmailValid === false || inputs.isPhoneNumberValid === false || inputs.isPasswordValid === false) {
            footer.style.display = 'block';
        }
        else {
            footer.style.display = 'none';
        }
    })



    //focuses on username when mounted
    onMounted(() => {
        input.value.focus()
    })
</script>

<template>
    <div id="mainContainer" class="container mt-3"> 
        <div id="content" class="row flex-column flex-md-row mx-lg-5 text-center">
            <section class="col-md-5">
                <img id="icon" :src="profilePic" alt="">
                <div class="row flex-column">
                    <div class="col d-none d-md-block mt-5">
                        <p> {{ username }}</p>
                    </div>
                    <div class="col d-none d-md-block">
                        <p id="userEmail"> {{ email }} </p>
                    </div>
                    <div class="col d-none d-md-block">
                        <p> {{ phoneNumber }} </p>
                    </div>
                </div>
            </section>

            <section class="col-md-2 d-none d-md-block px-0">
                <div class="divider"></div>
            </section>

            <section class="col-md-5">
                <form id="docForm" action="#">

                    <div class="row mt-3 mt-md-0">
                        <div class="col form-floating">
                            <input v-model="username" ref="input" class="form-control" type="text" id="username" name="username" placeholder="johndoe00" required>
                            <label for="username">Username</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col form-floating">
                            <input v-model="email" class="form-control" type="email" id="email" name="email" placeholder="name@example.com" required>
                            <label for="email">Email Address</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col form-floating">
                            <input v-model="phoneNumber" class="form-control" type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required>
                            <label for="phoneNumber">Phone Number</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col form-floating">
                            <input v-model="password" class="form-control" type="password" id="password" name="password" placeholder="password" required>
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-floating">
                            <input v-model="password2" class="form-control" type="password" id="password2" name="password2" placeholder="password2" required>
                            <label for="password2">Confirm Password</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <input class="form-control form-control-lg" @change="uploadImg" type="file" id="formFile" name="formFile" accept="image/png, image/jpeg">
                        </div>
                    </div>

                    <div class="btn-container">
                        <button :disabled="isDisabled" class="btn btn-primary" type="submit">Sign Up</button>
                    </div>

                </form>
            </section>

            <footer id="footer">
                <div class="row">
                    <div class="col">
                        <ul>
                            <li>username (min 4 characters)</li>
                            <li>email (e.g. email@address.com)</li>
                            <li>password (min 8 chars, 1 punctuation, 1 lowercase, 1 uppercase)</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style>
    #mainContainer {
        width: 90%;
    }
    #icon {
        width: 100px;
        border: solid #d0d0d0 2px;
        border-radius: 20px;
        background-color: #d0d0d0;
    }
    .row, button {
        margin-top: 1rem;
    }
    .row:nth-of-type(1) {
        margin-top: 0;
    }
    label {
        transform: translateX(1rem);
    }
    .divider {
        background-color: #969696;
        width: 1px;
        height: 420px;
        /* border: solid red 2px */
    }
    #formFile {
        font-size: 1.1rem;
    }
    #userEmail {
        font-style: italic;
        color: blue;
    }
    .incorrect-input {
        border: red solid 2px;
    }
    footer {
        display: none;
        padding-top: 10px;
        transform: translateY(5px);
        border-radius: 0.5rem;
        background-color: rgb(253, 182, 182);
        text-align: start;
        font-size: 0.75rem;
    }
    @media (min-width: 768px) {
        #content {
            margin-top: 6rem;
        }
    }
</style>