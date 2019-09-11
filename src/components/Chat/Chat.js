import store from '../../store/'

var fbdb = firebase.database().ref('/chats')
var fbdblimit = fbdb.limitToLast(10);
var cuid = firebase.auth().currentUser && firebase.auth().currentUser.uid;

export default {
    name: 'Chat',
    data() {
        return {
            user: store.getters.currentUser || firebase.auth().currentUser,
            msg: null,
            listOfMessages: []
        }
    },
    methods: {
        send() {
            fbdb.push({
                user: cuid,
                email: this.user.email,
                body: this.msg
            }).then((data) => {
                console.log('post data', data)
            }).catch((err) => {
                console.err(err)
            })

            this.msg = "";
        },
        logout() {
            var thisVar = this;
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                thisVar.$router.push('/')
            }, function(err) {
                // An error happened.
                console.err(err)
            });              
        }
    },
    mounted() {
        if(!this.user) {
            this.$router.push('/')
        }

        var thisVar = this;
        var audio = new Audio('/static/ding/dong.mp3');

        fbdblimit.on('child_added', (data) => {
            var msg = data.val();
            msg.id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 10000);

            thisVar.listOfMessages = thisVar.listOfMessages.concat(msg)

            if(!cuid) {
                cuid = firebase.auth().currentUser.uid
            }

            if(cuid && msg.user !== cuid) {
                audio.play();
            }
        })
    }
}