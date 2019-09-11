// initial state
const state = {
  user: null
}

// getters
const getters = {
  currentUser() {
      console.log(firebase)
      return firebase.auth().currentUser;
  }
}

// actions
const actions = {
  login ({ commit }, user) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(() => {
        console.log('error')
    })
  },
  loginWithGoogle ({ commit }, user) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
      
    return firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        alert('Login successful')
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(`Login failed for with email ${email}: ${errorMessage}`)
      });
  },
  signup({ commit }, user) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function() {
        alert('account created')
    }).catch((error) => {
        alert(`Error creating account: ${error.message}`)
    })
  }
}

// mutations
const mutations = {
  setCurrentUser (user) {
    state.user = user
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
