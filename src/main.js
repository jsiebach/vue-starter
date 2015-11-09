var Vue = require('vue');

Vue.config.debug = true;

var VueRouter = require('vue-router');
Vue.use(VueRouter);

var router = new VueRouter({
  history: false
});

var App = require('./components/app.vue');

router.map({
  '/': {
    component: require('./components/home.vue'),
    name: 'home'
  },
  'form': {
    component: require('./components/form.vue'),
    name: 'form'
  }
});

router.start(App, '#app');
