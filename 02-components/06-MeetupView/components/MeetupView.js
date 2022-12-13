import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupCover from 'C:/Users/Asus/Desktop/course-vue/vue-20221107_aleksey-reshetilo/02-components/03-MeetupCover/components/MeetupCover.js'
import MeetupDescription from 'C:/Users/Asus/Desktop/course-vue/vue-20221107_aleksey-reshetilo/02-components/02-MeetupDescription/components/MeetupDescription.js'
import MeetupAgenda from 'C:/Users/Asus/Desktop/course-vue/vue-20221107_aleksey-reshetilo/02-components/05-MeetupAgenda/components/MeetupAgenda.js'
import MeetupInfo from 'C:/Users/Asus/Desktop/course-vue/vue-20221107_aleksey-reshetilo/02-components/04-MeetupInfo/components/MeetupInfo.js'
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
