<style lang="scss">
  @import "src/sass/shared/shared";
  @import "src/sass/transitions";
  @import "src/sass/base";
</style>

<template>
  <div class="app app--{{ $route.name }}">
    <app-header></app-header>
    <main class="main">
      <router-view transition="fade" transition-mode="out-in"></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from './app-header.vue';
  import appFooter from './app-footer.vue';

  export default {
    components: {
      appHeader,
      appFooter
    }
  }
</script>
