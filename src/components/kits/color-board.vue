<template>
  <div class="board">
    <div class="current" :style="`background: ${colors[current]}`"></div>
    <div class="bar">
      <div
        class="cell"
        v-for="(item, index) in colorsFirstHalf"
        :key="index"
        :style="`background: ${item}`"
        @click="change(index)"
      ></div>
    </div>
    <div class="bar">
      <div
        class="cell"
        v-for="(item, index) in colorsSecondHalf"
        :key="index"
        :style="`background: ${item}`"
        @click="change(index + 4)"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'color-board',
    data () {
      return {
        colors: [
          '#000000',
          '#2f2f2f',
          '#ff0000',
          '#00ff00',
          '#0000ff',
          '#ffff00',
          '#ff00ff',
          '#00ffff'
        ],
        current: 0
      }
    },
    computed: {
      colorsFirstHalf () {
        return this.colors.slice(0, this.colors.length / 2)
      },
      colorsSecondHalf () {
        return this.colors.slice(this.colors.length / 2)
      }
    },
    methods: {
      change (index) {
        this.current = index
        this.$emit('color-selected', this.colors[index])
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .board {
    border: #e8e8e8e8 solid .05em;
    border-radius: .2em;
    height: 2.5em;
    position: relative;
    padding: .2em;

    .current {
      width: 2em;
      height: 2em;
      position: absolute;
      top: 50%;
      left: .3em;
      transform: translateY(-50%);
    }

    .bar {
      position: relative;
      left: 2.5em;
      height: 1em;
      width: 6.7em;
      margin: 0;
      padding: .1em;
    }
  }

  .cell {
    width: .8em;
    height: .8em;
    float: left;
    margin-left: .2em;
  }

  .cell:hover {
    cursor: pointer;
  }
</style>
