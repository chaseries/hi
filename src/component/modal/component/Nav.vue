<template>
  <div
    class="modal-component__nav"
    :style="'padding-top:' + layoutHeaderHeight + 'px'">
    I am the nav
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>


export default {
  name: "component-modal-component-nav",
  computed: {
    layoutHeaderHeight () {
      return this.$store.state.misc.layoutHeaderHeight;
    }
  }
};
</script>

<style lang="sass">
.modal-component__nav
  padding-top: layout
</style>
