import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';
export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: String
    }
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img src="/assets/icons/icon-key.svg" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title" v-if="agendaItem.title != null">{{agendaItem.title}}</h3>
        <h3 class="agenda-item__title" v-else>{{agendaItem.title}}</h3>
        <p class="agenda-item__talk">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot" v-if="agendaItem.language != null"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p>{{agendaItem.description}}</p>
      </div>
    </div>`,
});
