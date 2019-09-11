<template>
    <div class="login-container">
        <div class="login">
            <div class="header">
                
            </div>
            <form v-on:submit.prevent @submit="login" class="content">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email Address / Username</label>
                    <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="submit">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div class="submit">
                    <img class="google" src="static/google/btn_google_signin_dark_normal_web.png" @click="loginWithGoogle"></img>
                </div>
            </form>
            <div class="footer">
                <div class="footer-text">Don't have an account?</div>
                <router-link class="btn btn-warning signup" to="Signup">Sign up</router-link>
            </div>
        </div>
    </div>
</template>

<script src="./Login.js"></script>
