import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyAfATqjSwiVEcwpQai9-XyAUzU_3BAWba0",
    authDomain: "chatroom-51f3b.firebaseapp.com",
    databaseURL: "https://chatroom-51f3b.firebaseio.com",
    projectId: "chatroom-51f3b",
    storageBucket: "chatroom-51f3b.appspot.com",
    messagingSenderId: "594785206675",
    appId: "1:594785206675:web:5e8ff5a92f383994f06866",
    measurementId: "G-93F4Z0RM3R"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
window.db = db;

//Disable Warnings
db.settings({
	timestampsInSnapshots: true
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
