<template>
  <button
    @click="toggle"
    class="stripped-button">
    <icon-navicon
      :direction="direction"
      :dur="0.2"
      :fill="fill"></icon-navicon>
  </button>
</template>

<script>
import IconNavicon from "VUE_COMPONENT/icon/navicon/Navicon.vue";


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
        this.$store.commit("modal/open", "Nav.vue");
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
    },
    fill () {
      return this.$store.state.modal.open ? "black" : "white";
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
