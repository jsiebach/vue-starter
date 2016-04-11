<style lang="scss">
  @import "../sass/shared/shared";
  @import "../sass/transitions";
  @import "../sass/sanitize";
  @import "../sass/base";

  .main{
    position:absolute;
    height:100%;
    padding-top:60px;
  }
</style>
<template>
  <div :class="['app', 'app--' + $route.name]">
    <div class="container">
      <app-header></app-header>
      <main class="main container">
        <router-view transition="fade" transition-mode="out-in"></router-view>
        <app-footer></app-footer>
      </main>

    </div>
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
