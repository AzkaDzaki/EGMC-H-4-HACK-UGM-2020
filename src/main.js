import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBAtgnbP3LjBbDzKcvsjDZRYKx4G44IA1k",
  authDomain: "todo-udemy.firebaseapp.com",
  databaseURL: "https://todo-udemy.firebaseio.com",
  projectId: "todo-udemy",
  storageBucket: "todo-udemy.appspot.com",
  messagingSenderId: "190809544412",
  appId: "1:190809544412:web:70aa999a262248d2c2c619"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
  if(!app){
    app =
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  //
});

