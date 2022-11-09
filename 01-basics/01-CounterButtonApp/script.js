import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const Task1 = createApp({
    data() {
        return {
            counter: 0
        }
    }
}).mount('#app')