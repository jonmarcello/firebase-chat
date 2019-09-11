<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '/scss/app.scss';
  @import '~bootstrap/scss/bootstrap';
</style>


<script>
  global.firebase = require('firebase');
  var app = global.firebase.initializeApp({
    apiKey: "AIzaSyACJujx3ScXJvrbObtzONwNpZZTtqZvYXQ",
    authDomain: "lns-chat-app.firebaseapp.com",
    databaseURL: "https://lns-chat-app.firebaseio.com",
    projectId: "lns-chat-app",
    storageBucket: "lns-chat-app.appspot.com",
    messagingSenderId: "150609378709"
  });


  require('bootstrap')

  export default {
    name: 'App'
  }
</script>

