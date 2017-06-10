<template lang="pug">
#Bottom
  .border.big
  .upper
    .section.navigation
      .link: router-link(to="/data") apartment data
      .link: router-link(to="/calculator") apartment calculator
      .link: router-link(to="/initiative") the initiative
    .section.signup
      .inner
        .copy Subscribe to the newsletter and we will keep you up to date.
        .input
          input(type="text",placeholder="E-mail")
          a.send(href="/")
            i.fa.fa-envelope(area-hidden=true)
        .clear
    .clear
  .clear
  .border.big
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
    > .section.navigation
      float left
      width calc(50% - 1px)
      text-align center
      > .link
        margin 5px 0 0 0 
        width 33.3333%
        display inline-block
        text-transform uppercase
        > a
          text-decoration none
          border-radiux 3px
          color darkblue
          font c1sb
          padding 10px
          &:hover
            background-color lightgrey
    > .section.signup
      border-left 2px solid lightgrey
      width calc(50% - 1px)
      float right
      > .inner
        padding 0 20px
        > .copy
          color lightblue
          width 200px
          float left
          font c1s
        > .input
          float left
          width 200px
          border 1px solid lightblue
          border-radius 3px
          padding 0 10px
          margin 0 0 0 30px
          > input
            border none
            outline none
            padding 5px
            font c1
            &::placeholder
              color lightblue
          > a > i
            color lightblue

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
