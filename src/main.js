import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyD7EJGtIV4jqph99PUIhJabRnAwtATfFYo",
    authDomain: "first-chatbaby.firebaseapp.com",
    databaseURL: "https://first-chatbaby.firebaseio.com",
    projectId: "first-chatbaby",
    storageBucket: "first-chatbaby.appspot.com",
    messagingSenderId: "754766917107",
    appId: "1:754766917107:web:263af2bb5b931b4104b686",
    measurementId: "G-JMLC6WHER5"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

window.db = db;

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
