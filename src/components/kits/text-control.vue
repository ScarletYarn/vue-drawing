<template>
  <div :class="{box: true, in: selected}">
    <img src="../../assets/letter.png" alt="!">
  </div>
</template>

<script>
  export default {
    name: "text-control",
    props: {
      selected: Boolean
    }
  }
</script>

<style scoped>
  @import "../css/kit.css";
</style>
