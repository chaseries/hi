<template>
  <div :class="{'hero-work': true, 'hero-work-init': showInitClass}">
    <layout-header></layout-header>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";


export default {
  name: "",
  components: {
    LayoutHeader
  },
  data () {
    return {
      showInitClass: true
    };
  },
  mounted () {
    window.setTimeout(() => {
      this.showInitClass = false;
    }, 100);
  }
};
</script>

<style lang="sass">

.hero-work
  height: 50vh 
  background-image: url("/img/bg.png");
  background-size: cover;
  background-position: center center
  transition: height 0.5s

.hero-work-init
  height: 100vh
</style>
