// 📁 MeetupAgenda.js
import { defineComponent } from '../vendor/vue.esm-browser';
import MeetupAgendaItem from './MeetupAgendaItem';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="agenda">
      <li v-for="agendaItem in agenda" :key="agendaItem.id" class="agenda__item">
        <MeetupAgendaItem :agenda-item="agendaItem" />
      </li>
    </ul>`,
});