import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYTtmn0nFZn8fD3_aGPSYFKVYbwF3y3T4",
  authDomain: "weight-tracker-app-41475.firebaseapp.com",
  projectId: "weight-tracker-app-41475",
  storageBucket: "weight-tracker-app-41475.appspot.com",
  messagingSenderId: "137954969312",
  appId: "1:137954969312:web:ccad2bfdff55e0abcf7285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };