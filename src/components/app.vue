<style lang="scss">
  @import "src/sass/shared/shared";

  @import "src/sass/normalize";
  @import "src/sass/transitions";

  [v-cloak] {
    display: none;
  }

  :root {
    box-sizing: border-box;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  *, ::before, ::after {
    box-sizing: inherit;
    position: relative;
  }
</style>

<template>
  <div class="app">
    <app-header></app-header>
    <main class="main">
      <router-view class="page" transition="fade" transition-mode="out-in"></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  var throttle = require('lodash.throttle');

  module.exports = {
    components: {
      appHeader: require('./app-header.vue'),
      appFooter: require('./app-footer.vue')
    },
    ready: function () {
      var body = document.body;
      var scrollingTimeout = undefined;

      window.addEventListener('scroll', throttle(function () {
        clearTimeout(scrollingTimeout);

        body.classList.add('scrolling');

        scrollingTimeout = setTimeout(function () {
          body.classList.remove('scrolling');
        }, 50);
      }, 40));
    }
  }
</script>
