// import { createApp } from './vendor/vue.esm-browser.js';

import { createApp } from "../01-CounterButtonApp/vendor/vue.esm-browser";

// Создайте Vue приложение
let vm = createApp({
    data() {
        return {
            num1: 0,
            num2: 0,
            operator: ''
        }
    },
    computed: {
        result() {
            switch(this.operator) {
              case "sum":
                return this.num1 + this.num2
              case "subtract":
                return this.num1 - this.num2
              case "multiply":
                return this.num1 * this.num2
              case "divide":
                return this.num1 / this.num2
            }
          }
    }
}).mount('#app')