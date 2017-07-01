
<template lang="pug">
#FAQ
  .inner
    .title Why Should I Care?
    .qas
      .qa(v-for="answer,question of FAQ")
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
#FAQ
  > .inner
    width 1200px
    margin auto
    padding 60px 0
    > .title
      font h2
      text-align center
      padding 0 0 60px 0
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
        &:nth-child(even)
          border-left 1px solid lightgrey
          margin-left -1px
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
import copy from '../static/FAQ.json'
export default {
  data () {
    return {
      FAQ: copy.data
    }
  }
}
</script>
