<style lang="scss">
  @import "src/sass/shared/shared";
  .unselectable {
    user-select: none;
  }
</style>

<template>
  <div class="page--home">
    <h1>Hello {{ planet }}</h1>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        planet: 'Earth'
      }
    }
  }
</script>
