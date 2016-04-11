var Vue = require('vue');
var VueRouter = require('vue-router');
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap.min.js');

Vue.config.debug = true;

var App = require('./components/app.vue');

// Globals
Vue.component('modal', require('./components/modal.vue'));
Vue.filter('trim', require('./filters/trim'));

// Set up router...
Vue.use(VueRouter);
var router = new VueRouter({
  linkActiveClass: 'active',
  hashbang:false,
  history:true
});

router.map({
  '/': {
    component: require('./components/home.vue'),
    name: 'home'
  },
  'publications': {
    component: require('./components/publications.vue'),
    name: 'publications'
  },
  'research': {
    component: require('./components/research.vue'),
    name: 'research'
  },
  'cv': {
    component: require('./components/cv.vue'),
    name: 'cv'
  },
  'outreach': {
    component: require('./components/outreach.vue'),
    name: 'outreach'
  },
  'photography': {
    component: require('./components/photography.vue'),
    name: 'photography'
  }
});

router.beforeEach(function (transition) {
  ga('send', 'pageview', transition.to.path);
  window.scrollTo(0, 0);
  transition.next();
});
// Start
router.start(App, '#app');
