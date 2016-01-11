var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.config.debug = true;

var App = require('./components/app.vue');

// Globals
Vue.component('modal', require('./components/modal.vue'));
Vue.filter('trim', require('./filters/trim'));

// Set up router...
Vue.use(VueRouter);
var router = new VueRouter();

router.map({
  '/': {
    component: require('./components/home.vue'),
    name: 'home'
  },
  'about': {
    component: require('./components/about.vue'),
    name: 'about'
  }
});

// Start
router.start(App, '#app');
