<template>
  <transition name="trans-init">
    <div v-if="shouldPlay" class="trans trans__init">
      <div class="trans__guts">
        Loading
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "component-trans-init",
  computed: {
    shouldPlay () {
      const currentTrans = this.$store.getters["trans/currentTrans"];
      if (currentTrans && (currentTrans.name === "init")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="sass">

.trans
  position: fixed
  width: 100%
  height: 100%

.trans__guts
  position: relative
  top: 50%
  transform: translateY(-50%)
  text-align: center

.trans__init
  background-color: white

.trans__init-leave
  opacity: 1

.trans__init-leave-active
  transition: opacity 1.0s
  opacity: 0

</style>
