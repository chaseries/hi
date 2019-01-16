<template>
  <div>I am the template for {{ title }}.</div>
</template>

<script>
import loadingMixin from "VUE_PAGE/mixin/loading";


export default {
  name: "page-works-work",
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
