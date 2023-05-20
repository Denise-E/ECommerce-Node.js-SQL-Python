import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#d9bbf9',
        secondary: '#b47cde',
        third: '#5A2083',
        fourth: '#371452',
        error: '#FF5252', // default
        success: '#4CAF50', // default
        warning: '#FFC107' // default
      },
    },
  },
});
