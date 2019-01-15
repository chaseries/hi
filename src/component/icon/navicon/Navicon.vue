<template>
  <component
    :is="component"
    :dur="dur">
  </component>
</template>

<script>
import IconStatic from "./component/Static.vue";
import IconForwards from "./component/Forwards.vue";
import IconBackwards from "./component/Backwards.vue";

export default {
  name: "component-icon-navicon-component-navicon",
  components: {
    IconStatic,
    IconForwards,
    IconBackwards
  },
  props: {
    direction: {
      required: true,
      type: String
    },
    dur: {
      required: true,
      type: Number
    }
  },
  computed: {
    component () {
      if (this.direction === "static") { return IconStatic; }
      else if (this.direction === "forwards") { return IconForwards; }
      else if (this.direction === "backwards") { return IconBackwards; }
      else { 
        const errorMsg = `Please provide a valid direction ("static", "forwards", 
        or "backwards").`;
        throw new Error(errorMsg);
      }
    }
  }
};
</script>
