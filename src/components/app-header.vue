<style lang="scss">
  @import "src/sass/shared/shared";
  .header {}
</style>

<template>
  <header class="header">
    <h1>
      <a v-link="{ name: 'home' }">App</a>
    </h1>
    <ul>
      <li><a v-link="{ name: 'form' }">Forms</a></li>
    </ul>
  </header>
</template>
