<template>
  <div>
  <transition
    name="trans-default"
    v-on="hooks"
    appear>
    <div
      v-if="shouldPlay"
      class="trans trans--default">
      <div class="trans__guts">
      </div>
    </div>
  </transition>
  </div>
</template>

<script>

export default {
  name: "component-trans-default",
  props: {
    shouldPlay: {
      required: true,
      type: Boolean
    },
    duration: {
      required: true
    },
    suspend: {
      type: Number,
      default: 0
    }
  },
  methods: {
    getDuration (stage) {
      if (typeof this.duration === "number") { return this.duration / 2; }
      return this.duration[stage];
    },
    setDuration (stage) {
      if (stage === "enter") {
        return (el) => {
          el.style.transitionDuration = `${this.enterDuration}ms`;
        };
      } else if (stage === "leave") {
        return (el) => {
          el.style.transitionDuration = `${this.leaveDuration}ms`;
        };
      }
    },
    cleanupDuration (el) {
      el.style.transitionDuration = "";
    },
    cleanupDurationAndLeave (timing) {
      return (el) => {
        el.style.transitionDuration = "";
        window.setTimeout(() => {
          this.$store.commit("trans/leave");
        }, timing);
      };
    }
  },
  computed: {
    hooks () {
      return {
        beforeEnter: this.setDuration("enter"),
        afterEnter: this.cleanupDurationAndLeave(this.suspend), // Does cleanup here really need to happen?
        beforeLeave: this.setDuration("leave"),
        afterLeave: this.cleanupDuration // Does cleanup here really need to happen?
      };
    },
    enterDuration () {
      return this.getDuration("enter");
    },
    leaveDuration () {
      return this.getDuration("leave");
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
  transition: transform 

.trans-default-enter
  transform: translateX(-100%)

.trans-default-leave-active
  transform: translateX(100%)
  transition: transform 

.trans-default-leave
  transform: translateX(0)


</style>
