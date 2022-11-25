import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return this.result = response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}


let vm = createApp({
  data: () => ({
    meetupId: null,
    meetupData: null,
  }),
  watch: {
    meetupId(val) {
      fetch(`https://course-vue.javascript.ru/api/meetups/${val}`)
        .then(response => response.json())
        .then(response => this.meetupData = response.title);
    }
  },

}).mount('#app')

// Требуется создать Vue приложение
