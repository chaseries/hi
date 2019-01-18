<template>
  <div>
    <hero></hero>
    About page
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroElse.vue";
import loadingMixin from "VUE_PAGE/mixin/loading";


export default {
  name: "page-about",
  components: {
    Hero
  },
  mixins: [loadingMixin]
};
</script>
