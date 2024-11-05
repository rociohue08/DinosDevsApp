<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
=======
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
app.use(
  createAuth0({
    domain: "dev-p2a38yay4uw13qpa.us.auth0.com",
    clientId: "om02RN01rMOejXn2D6O2FIklHPW1hwWW",
    authorizationParams: {
<<<<<<< HEAD
      redirect_uri: window.location.origin
=======
      redirect_uri: window.location.origin,
    },
    onRedirectCallback: (appState) => {
      const targetUrl = appState?.targetUrl || window.location.pathname;
      router.push(targetUrl);
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
    }
  })
);

<<<<<<< HEAD
app.mount('#app') // Asegúrate de incluir esta línea
=======
app.mount('#app');
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
