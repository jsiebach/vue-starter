<style lang="scss-ap">
  @import "src/sass/shared/shared";
</style>

<template>
  <div class="page--search">
    <input class="search" v-model="search" placeholder="Search...">
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        search: 'Butts'
      }
    }
  }
</script>
