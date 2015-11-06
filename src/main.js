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
  'about': {
    component: require('./components/about.vue'),
    name: 'about'
  },
  'archives': {
    component: require('./components/archives.vue'),
    name: 'archives'
  },
  'article/:id': {
    component: require('./components/article.vue'),
    name: 'article'
  },
  'search': {
    component: require('./components/search.vue'),
    name: 'search'
  }
});

router.start(App, '#app');
