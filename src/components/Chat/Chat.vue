<template>
    <div>
        <b>User: {{user && user.email}}</b><br />

        <ul class="messageList">
            <li v-for="msg in listOfMessages" :key="msg.id">
                <span>{{ msg.email }}: {{ msg.body }}</span>
            </li>
        </ul>

        <form v-on:submit.prevent @submit="send">
            <input type="text" v-model="msg">
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
        <br />
        <button class="btn" @click="logout">Logout</button>
    </div>
</template>

<script src="./Chat.js"></script>

<style scoped>

</style>