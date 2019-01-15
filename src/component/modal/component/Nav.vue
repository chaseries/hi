<template>
  <div
    class="modal-component__nav"
    :style="'padding-top:' + layoutHeaderHeight + 'px'">
    I am the nav
    <nav>
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
  },
  mounted () {
    console.log("The layout header height is", this.layoutHeaderHeight);
  }
};
</script>

<style lang="sass">
.modal-component__nav
  padding-top: layout
</style>
