import store from '../../store/'

export default {
    name: 'Signup',
    data() {
        return {
            username: '',
            password: '',
            confirm_password: ''
        }
    },
    methods: {
        login() {
            if(this.password !== this.confirm_password) {
                alert('Passwords don\'t match')
                return;
            }

            store.dispatch('signup', {
                email: this.username,
                password: this.password
            })
        }
    },
}