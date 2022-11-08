import { createApp } from 'vue'

let $ = (window.jQuery = require("jquery"));
window.$ = $;

import axios from 'axios';
window.axios = axios
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

window.axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // whatever you want to do with the error
      // console.log(error.response.data.errors);
      let object = error.response.data.data;
      $(`input`).siblings(".text-danger").remove();
      $(`textarea`).siblings(".text-danger").remove();
  
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          const element = object[key];
          if (document.getElementById(`${key}`)) {
            $(`#${key}`)
              .parent("div")
              .append(`<div class="text-danger">${element[0]}</div>`);
          } else {
            $(`input[name="${key}"]`)
              .parent("div")
              .append(`<div class="text-danger">${element[0]}</div>`);
            $(`select[name="${key}"]`)
              .parent("div")
              .append(`<div class="text-danger">${element[0]}</div>`);
            $(`input[name="${key}"]`).trigger("focus");
            $(`textarea[name="${key}"]`)
              .parent("div")
              .append(`<div class="text-danger">${element[0]}</div>`);
            $(`textarea[name="${key}"]`).trigger("focus");
          }
          console.log({
            [key]: element,
          });
        }
      }
  
      if (typeof error?.response?.data === "string") {
        console.log("error", error?.response?.data ? error?.response?.data : error.response);
      }else{
        console.log(error.response);
      }
      throw error;
    }
  );

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
