<template>
  <div>
    <hero></hero>
    I am the template for {{ title }}. <router-link to="/">Here is a link home.</router-link>
  </div>
</template>

<script>
import loadingMixin from "VUE_PAGE/mixin/loading";
import Hero from "VUE_COMPONENT/hero/HeroWork.vue";


export default {
  name: "page-works-work",
  components: {
    Hero
  },
  props: {
    slug: {
      required: true,
      type: String
    }
  },
  computed: {
    title () {
      return this.slug.charAt(0).toUpperCase() + this.slug.slice(1);
    }
  },
  mixins: [loadingMixin]
};
</script>
