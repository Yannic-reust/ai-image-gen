import { createApp } from 'vue';
//@ts-ignore
import store from './store/index'
//@ts-ignore
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(store).mount('#app');




