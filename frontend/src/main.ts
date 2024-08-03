import * as vue from 'vue';

import App from '@/App.vue';
import '@assets/style.css';
import 'virtual:uno.css';

import * as pinia from 'pinia';
const store = pinia.createPinia();

import * as vrouter from 'vue-router';

import Home from '@views/Home.vue';
import Parameters from '@views/Parameters.vue';

const history = vrouter.createMemoryHistory();
const routes = [
	{ path: '/', component: Home },
	{ path: '/parameters', component: Parameters },
];
const router = vrouter.createRouter({ history, routes });

vue.createApp(App).use(store).use(router).mount('#app');
