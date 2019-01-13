<template>
  <div @click="toggle">
    <icon-navicon :direction="direction" :dur="0.2"></icon-navicon>
  </div>
</template>

<script>
import IconNavicon from "VUE_COMPONENT/icon/navicon/Navicon.vue";
import Nav from "VUE_COMPONENT/modal/component/Nav.vue";


export default {
  name: "component-button-navicon",
  components: {
    IconNavicon
  },
  data () {
    return {
      direction: "static"
    };
  },
  methods: {
    toggle () {
      if (!this.modalOpen) {
        this.$store.commit("modal/open", Nav);
        console.log("The modal state is", this.$store.state.modal);
      } else {
        this.$store.commit("modal/close");
      }
    }
  },
  computed: {
    modalOpen () {
      return this.$store.state.modal.open;
    },
    modalComponent () {
      return this.$store.state.modal.component;
    },
    modalComponentIsNav () {
      return this.$store.state.modal.component === "Nav";
    }
  },
  watch: {
    modalOpen (isOpen) {
      if (isOpen) {
        this.direction = "forwards";
      } else {
        this.direction = "backwards";
      }
    }
  }
};
</script>
