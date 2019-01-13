<template>
  <svg
    id="navicon-forwards"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28">
    <rect
      width="26"
      height="2.5"
      x="1"
      y="9.0"
      fill="white">
      <animate
        attributeName="fill"
        to="black"
        from="white"
        :dur="dur"
        fill="freeze"/>
      <animate
        attributeName="y"
        to="12.75"
        from="9.5"
        :dur="halfDur"
        fill="freeze"/>
      <animateTransform
        attributeName="transform"
        type="rotate"
        :begin="halfDur"
        :dur="halfDur"
        from="0, 14, 14"
        to="-45, 14, 14"
        fill="freeze"/>
    </rect>
    <rect
      width="26"
      height="2.5"
      x="1"
      y="16.5"
      fill="white">
      <animate
        attributeName="fill"
        to="black"
        from="white"
        :dur="dur"
        fill="freeze"/>
      <animate
        attributeName="y"
        to="12.75"
        from="16"
        :dur="halfDur"
        fill="freeze"/>
      <animateTransform
        attributeName="transform"
        type="rotate"
        :begin="halfDur"
        :dur="halfDur"
        from="0, 14, 14"
        to="45, 14, 14"
        fill="freeze"/>
    </rect>
  </svg>
</template>

<script>


export default {
  name: "component-icon-navicon-forwards",
  props: {
    dur: {
      required: true,
      type: Number
    }
  },
  computed: {
    halfDur () {
      return this.dur / 2 + "s";
    }
  }
};
</script>
