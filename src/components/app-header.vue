<style lang="scss">
  @import "../sass/shared/shared";
  .header {
    background-color: $color--black;
    a {
      color: $color--white;
    }
  }
</style>

<template>
  <header class="header">
    <h1>
      <a v-link="{ name: 'home' }">App</a>
    </h1>
    <navigation></navigation>
  </header>
</template>

<script>
  import Navigation from './navigation.vue';

  export default {
    components: {
      Navigation
    }
  }

</script>
