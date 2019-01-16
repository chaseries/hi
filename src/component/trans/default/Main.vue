<template>
  <transition name="trans-default" v-on:after-enter="afterEnter">
    <div v-if="shouldPlay" class="trans trans--default">
      <div class="trans__guts">
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "component-trans-default",
  computed: {
    shouldPlay () {
      const currentTrans = this.$store.getters["trans/currentTrans"];
      if (currentTrans && (currentTrans.name === "default")) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    afterEnter () {
      window.setTimeout(() => {
        this.$store.commit("trans/leave");
      }, 200);
    }
  }
};
</script>

<style lang="sass">

.trans
  width: 100%
  height: 100%
  position: fixed
  z-index: 110

.trans--default
  background-color: black

.trans-default-enter-active
  transform: translateX(0)
  transition: transform 0.25s

.trans-default-enter
  transform: translateX(-100%)

.trans-default-leave-active
  transform: translateX(100%)
  transition: transform 0.25s

.trans-default-leave
  transform: translateX(0)


</style>
