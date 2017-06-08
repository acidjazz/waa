<template lang="pug">
.HeatChart
  .circle
    .carat
      i.fa.fa-2x.fa-caret-left
    .dial
      .inner {{ value }}
  .legend
    .copy Easier
    .copy Harder
    .clear

</template>

<script>
export default {
  props: ['value'],
  methods: {
    alterCarat (value) {
      for (let carat of this.carat) {
        carat.style.transform = 'rotate(' + Math.round(value * 240 / 100 - 30) + 'deg)'
      }
    }
  },
  watch: {
    'value' (newVal, oldVal) {
      this.alterCarat(newVal)
    }
  },
  mounted () {
    if (process.BROWSER_BUILD) {
      this.carat = document.querySelectorAll('.HeatChart > .circle > .carat')
      this.alterCarat(this.value)
    }
  },
  data () {
    return {
      carat: [{ style: { transform: null } }]
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')

.HeatChart
  width 200px
  margin 20px auto 10px auto
  > .circle
    width 200px
    height 200px
    background-image url('~static/heat.png')
    background-size contain
    position relative
    > .carat
      width 70px
      height 70px
      border 4px solid transparent
      position absolute
      top 50%
      left 50%
      margin-top -39px
      margin-left -39px
      border-radius 50%
      transition transform 1s ease-in-out
      transform rotate(-95deg)
      // -30  = 0, 210 = 100
      > i.fa
        color lightblue
        position absolute
        left -11px
        top 50%
        margin-top -18px
    > .dial
      width 70px
      height 70px
      border 4px solid lightblue
      border-radius 50%
      position absolute
      top 50%
      left 50%
      margin-top -39px
      margin-left -39px
      > .inner
        width inherit
        height inherit
        text-align center
        font h1
        line-height 70px
  > .legend
    width 200px
    margin auto
    > .copy:first-child
      float left
    > .copy:nth-child(2)
      float right
</style>
