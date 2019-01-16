<template>
  <div>
    <hero></hero>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/Hero.vue";
import loadingMixin from "VUE_PAGE/mixin/loading";


export default {
  name: "page-index",
  mixins: [loadingMixin],
  data () {
    return {
      foo: "bar"
    };
  },
  components: {
    Hero
  },
  loadableImages: [
    "https://bit.ly/2yq6794"
  ]
};
</script>
