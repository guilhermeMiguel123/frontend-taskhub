import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import vuetify from './plugins/vuetify'; // Certifique-se de que esse arquivo existe!

axios.defaults.baseURL = 'http://localhost:5000/api';

createApp(App)
  .use(router)     // Usa o Vue Router
  .use(vuetify)    // Usa o Vuetify
  .mount('#app');   // Monta a aplicação no div com id="app"
