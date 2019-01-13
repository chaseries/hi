<template>
  <header class="layout-header">
    <transition name="layout-header__logo">
      <div v-if="shouldDisplay" class="layout-header__logo">I am the logo</div>
    </transition>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: "component-layout-header-layout-header",
  computed: {
    shouldDisplay () {
      return this.$store.state.loading.initAppLoadIsComplete;
    }
  }
};
</script>

<style lang="sass">

.layout-header__logo-enter-active
  transition: transform(0)
  transition: transform 1s

.layout-header__logo-enter
  transform: translateY(-100%)


</style>
