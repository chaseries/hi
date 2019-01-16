<template>
  <div class="subheader">
    <h1 class="subheader__heading">{{ heading }}</h1>
    <p class="subheader__body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "component-subheader-subheader",
  props: {
    heading: {
      required: true,
      type: String
    },
    body: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="sass">

.subheader
  position: relative
  width: 100%
  max-width: 400px 
  left: 50%
  transform: translateX(-50%)
  &__heading
    font-size: 1rem
    font-weight: medium
  &__body
    font-size: 1rem
</style>
