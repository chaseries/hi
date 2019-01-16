<template>
  <header id="layout-header" class="layout-header">
    <div class="layout-header__wrap">
    <!-- see note below about `enter` method -->
    <transition name="layout-header__nav"
      v-on:enter="getLayoutHeaderHeight">
      <button-navicon
        v-if="shouldDisplay">
      </button-navicon>
    </transition>
    <transition
      name="layout-header__logo">
      <router-link to="/"
        v-if="shouldDisplay"
        class="layout-header-flex-item">
        <icon-logotype
          :fill="fill"
          width="100"
          height="35">
        </icon-logotype>
      </router-link>
    </transition>
    <transition name="layout-header__login">
      <icon-user
        v-if="shouldDisplay"
        class="layout-header-flex-item"
        :fill="fill"
        width="0.6em"
        height="0.8em">
      </icon-user>
    </transition>
    </div> <!-- layout-header__wrap -->
  </header>
</template>

<script>
import ButtonNavicon from "VUE_COMPONENT/button/Navicon.vue";
import IconLogotype from "VUE_COMPONENT/icon/Logotype.vue";
import IconUser from "VUE_COMPONENT/icon/User.vue";

export default {
  name: "component-layout-header-layout-header",
  components: {
    IconLogotype,
    IconUser,
    ButtonNavicon
  },
  methods: {
    getLayoutHeaderHeight () {
      // Collect the layout header height to be used for spacing in the modal else-
      // where. Has to be done after the header has been set in the DOM. Doesn't
      // work on `enter`, but `afterEnter` is too late, hence the timeout.
      const layoutHeader = document.getElementById("layout-header");
      window.setTimeout(() => {
        this.$store.commit("misc/setLayoutHeaderHeight", layoutHeader.offsetHeight);
      }, 100);
      window.addEventListener("resize", () => {
        this.$store.commit("misc/setLayoutHeaderHeight", layoutHeader.offsetHeight);
      });
    }
  },
  computed: {
    shouldDisplay () {
      return this.$store.state.loading.initAppLoadIsComplete;
    },
    fill () {
      return this.$store.state.modal.open ? "black" : "white";
    }
  },
  mounted () {
    // Because for some reason this doesn't work without a timeout
  }
};
</script>

<style lang="sass">
@import "~SASS/global/class";

@mixin layout-header-item-enter-active
  transform: translateY(0)
  opacity: 1
  transition: transform 0.5s cubic-bezier(0, 0.55, 0.35, 1) 0.8s, opacity 0.5s linear 0.8s

@mixin layout-header-item-enter
  opacity: 0
  transform: translateY(-100%)

.layout-header
  position: relative
  padding: 1em 0
  z-index: 110
  &__wrap
    @include wrap
    padding: 1em 1em 0 1em
    display: flex
    justify-content: space-between

.layout-header-flex-item
  align-self: center

.layout-header__nav-enter-active
  @include layout-header-item-enter-active

.layout-header__nav-enter
  @include layout-header-item-enter

.layout-header__ul
  list-style-type: none
  margin: 0
  padding: 0

.layout-header__logo-enter-active
  @include layout-header-item-enter-active

.layout-header__logo-enter
  @include layout-header-item-enter

.layout-header__login-enter-active
  @include layout-header-item-enter-active

.layout-header__login-enter
  @include layout-header-item-enter

</style>
