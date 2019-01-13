<template>
  <header class="layout-header">
    <transition name="layout-header__nav">
      <button-navicon></button-navicon>
    </transition>
    <transition
      name="layout-header__logo">
      <router-link to="/"
        v-if="shouldDisplay"
        class="layout-header-flex-item">
        <icon-logotype
          fill="ffffff"
          width="100"
          height="35">
        </icon-logotype>
      </router-link>
    </transition>
    <transition name="layout-header__login">
      <icon-user
        v-if="shouldDisplay"
        class="layout-header-flex-item"
        fill="white"
        width="0.6em"
        height="0.8em">
      </icon-user>
    </transition>
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
  computed: {
    shouldDisplay () {
      return this.$store.state.loading.initAppLoadIsComplete;
    }
  }
};
</script>

<style lang="sass">

@mixin layout-header-item-enter-active
  transform: translateY(0)
  opacity: 1
  transition: transform 0.5s cubic-bezier(0, 0.55, 0.35, 1), opacity 0.5s

@mixin layout-header-item-enter
  opacity: 0
  transform: translateY(-100%)

.layout-header
  display: flex
  justify-content: space-between
  padding: 1em 0

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
