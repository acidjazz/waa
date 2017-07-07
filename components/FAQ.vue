<template lang="pug">
doctype
#FAQ
  .inner
    .title(v-in-viewport) Why Should I Care?

    .qas
      .qa(v-for="answer,question of FAQ",v-in-viewport='{ bottom: -200 }')
        .inner
          .question
            .letter Q
            .copy {{ question }}
          .answer
            .letter A
            .copy: i {{ answer }}
      .clear
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
#FAQ
  > .inner
    width 1200px
    margin auto
    padding 60px 0
    > .title
      font h2
      text-align center
      padding 0 0 60px 0
      inViewport(0)
    > .qas
      > .qa
        float left
        width calc(50% - 1px)
        height 275px
        border-bottom 1px solid lightgrey
        overflow hidden
        &:nth-child(odd)
          clear both
          border-right 1px solid lightgrey
          inViewport(0.1)
        &:nth-child(even)
          border-left 1px solid lightgrey
          margin-left -1px
          inViewport(0.2)
        &:nth-child(1), &:nth-child(2)
          height 320px
        &:nth-child(3), &:nth-child(4)
          height 240px 
        &:nth-child(5), &:nth-child(6)
          height 300px 
        &:nth-last-child(-n+3)
          border-bottom none
        > .inner
          padding 30px
          > .question, > .answer
            > .letter
              font c3b
              float left
            > .copy
              margin 0 0 0 30px
          > .question
            padding 0 0 20px 0
            > .letter
              color red
            > .copy
              font c3b
              letter-spacing -1px
          > .answer
            > .letter
              color green
            > .copy
              color grey
@import '../assets/stylus/faq-mobile.styl'
</style>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
import copy from '../static/FAQ.json'
export default {
  directives: { 'in-viewport': inViewportDirective },
  data () {
    return {
      FAQ: copy.data
    }
  }
}
</script>
