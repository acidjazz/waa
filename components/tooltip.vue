<template lang="pug">
.tooltip
  .inner
    .button(@click="toggle()")
      .icon: i.fa.fa-lg.fa-question
    .tip(:class="{on: on, off: !on }",v-on-clickaway="away")
      .chevron
      .inner
        .title this graph
        .copy text here to filter data.
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  methods: {
    away ()  {
      this.on = false
    },
    toggle () {
      setTimeout(() => {
        this.on = !this.on
      }, 20)
    },
  },
  data () {
    return {
      on: false
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
.tooltip
  position absolute
  top 28px
  right 0px
  .inner
    position relative
    > .button
      cursor pointer
      width 20px
      height 20px
      border 2px solid transparent
      border-radius 3px
      transition border 0.2s ease
      &:hover
        border 2px solid blue
      > .icon
        color blue
        line-height 18px
        text-align center
    > .tip
      position absolute
      width 180px
      left -78px
      animation shrinkIn 0.2s ease-in-out 0s
      onoff()
      > .chevron
        top 0px
        border-bottom 13px solid purple
      > .inner
        border-radius 6px
        width inherit
        margin 10px 0 0 0
        background-color white
        overflow hidden
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        > .title
          text-align center
          background-color purple
          color white
          padding 10px 0
          font c1ss
          text-transform uppercase
        > .copy
          color grey
          text-align center
          padding 30px 20px
</style>
