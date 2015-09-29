<style lang="scss-ap">
  @import "src/sass/shared/shared";

  @import "src/sass/normalize";
  @import "src/sass/transitions";

  @import "src/sass/base";

  @import "src/sass/header";
  @import "src/sass/footer";

  .app--scrolling {
    pointer-events: none;
  }
</style>

<template>
  <div class="app">
    <header class="header">
      <h1>
        <a v-link="{ name: 'home' }">App</a>
      </h1>
      <ul>
        <li><a v-link="{ name: 'about' }">About</a></li>
        <li><a v-link="{ name: 'search' }">Search</a></li>
        <li><a v-link="{ name: 'archives' }">Archives</a></li>
      </ul>
    </header>
    <main class="main">
      <router-view class="page" v-transition="fade" v-if="!loading" transition-mode="out-in"></router-view>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {}
    },
    beforeCompile: function () {},
    ready: function () {},
    components: {},
    directives: {},
    filters: {},
    transitions: {},
    methods: {}
  }
</script>
