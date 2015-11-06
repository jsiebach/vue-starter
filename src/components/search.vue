<style lang="scss">
  @import "src/sass/shared/shared";
  .favorite {
    font-weight: bold;
  }
</style>

<template>
  <div class="page--search">

    <h1>Search</h1>

    <ul>
      <li><a v-link="{ name: 'search', query: { 'search': '' }}">Empty</a></li>
      <li><a v-link="{ name: 'search', query: { 'search': 'Louise' }}">Louise</a></li>
      <li><a v-link="{ name: 'search', query: { 'search': 'Tina' }}">Tina</a></li>
    </ul>

    <input class="search" v-model="search" placeholder="Search...">

    <button @click="updateLink">Update</button>

    <ul>
      <li v-for="episode in episodes | filterBy search in 'name'" transition="fade" :class="{ favorite: episode.favorite }" @click="toggleFavorite(episode, $index)">
        {{ episode.name }}
      </li>
    </ul>

  </div>
</template>

<script>
  var db = require('../data/bobs-burgers.json');

  var episodes = db._embedded.episodes.map(function (episode) {
    episode.favorite = false;
    return episode;
  });

  module.exports = {
    route: {
      data: function (transition) {
        transition.next({
          search: this.$route.query.search
        });
      }
    },
    data: function () {
      return {
        search: 'Butts',
        episodes: episodes
      }
    },
    methods: {
      toggleFavorite: function (episode, index) {
        console.log(event.shiftKey, event.metaKey, event);
        episode.favorite = !episode.favorite;
      },
      updateLink: function () {
        var search = this.search;
        var route = {
          name: "search",
          query: {
            search: search
          }
        };

        this.$route.router.go(route);
      }
    }
  }
</script>
