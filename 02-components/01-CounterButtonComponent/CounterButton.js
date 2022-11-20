import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие
  props: ['count'],
  template: `<button type="button" :count="counter">1</button>`,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    counter() {
      count += 1
    }
  }
});
