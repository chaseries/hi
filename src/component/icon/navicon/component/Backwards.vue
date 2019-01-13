<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28">
    <rect
      width="26"
      height="2.5"
      x="1"
      y="12.75"
      transform="rotate(-45, 14, 14)"
      fill="black">
      <animate
        attributeName="fill"
        from="black"
        to="white"
        :dur="dur"
        fill="freeze"/>
      <animate
        attributeName="y"
        from="12.75"
        to="9.0"
        :dur="halfDur"
        :begin="halfDur"
        fill="freeze"/>
      <animateTransform
        attributeName="transform"
        type="rotate"
        :begin="0"
        :dur="halfDur"
        to="0, 14, 14"
        from="-45, 14, 14"
        fill="freeze"/>
    </rect>
    <rect
      width="26"
      height="2.5"
      x="1"
      y="12.75"
      fill="black"
      transform="rotate(45, 14, 14)">
      <animate
        attributeName="fill"
        from="black"
        to="white"
        :dur="dur"
        fill="freeze"/>
      <animate
        attributeName="y"
        from="12.75"
        to="16.5"
        :begin="halfDur"
        :dur="halfDur"
        fill="freeze"/>
      <animateTransform
        attributeName="transform"
        type="rotate"
        :begin="0"
        :dur="halfDur"
        to="0, 14, 14"
        from="45, 14, 14"
        fill="freeze"/>
    </rect>
  </svg>
</template>

<script>


export default {
  name: "component-icon-navicon-backwards",
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
