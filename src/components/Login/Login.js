import store from '../../store/'

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            store.dispatch('login', {
                email: this.username,
                password: this.password
            }).then((user) => {
                console.log('login', user, firebase)
                this.$router.push('/chat')
            })
        },
        loginWithGoogle() {
            store.dispatch('loginWithGoogle', {
                email: this.username,
                password: this.password
            }).then(() => {
                this.$router.push('/chat')
            })
        }
    },
    mounted() {
        if(firebase.auth().currentUser) {
            this.$router.push('/chat')
        }
    }
}