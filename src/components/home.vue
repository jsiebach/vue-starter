<style lang="scss">
  @import "../sass/shared/shared";
</style>

<template>
  <div>
    <h1>A quick starter for Vue projects.</h1>

    <p>{{ "I am a test let's see what happens dude." | trim 10 true }}</p>

    <button @click="modal.open = !modal.open">Toggle Modal</button>

    <modal :open.sync="modal.open" :transition="modal.transition" dismissable>
      <div slot="header">
        Hi
      </div>
      <div slot="body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat accusantium aliquid dicta nobis vel, exercitationem itaque molestiae repudiandae architecto. Distinctio necessitatibus alias nobis repellat, perferendis tenetur fugiat id. Illum, in!</p>
        <button @click.stop="modal.open = false">Close</button>
      </div>
      <div slot="footer">
        Copyright 2016
      </div>
    </modal>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        modal: {
          open: false,
          transition: 'modal'
        }
      }
    }
  }
</script>
