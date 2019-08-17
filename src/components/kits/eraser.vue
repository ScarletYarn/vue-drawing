<template>
  <div :class="{box: true, in: selected}">
    <img src="../../assets/eraser.png" alt="!">
  </div>
</template>

<script>
  export default {
    name: 'eraser',
    props: {
      selected: Boolean
    }
  }
</script>

<style scoped>
  @import "../css/kit.css";
</style>
