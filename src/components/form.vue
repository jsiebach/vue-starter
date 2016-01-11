<style lang="scss">
  @import "../sass/shared/shared";
</style>

<template>
  <div>
    <form>
      <h1>Forms</h1>
      <fieldset>
        <legend>Text</legend>
        <label>
          <input v-model="input" placeholder="Search...">
        </label>
      </fieldset>
      <fieldset>
        <legend>Checkboxes</legend>
        <ul>
          <li v-for="option in options">
            <label>
              <input type="checkbox" v-model="checkboxes" :value="option.value">
              {{ option.label }}
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>Radios</legend>
        <ul>
          <li v-for="option in options">
            <label>
              <input type="radio" v-model="radios" :value="option.value">
              {{ option.label }}
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Select</legend>
        <select v-model="select">
          <option v-for="option in options" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    route: {
      data({ next }) {
        next({
          // search: this.$route.query.search
        });
      }
    },
    data() {
      return {
        options: [
          { label: 'Smarter', value: 'smarter' },
          { label: 'Faster', value: 'faster' },
          { label: 'Stronger', value: 'stronger' },
        ],
        input: 'Hi',
        checkboxes: [],
        radios: '',
        select: 'stronger'
      }
    }
  }
</script>
