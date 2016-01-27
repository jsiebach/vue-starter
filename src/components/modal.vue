<script>
  export default {
    props: {
      open: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      dismissable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close(event) {
        var classList = event.target.classList;
        if (this.dismissable) {
          this.open = !classList.contains('modal');
        }
      }
    },
    attached() {
      this.closer = (event) => {
        if (!this.open) return;
        var classList = event.target.classList;
        if (this.dismissable) {
          this.open = !classList.contains('modal');
        }
      };
      document.documentElement.addEventListener('click', this.closer);
    },
    detached() {
      document.documentElement.removeEventListener('click', this.closer);
    },
    directives: {
      esc: {
        handleEvent(event) {
          if (event.keyCode === 27) {
            this.vm.open = false;
          }
        },
        bind() {
          document.documentElement.addEventListener('keydown', this);
        },
        unbind() {
          document.documentElement.removeEventListener('keydown', this);
        }
      }
    }
  }
</script>

<template>
  <div class="modal" v-show="open" role="dialog" :hidden="!open ? '' : false" v-esc>
    <div class="modal-main">
      <header class="modal-header">
        <slot name="header"></slot>
      </header>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <footer class="modal-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style lang="sass">
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;

    &-transition {
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.15s, transform 0.15s;
    }

    &-enter,
    &-leave {
      opacity: 0;
      transform: scale(1.1);
    }

    &-main {
      background-color: rgba(255, 255, 255, 1);
      width: 90%;
      max-width: 600px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    &-header,
    &-body,
    &-footer {
      padding: 2%;
    }

    &-header,
    &-footer {
      background-color: rgba(200, 200, 200, 1);
    }
  }
</style>
