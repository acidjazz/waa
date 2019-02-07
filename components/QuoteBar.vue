<template lang="pug">
doctype
#QuoteBar
  .body
    .shadow
    .quote(:class="{oranges: theme === 'oranges', blues: theme === 'blues'}")
      .copy(v-in-viewport) Apartments and their residents contribute more than $3.5 billion to the economy every day.
      // .author(v-in-viewport) Steve Fegun | Laika Founder
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
#QuoteBar
  padding 60px 0 120px 0
  > .body
    position relative
    margin auto
    width 640px
    height 240px
    border-radius 3px
    > .quote, > .shadow
      position absolute
      width 100%
      height 100%
    > .quote
      &.oranges
        background-image linear-gradient(162deg, tacao, violet-red)
      &.blues
        background-image linear-gradient(162deg, purple, blue)
      color white
      text-align center
      > .copy
        font c3b
        line-height 30px
        padding 90px 60px 30px 60px
        inViewport(0)
      > .author
        padding 0 0 40px 0
        color lightgrey
        inViewport(0.1)
      font c1s
    > .shadow
      background-image linear-gradient(-45deg, transparent 46%, darkgray 49%, darkgray 51%, transparent 55%)
      background-size 8px 8px
      position absolute
      top 40px
      left -40px
      width 100%
      height 100%
@media all and (min-width: 1px) and (max-width: 1000px)
  #QuoteBar
    padding 60px 20px
    > .body
      width auto
      margin auto
      height 300px
      > .shadow
        top 10px
        left -10px

</style>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  props: {
    theme: {
      type: String,
      default: 'oranges',
      required: false,
    }
  },
  directives: { 'in-viewport': inViewportDirective },
}
</script>
