<template>
  <div class="hero-else">
    <layout-header></layout-header>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";

export default {
  name: "component-hero-else",
  components: {
    LayoutHeader
  }
};
</script>

<style lang="sass">

.hero-else
  background-color: #111
</style>
