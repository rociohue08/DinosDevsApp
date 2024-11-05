import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(
  createAuth0({
    domain: "dev-p2a38yay4uw13qpa.us.auth0.com",
    clientId: "om02RN01rMOejXn2D6O2FIklHPW1hwWW",
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
    onRedirectCallback: (appState) => {
      const targetUrl = appState?.targetUrl || window.location.pathname;
      router.push(targetUrl);
    }
  })
);

app.mount('#app');
