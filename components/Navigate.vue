<template lang="pug">
nav#Navigate(:class="{ on: isOpen, off: !isOpen }")
  .blue
  .inner
    .button(@click="isOpen = !isOpen")
      .copy.copy_menu MENU
      .copy.copy_close CLOSE
    .content
      .menu
        .option(@click="isOpen = false"): router-link(to="/") Home
        .option(@click="isOpen = false"): router-link(to="/data") Apartment Data
        .option(@click="isOpen = false"): router-link(to="/calculator") Apartment Calculator
        .option(@click="isOpen = false"): router-link(to="/initiative") The Initiative
      .title We are Apartments
</template>

<script>
export default {
  data () {
    return { isOpen: false }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins.styl'
#Navigate
  position absolute
  top 0
  right 0
  overflow hidden
  z-index 10
  &.on
    width 100vw
    height 100vh
    > .blue
      transform scale(30)
      transition transform 0.5s ease-in-out 0s
    > .inner > .button
      background-color white
      color #4da1ff
      > .copy.copy_menu
        display none
    > .inner > .content
      opacity 1
      transition opacity 0.1s ease-in-out 0.3s
  &.off
    width 100px
    height 100px
    transition width 0s linear 0.6s, height 0s linear 0.6s
    > .blue
      transform scale(1)
      transition transform 0.3s ease-in-out 0s
    > .inner > .button
      background-color #4da1ff
      color white
      > .copy.copy_close
        display none
    > .inner > .content
      opacity 0
      transition opacity 0.1s ease-in-out 0.1s

  > .blue
    position absolute
    background-color #4da1ff
    width 100px
    height 100px
    top 0
    right 0
    top 0px
    right 0px
    border-radius 50%
  > .inner
    position absolute
    top 0
    right 0
    width 100vw
    height 100vh
    > .button
      width 100px
      height 100px
      position absolute
      cursor pointer
      top 0
      right 0
      text-align center
      line-height 100px
      border-radius 50%
      transition background-color 0.2s ease-in-out 0.2s
      user-select none
      > .copy:hover
        text-decoration underline
    > .content
      > .title
        color white
      > .menu
        float right
        margin 120px 60px 0 0
        font-size 40px
        > .option 
          text-align right
          > a
            padding 0 20px
            color white
            transition background-color 0.1s linear 0s
            font-family 'Maven Pro'
            &.router-link-exact-active
              background-color #323c47

</style>
