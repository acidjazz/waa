<template lang="pug">
#fourOfour
  .inner
    .block
      .title we are apartments
      .copy The page you are looking for cannot be found.
      router-link(to="/").cta
        .copy go home
        .strip
</template>

<script>
export default {
  name: 'nuxt-error',
  props: ['error'],
  head () {
    return {
      title: this.error.message || 'An error occured'
    }
  }
}
</script>

<style scoped lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins'
#fourOfour
  width 100vw
  height 100vh
  background url(/balconies.png)
  background-repeat no-repeat
  background-size contain
  > .inner
    width inherit
    height inherit
    background linear-gradient(-67deg, rgba(light-crimson, 0.8), rgba(tacao, 0.8))
    color white
    text-align center
    .block
      absMiddle(500, 240)
      > .title
        font c1s
        text-transform uppercase
        padding 0 0 30px 0
        animation inFromTop 0.6s ease 0s both
      > .copy
        padding 0 0 60px 0
        font h2
        animation inFromTop 0.6s ease 0.1s both
      > .cta
        font c1s
        padding 10px 60px
        text-transform uppercase
        background-color rgba(white, 0.1)
        border 1px solid rgba(white, 0.3)
        border-radius 3px
        display inline-block
        color white
        text-decoration none
        position relative
        overflow hidden
        animation inFromTop 0.6s ease 0.2s both
        transition background-color 0.5s ease 0s
        &:hover
          background-color rgba(white, 0.4)
@media all and (min-width: 1px) and (max-width: 1000px)
  #fourOfour
    color blue
    > .inner
      > .block
        absMiddle(300, 200)
        > .copy
          font h1
          line-height 30px
</style>
