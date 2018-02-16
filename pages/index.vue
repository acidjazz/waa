<template lang="pug">
doctype
.page.home 
  Top(type="dark")
  .hero(v-in-viewport)
    video(playsinline,autoplay,muted,loop)
      source(src="/condos.mp4",type="video/mp4")
    .outer
    .inner
      .copy(v-in-viewport) welcome to we are apartments.
      .copy(v-in-viewport) The country needs 
        i-count-up(:start="0",:end="4.6",:decimals="1",:duration="3")
        | m new apartments by 2030. How many are needed near you?
      .button.is-centered(v-in-viewport)
        router-link(to="/vision") our vision
      .button.is-centered(v-in-viewport)
        router-link(to="/data") the data
  ScrollDown
  DiagSection
  .demand
    p(v-in-viewport) The 2030 Demand
    Demand(type='national')
  VertBorder
  GradientChart
  .border.big
  .to_initiative
    .inner
      .section.section_left
        .title(v-in-viewport) Our Initiative
        .subtitle(v-in-viewport) growing apartment demand
        .copy(v-in-viewport) Delayed marriages, an aging population and immigration are increasing a pressing need for new apartments, to the tune of 4.6 million by 2030.
        router-link.cta(to="/about",v-in-viewport) learn more
      .section.section_right
        .images
          .building(v-in-viewport)
          .frame(v-in-viewport)
            .building(v-in-viewport)
      .clear
  Downloads
  Bottom
</template>

<script>
import Top from '~/components/Top.vue'
import Demand from '~/components/Demand.vue'
import GradientChart from '~/components/GradientChart.vue'
import Bottom from '~/components/Bottom.vue'
import inViewportDirective from 'vue-in-viewport-directive'
import ICountUp from 'vue-countup-v2'
import Downloads from '~/components/Downloads.vue'
import DiagSection from '~/components/DiagSection.vue'
import VertBorder from '~/components/VertBorder.vue'
import ScrollDown from '~/components/ScrollDown.vue'
export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { Top, Demand, GradientChart, Bottom, ICountUp, Downloads, DiagSection, VertBorder, ScrollDown },
  data () {
    return {
      options: {
        decimals: 4
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')

.page.home
  > .to_initiative
    padding 90px 0
    > .inner
      width 1100px
      margin auto
      > .section.section_left
        float left
        width 300px
        margin 120px 0 0 0
        > .title
          font h2
          width 100px
          line-height 60px
          inViewport(0.1)
        > .subtitle
          font c1b
          text-transform uppercase
          padding 20px 0
          inViewport(0.2)
        > .copy
          color grey
          inViewport(0.3)
        > .cta
          display inline-block
          inViewport(0.4)
          background-color blue
          color white
          border-radius 3px
          padding 10px 40px
          text-decoration none
          text-transform uppercase
          font c1sb
          margin 90px 0 0 0
      > .section.section_right
        float right
        > .images
          position relative
          > .building
            background url(/building2.png)
            width 674px
            height 417px
            inViewport(0.1)
          > .frame
            width 300px
            height 293px
            background-color white
            padding 20px 0 0 20px
            margin -100px 0 0 80px
            inViewport(0.3)
            > .building
              background url(/building1.png)
              width 300px
              height 293px
              margin 20px 0 0 20px
              transition opacity 1s ease-in-out 0.5s, transform 1s ease-in-out 0.5s
              &.in-viewport
                opacity 1
                transform translate(0, 0)
              &.above-viewport, &.below-viewport
                opacity 0
                transform translate(-40px, -40px)

  > .hero
    color white
    height 100vh
    width 100%
    text-align center
    overflow hidden
    position relative
    z-index 5
    > video
      position absolute
      min-width 100%
      min-height 100%
      top 50%
      left 50%
      width auto
      height auto
      transform translate(-50%, -50%)
    > .outer
      position absolute
      background linear-gradient(-67deg, rgba(#0099ff, 0.7), rgba(#00cccc, 0.7))
      height 100vh
      fullsize()
    > .inner
      h = 270
      width 100%
      height unit(h, px)
      position absolute
      top 50%
      margin-top - unit(h / 2, px)

      > .copy:first-child
        text-transform uppercase
        opacity 0
        transform translate(0, -20px)
        &.in-viewport
          opacity 1
          transform translate(0, 0)
          transition opacity 1s ease 0.1s, transform 1s ease 0.1s

      > .copy:nth-child(2)
        font h2
        width 800px
        margin 60px auto
        line-height 50px
        opacity 0
        transform translate(0, -20px)
        &.in-viewport
          opacity 1
          transform translate(0, 0)
          transition opacity 1s ease 0.2s, transform 1s ease 0.2s
      > .button
        > a
          text-transform uppercase
          padding 15px 40px
          transition background-color 0.5s ease 0s, transform 0.2s ease 0s
          &:hover
            transform scale(1.05)
        &:nth-child(3) > a
          color white
          font c1sb
          margin 0 20px 0 0
          background-color rgba(cyan, 0.2) 
          border 1px solid rgba(cyan, 0.6)
          &:hover
            background-color rgba(cyan, 1) 
        &:nth-child(4) > a
          background-color white
          color darkblue
          font c1sb
      > .button:nth-child(3)
        opacity 0
        transform translate(-20px, 0)
        &.in-viewport
          opacity 1
          transform translate(0, 0)
          transition opacity 1s ease 0.3s, transform 1s ease 0.3s
      > .button:nth-child(4)
          opacity 0
          transform translate(20px, 0)
          &.in-viewport
            opacity 1
            transform translate(0, 0)
            transition opacity 1s ease 0.4s, transform 1s ease 0.4s
  .demand
    text-align center
    width 540px
    margin auto
    padding 60px 0
    > p:first-child
      font h2
      &.above-viewport
        opacity 0
        transform translate(0, -20px)
      &.below-viewport
        opacity 0
        transform translate(0, 20px)
      &.in-viewport
        opacity 1
        transform translate(0, 0)
        transition opacity 1s ease-in-out 0s, transform 1s ease-in-out 0s
    > p:last-child
      color grey
      &.above-viewport
        opacity 0
        transform translate(0, -20px)
      &.below-viewport
        opacity 0
        transform translate(0, 20px)
      &.in-viewport
        opacity 1
        transform translate(0, 0)
        transition opacity 1s ease-in-out 0.1s, transform 1s ease-in-out 0.1s

      > span > span
        font-weight bold
        color black
    border-bottom 2px solid lightgrey
@media all and (min-width: 1px) and (max-width: 1000px)
  .sources
    width auto
    padding 20px
    font c1ss
  .page.home
    > .to_initiative
      padding 30px 0
      > .inner
        width auto
        padding 20px
        > .section.section_left
          float none
          width auto
          margin auto
          > .cta
            margin 30px 0
        > .section.section_right
          display none
    > .hero
      > .inner
        > .copy:nth-child(2)
          font h1
          width auto
        > .button
          margin auto
          &:nth-child(3)
            margin-right 10px
          &:nth-child(4)
            margin-left 10px
          > a
            margin 0 !important
            padding 10px 20px
    > .demand
      width auto
      padding 60px 10px
</style>

