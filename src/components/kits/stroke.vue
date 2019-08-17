<template>
  <div :class="{box: true, in: selected}">
    <img src="../../assets/stroke.png" alt="!">
  </div>
</template>

<script>
  export default {
    name: 'stroke',
    props: {
      selected: Boolean
    }
  }
</script>

<style scoped>
  @import "../css/kit.css";
</style>
