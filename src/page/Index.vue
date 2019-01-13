<template>
  <div>
    <hero></hero>
    Home page
    <div v-for="postNo in [1,2,3,4,5]" :key="postNo">
      <router-link :to="'/post/' + postNo">Post {{ postNo }}</router-link>
    </div>
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
    //"https://bit.ly/2yq6794"
  ]
};
</script>
