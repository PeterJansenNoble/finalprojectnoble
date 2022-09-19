import { createApp } from 'vue';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';


import router from './router'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Import the functions you need from the SDKs yo

// Import the functions you need from the SDKs you need

library.add(fas);




createApp(App)
  .use(router)
  .use(vuetify)
  .component('fa', FontAwesomeIcon)

  .mount('#app')
