import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");


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
