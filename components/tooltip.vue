<template lang="pug">
.tooltip
  .inner
    .button(@click="toggle()")
      .icon: i.fa.fa-lg.fa-question
    .tip(@click="toggle()",:class="{on: on, off: !on, center: align === 'center', left: align === 'left' }",v-on-clickaway="away")
      .chevron
      .inner
        .title {{ copys[copy].title }}
        .copy {{ copys[copy].copy }}
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  props:  {
    copy: {
      type: String,
      default: 'a',
    },
    align: {
      type: String,
      default: 'center',
    },
    start: {
      default: false,
    },
    timeout: {
      type: Number,
      default: 30,
    },
  },
  mixins: [ clickaway ],
  methods: {
    away ()  {
      this.on = false
    },
    toggle () {
      let before = this.on
      setTimeout(() => {
        this.on = !before
      }, 20)
    },
  },
  mounted () {

    const Cookies = window.Cookies

    if (this.start !== false && Cookies.get('tooltipStart') === undefined) {
      this.on = true
      Cookies.set('tooltipStart', true, { expires: new Date(new Date().getTime() + 15 * 60 * 1000) })
    }

  },
  data () {
    return {
      on: false,
      copys: {
        a: {
          title: 'Chart Info',
          copy: 'Percent Change, 2016-2030',
        },
        b: {
          title: 'Filters',
          copy: 'Apartment industry data for different geographies.',
        }
      }
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
  top 10px
  right 10px
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
        line-height 18px
        text-align center
    > .tip
      position absolute
      width 180px
      left -78px
      animation shrinkIn 0.2s ease-in-out 0s
      &.left
        > .inner
          margin-left -70px
      onoff()
      z-index 30
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
