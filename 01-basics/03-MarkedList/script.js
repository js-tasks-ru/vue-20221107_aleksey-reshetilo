// import { createApp } from './vendor/vue.esm-browser.js';
import { createApp } from "../03-MarkedList/vendor/vue.esm-browser";
// From https://jsonplaceholder.typicode.com/comments


// Требуется создать Vue приложение
let vm = createApp({
  data(){
    return{
      emails:[
        'Eliseo@gardner.biz',
        'Jayne_Kuhic@sydney.com',
        'Nikita@garfield.biz',
        'Lew@alysha.tv',
        'Hayden@althea.biz',
        'Presley.Mueller@myrl.com',
        'Dallas@ole.me',
        'Mallory_Kunze@marie.org',
        'Meghan_Littel@rene.us',
        'Carmen_Keeling@caroline.name',
        'Veronica_Goodwin@timmothy.net',
        'Oswald.Vandervort@leanne.org',
        'Kariane@jadyn.tv',
        'Nathan@solon.io',
        'Maynard.Hodkiewicz@roberta.com',
        'Christine@ayana.info',
        'Preston_Hudson@blaise.tv',
        'Vincenza_Klocko@albertha.name',
        'Madelynn.Gorczany@darion.biz',
        'Mariana_Orn@preston.org',
        'Noemie@marques.me',
        'Khalil@emile.co.uk',
        'Sophia@arianna.co.uk',
        'Jeffery@juwan.us',
        'Isaias_Kuhic@jarrett.net',
      ],
      search: '',

    }
  },
  computed: {
    SearchEmail(){
      const { search } = this;
      return this.emails.map(current_email => ({
        email: current_email,
        marked: !!search && current_email.includes(search),
      }));
    }
   
  }
    
}).mount('#app')