import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupCover from '../components/MeetupCover.js'
import MeetupDescription from '../components/MeetupDescription.js'
import MeetupAgenda from '../components/MeetupAgenda.js'
import MeetupInfo from '../components/MeetupInfo'
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <!-- meetup cover-->
    <MeetupCover :title="meetup.title" :image="meetup.image" />
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <MeetupDescription :description="meetup.description"/>

            <h3>Программа</h3>
            <!-- meetup agenda -->
             <MeetupAgenda :agenda="meetup.agenda" v-if="meetup.agenda.length != 0"/>
            <ui-alert v-if="meetup.agenda.length == 0" >Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
            <!-- meetup info -->
          </div>
        </div>
      </ui-container>
    </div>`,
});
