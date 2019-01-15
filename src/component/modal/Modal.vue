<template>
  <transition name="modal">
    <div
      v-if="shouldDisplay"
      class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__wrap">
        <component :is="component"></component>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "component-modal-modal",
  computed: {
    shouldDisplay () {
      return this.$store.state.modal.open;
    },
    component () {
      const componentName = this.$store.state.modal.component;
      return () => import(`./component/${componentName}`);
      //return this.$store.state.modal.component;
    }
  },
  mounted () {
    window.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.$store.commit("modal/close");
      }
    });
  }
};
</script>

<style lang="sass">

$modal-enter-leave-dur: 0.15s

.modal
  position: fixed
  width: 100%
  height: 100%
  background-color: white

.modal-enter-active
  opacity: 1
  transition: opacity $modal-enter-leave-dur linear

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0
  transition: opacity $modal-enter-leave-dur linear

.modal-leave
  opacity: 1

</style>
