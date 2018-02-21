<template lang="pug">
#Bottom
  .upper(v-if="upper")
    .section.navigation
      .link: router-link(to="/data") apartment data
      .link: router-link(to="/calculator") apartment calculator
      .link: router-link(to="/about") the initiative
      .link: router-link(to="/vision") our vision
    .section.signup
      .inner
        .copy Subscribe to the newsletter and we will keep you up to date.

        .input
          form(
            action="//weareapartments.us16.list-manage.com/subscribe/post?u=b5b3c7cd44e8ec9c9b1c2e7c4&amp;id=5cb9d4e7ac",
            method="post",
            id="mc-embedded-subscribe-form",
            name="mc-embedded-subscribe-form",
            target="_blank"
            )
            input#mce-EMAIL(type="email",placeholder="E-mail",name="EMAIL")
            a.send(href="/",onclick="document.forms['mc-embedded-subscribe-form'].submit(); return false;")
              i.fa.fa-envelope(area-hidden=true)
        .clear
    .clear
  .sources
    .inner Source: 
      span 
        a(href="http://hoytgroup.org/hoyt-advisory-services/",target="_new") Hoyt Advisory Services
        span ;&nbsp; 
        a(href="http://www.nmhc.org/",target="_new") NMHC
        span /
        a(href="http://www.naahq.org",target="_new") NAA
        span ;&nbsp;
        a(href="https://www.census.gov/",target="_new") U.S. Census Bureau
        span ;&nbsp;
        a(href="https://www.axiometrics.com/",target="_new") Axiometrics
        span ,&nbsp;a 
        a(href="https://www.realpage.com/",target="_new") RealPage Company
  .lower(:class="{dark: dark}")
    .inner
      .section.title
        router-link.copy(to="/") We Are Apartments
        .copy In communities across the country, apartments work -- helping people live in a home that’s right for them. 
      .section.logos
        a.logo.logo-nmhc(href="http://www.nmhc.org/",target="_new")
        a.logo.logo-naa(href="https://www.naahq.org/",target="_new")
      .clear
</template>

<script>
export default {
  props: {
    upper: {
      type: Boolean,
      required: false,
      default: true,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>

<style lang="stylus">

json('../assets/colors.json')
json('../assets/fonts.json')

.sources
  font c1s
  padding 20px
  margin auto
  color grey
  background-color lightgrey
  a
    color grey
    text-decoration none
    &:hover
      text-decoration underline
  .inner
    max-width 1200px
    margin auto

#Bottom
  > .upper
    padding 60px 0
    width 1200px
    margin auto
    > .section.navigation
      float left
      width calc(50% - 8px)
      text-align center
      display flex
      margin 0 7px 0 0
      flex-direction row
      > .link
        text-transform uppercase
        flex-grow 1
        > a
          display block
          text-decoration none
          border-radiux 3px
          color darkblue
          font c1ssb
          padding 10px 0px
          transition background 0.2s ease
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
          width 220px
          float left
          font c1s
        > .input
          float left
          width 200px
          border 1px solid lightblue
          border-radius 3px
          padding 0 10px
          margin 0 0 0 30px
          > form
            padding 0
            margin 0
            > input
              border none
              outline none
              padding 5px
              width 170px
              font c1
              &::placeholder
                color lightblue
            > a > i
              color lightblue
              padding 10px 0 0 0

  > .lower
    background-color darkgray
    padding 60px 0
    &.dark
      background-color black
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
            color white
            padding 10px 0 0 0
        &.logos
          float right
          margin 40px 0 0 0
          > .logo
            float right
            background-size contain
            &.logo-naa
              background-image url('~static/icon-naa.png')
              width 143px
              height 61px
              margin 0 20px 0 0
            &.logo-nmhc
              background-image url('~static/icon-nmhc.png')
              width 246px
              height 51px

@import '../assets/stylus/bottom-mobile.styl'

</style>
