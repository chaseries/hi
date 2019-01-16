<template>
  <div id="app">
    <modal></modal>
    <trans-default></trans-default>
    <trans-init></trans-init>
    <transition :duration="transDuration" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import * as settings from "./settings";
import TransDefault from "VUE_COMPONENT/trans/default/Main.vue";
import TransInit from "VUE_COMPONENT/trans/init/Main.vue";
import Modal from "VUE_COMPONENT/modal/Modal.vue";

export default {
  name: "app",
  components: {
    TransDefault,
    TransInit,
    Modal
  },
  computed: {
    transDuration () {
      return 1000;
    }
  },
  created () {
    this.$store.commit("trans/initialize", settings.transSettings);
    this.$store.commit("carousel/initialize", settings.carouselSettings);
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
