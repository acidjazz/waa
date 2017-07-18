<template lang="pug">
doctype
#Compare
  .inner(v-in-viewport)
    .title(v-in-viewport) Compare Your City
    hr(v-in-viewport)
    .copy(v-in-viewport) Enter two cities names in order to compare them
    .inputs
      input(placeholder="City One",v-in-viewport)
      .suggest.off
        ul
          li San Francisco
          li San Francisco
          li San Francisco
      span(v-in-viewport) vs.
      input(placeholder="City Two",v-in-viewport)
      .suggest.off
        ul
          li San Francisco
          li San Francisco
          li San Francisco

    span.cta(v-in-viewport) compare
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')

delay = 0.8

#Compare
  background-color purple
  padding 60px 0
  > .inner
    width 900px
    margin auto
    background-color white
    border-radius 12px
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    text-align center
    &.in-viewport
      opacity 1
      transform scale(1)
      transition opacity 1s ease-in-out 0s, transform 1s ease-in-out 0s
      transition-timing-function  cubic-bezier(.87,-.41,.19,1.44)
    &.above-viewport, &.below-viewport
      opacity 0
      transform scale(0.95)
    > .title
      font h2
      text-align center
      padding 60px 0
      inViewport(delay + 0.05)
    > hr
      display block
      color lightgrey
      border-top 1px solid lightgrey
      border-bottom 1px solid lightgrey
      inViewport(delay + 0.1)
    > .copy
      color grey
      padding 30px 0
      inViewport(delay + 0.15)
    > .inputs
      position relative
      width 505px
      margin auto
      > .suggest
        background-color white
        top 46px
        width 220px
        position absolute
        border-left 1px solid lightgrey
        border-right 1px solid lightgrey
        border-bottom 1px solid lightgrey
        border-radius 0 0 3px 3px
        z-index 10
        onoff()
        &:nth-child(1)
          left: 0
        &:nth-child(5)
          right: 0
          
        > ul
          margin 0
          padding 0
          list-style-type none
          > li
            border-bottom 1px solid lightgrey
            text-align left
            padding 10px
            &:last-child
              border-bottom 1px solid transaprent
            &:hover
              background-color lightgrey
      > span
        display inline-block
        padding 0 20px
        inViewport(delay + 0.25)
      > input
        width 200px
        font c1
        padding 10px
        border 1px solid lightgrey
        border-radius 3px
        &:nth-child(1)
          inViewport(delay + 0.2)
        &:nth-child(4)
          inViewport(delay + 0.3)
    > .cta
      z-index 1
      cursor pointer
      display inline-block
      background-color blue
      color white
      font c1sb
      text-transform uppercase
      margin 60px 0
      padding 20px 60px
      border-radius 3px
      inViewport(delay + 0.4)


</style>
