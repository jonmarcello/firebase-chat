<template>
    <div class="login-container">
        <div class="login">
            <div class="header">
                
            </div>
            <form v-on:submit.prevent @submit="login" class="content">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email Address / Username</label>
                    <input v-model="username" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input v-model="confirm_password" type="password" class="form-control" placeholder="Confirm Password">
                </div>
                <div class="submit">
                    <button type="submit" class="btn btn-primary">Begin</button>
                </div>
            </form>
            <div class="footer">
                <div class="footer-text">Have an account?</div>
                <router-link class="btn btn-warning signup" to="/">Sign in</router-link>
            </div>
        </div>
    </div>
</template>

<script src="./Signup.js"></script>
