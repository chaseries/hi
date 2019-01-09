<template>
  <div id="app">
    <div>
      <div v-if="!hasTrans">
        The trans type is {{ transType }}.
        <br>
        Should it be playing? {{ isPlaying }}
      </div>
      <div v-else>
        There is no transition set.
      </div>
    </div>


    <layout-header></layout-header>

    <router-view></router-view>
    <!-- <div v-if="hasTrans"> -->
      <!-- <transition :duration="500" mode="out-in"> -->
        <!-- <router-view></router-view> -->
      <!-- </transition> -->
    <!-- </div> -->

    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";
import LayoutFooter from "VUE_COMPONENT/layout/footer/LayoutFooter.vue";
import TransDefaul from "VUE_COMPONENT/trans/default/Main.vue";

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutFooter
  },
  computed: {
    transType () {
      return this.$store.getters["trans/currentTrans"] || "null";
    },
    hasTrans () {
      return this.$store.getters["trans/hasTrans"];
    },
    isPlaying () {
      return this.$store.state.trans.play;
    }
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
