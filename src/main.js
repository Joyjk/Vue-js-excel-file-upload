/* eslint-disable */

import { createApp } from 'vue'
//import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import VueRouter from 'vue-router'
// import UploadFile from './components/UploadFile.vue'
// VueRouter.Use(VueRouter);
// const routes = [
//     {path:'/upload', component:UploadFile},
// ]
// const router =  new VueRouter({
//     routes
// })
// Vue.config.productionTip = false;
// new Vue({
//     router:router,
//     render: h=>h(App),
// }).$mount('#app')
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

const app = createApp(App)


app.use(router).mount('#app')
