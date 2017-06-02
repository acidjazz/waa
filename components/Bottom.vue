<template lang="pug">
#Bottom
  .upper
    .section.copyright &copy; 2017 All Rightgs Reserved
    .section.signup
      .inner
        .input
          input(type="text",placeholder="Enter your email here")
        a.send(href="/")
          i.fa.fa-paper-plane(area-hidden=true)
          .copy Send
        .clear
    .section.socials
      .social
        a.fa.fa-facebook(href="/")
        a.fa.fa-twitter(href="/")
        a.fa.fa-linkedin(href="/")
    .clear
  .lower
    .inner
      .section.title
        router-link.copy(to="/") We Are Apartments
        .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
      .section.logos
        a.logo.logo-nmhc(href="/")
        a.logo.logo-naa(href="/")
      .clear
</template>

<style lang="stylus">

json('../assets/colors.json')
json('../assets/fonts.json')

#Bottom
  > .upper
    padding 60px 0
    width 1200px
    margin auto
    > .section
      float left
      width 400px
      &.copyright
        color grey
      &.signup
        > .inner
          width 300px
          margin auto
          border-bottom 1px solid grey
          > .input
            float left
            > input
              font c1
              width 220px
              padding 5px 0
              border none
              outline none

          > .send
            float right
            padding 3px 5px
            color blue
            transition background-color 0.1s ease-in-out 0s, color 0.1s ease-in-out 0.05s
            &:hover
              border-radius 3px
              background-color blue
              color white
            > i
              float left
              margin 5px 0 0 0
            > .copy
              float left
              margin 0 0 0 10px
      &.socials
        > .social
          text-align center
          > a
            display inlne-block
            margin 0 5px
            padding 5px
            width 20px
            color grey
            text-decoration none
            transition background-color 0.1s ease-in-out 0s, color 0.1s ease-in-out 0.05s
            &:hover
              border-radius 3px
              background-color blue
              color white
  > .lower
    background-color darkblue
    padding 60px 0
    > .inner
      width 1200px
      margin auto
      > .section
        float left
        width 500px
        &.title
          > .copy:first-child
            color white
            font h2
            text-decoration none
          > .copy:nth-child(2)
            color grey
            padding 10px 0 0 0
        &.logos
          float right
          margin 40px 0 0 0
          > .logo
            float right
            background-size contain
            &.logo-naa
              background-image url('~static/logo-naa.png')
              width 143px
              height 61px
              margin 0 20px 0 0
            &.logo-nmhc
              background-image url('~static/logo-nmhc.png')
              width 246px
              height 51px
</style>
