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
import index from '../static/Metro Restriction Index.json'
export default {
  props: ['metro'],
  methods: {
    alterCarat (value) {
      this.value = window.numeral(value).format('0.0')
      for (let carat of this.carat) {
        let perc = (value - -5.9) / (19.9 - -5.9)
        carat.style.transform = 'rotate(' + Math.round((perc * 100) * 240 / 100 - 30) + 'deg)'
      }
    },
    populate () {
      if (process.BROWSER_BUILD) {
        this.carat = this.$el.querySelectorAll('.HeatChart > .circle > .carat')
        this.alterCarat(index.data[this.metro])
      }
    }
  },
  watch: {
    'value' (newVal, oldVal) {
      this.alterCarat(newVal)
    },
    '$route' () {
      this.populate()
    }
  },
  mounted () {
    this.populate()
  },
  data () {
    return {
      carat: [{ style: { transform: null } }],
      value: 0
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
        animation fadeIn 0.2s ease-in-out 0
        width inherit
        height inherit
        text-align center
        font h1
        line-height 70px
  > .legend
    width 200px
    margin -50px auto 0 auto

    > .copy:first-child
      float left
    > .copy:nth-child(2)
      float right
</style>
