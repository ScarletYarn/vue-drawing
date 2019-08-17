<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="item"
      class="hiding"
      :style="control[index]"
      @click="change(index)"
    >
      <div class="thick" :style="`width: ${item}px; height: ${item}px;`"></div>
    </div>
    <div class="box" @click="handleClick">
      <div
        class="thick"
        :style="`width: ${thickness}px; height: ${thickness}px`"
      ></div>
    </div>
    <div class="holder"></div>
  </div>
</template>

<script>
  export default {
    name: 'thickness',
    data () {
      return {
        thickness: 1,
        list: [
          1, 2, 5, 10, 15
        ],
        expanded: false,
        control: [{}, {}, {}, {}, {}]
      }
    },
    methods: {
      handleClick () {
        this.expanded = !this.expanded
        for (let i = 0; i < this.control.length; i++) {
          if (this.expanded) {
            this.$set(this.control, i.toString(), {
              transform: `translateY(${(i + 1) * 100}%)`
            })
          } else {
            this.$set(this.control, i.toString(), { transform: '' })
          }
        }
      },
      change (index) {
        this.handleClick()
        this.thickness = this.list[index]
        this.$emit('thick-change', this.list[index])
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .box {
    border: #e8e8e8e8 solid 1px;
    border-radius: .5em;
    background: #fff;
    width: 2.5em;
    height: 2.5em;
    position: absolute;
    cursor: pointer;
    transition: .5s;
    box-sizing: border-box;
    z-index: 2;
  }

  .box:hover {
    border: rgba(52, 214, 232, 0.91) solid 1px;
  }

  .hiding {
    border: #e8e8e8e8 solid 1px;
    border-radius: .5em;
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    background: #fff;
    cursor: pointer;
    z-index: 1;
    transition: .6s;
  }

  .hiding:hover {
    border: rgba(52, 214, 232, 0.91) solid 1px;
  }

  .thick {
    background: gray;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    margin: 0 auto;
  }

  .holder {
    position: relative;
    width: 2.5em;
    height: 2.5em;
  }
</style>
