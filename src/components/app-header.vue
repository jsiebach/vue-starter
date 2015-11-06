<style>
  .header {}
</style>

<template>
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
</template>
