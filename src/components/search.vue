<style lang="scss">
  @import "../sass/shared/shared";
  input {
    border: 1px solid #ddd;
  }
</style>

<template>
  <div>
    <h1>Search</h1>
    <input v-model="search">
    <ul>
      <li v-for="item in items | filterBy search">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        search: '',
        items: [
          { title: 'Meow' },
          { title: 'Bark' },
          { title: 'Ribbit' }
        ]
      }
    }
  }
</script>
