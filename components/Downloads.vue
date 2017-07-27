<template lang="pug">
doctype
#Downloads
  .inner
    .block.left(v-in-viewport)
      .inner
        .copy(v-in-viewport) The Report
        .copy(v-in-viewport) NMHC and NAA partnered with Hoyt Advisory Services to identify the demand for apartments through 2030. Download their analysis of the apartment industry.
        a.cta(href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf",v-in-viewport) download
    .block.right(v-in-viewport)
      .inner
        .copy(v-in-viewport) A vision for 2030
        .copy(v-in-viewport) Meeting the country's demand for apartments will take courageous steps at the federal, state and local levels. 
        router-link(to='/about',v-if="$route.name !== 'about'",v-in-viewport).cta learn more
        a.cta(href="/Vision2030.pdf",v-if="$route.name === 'about'",v-in-viewport) Download
</template>
<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
#Downloads
  background-color purple
  > .inner
    width 900px
    margin auto
    padding 60px 0
    color white
    column-count 2
    column-span 2
    column-gap 0
    > .block
      padding 60px
      break-inside avoid-column
      page-break-inside avoid
      display table
      > .inner
        > :nth-child(1)
          inViewport(0)
        > :nth-child(2)
          inViewport(0.1)
        > :nth-child(3)
          inViewport(0.2)
          display block
        > :nth-child(4)
          inViewport(0.3)
      &:nth-child(2)
        background-color royalpurple
        border-radius 3px
        transition opacity 1s ease-in-out 0s, transform 1s ease-in-out 0s
        transform scale(1.1)
        &.in-viewport
          transform scale(1)
        > .inner
          > .copy:nth-child(2)
            padding 60px 0
          > .cta
            color white
            text-transform uppercase
      &:nth-child(1)
        transition opacity 1s ease-in-out 0s, transform 1s ease-in-out 0s
        transform scale(0.9)
        &.in-viewport
          transform scale(1)
        > .inner > .cta
          background-color blue
          color white
          padding 15px 40px
          border-radius 3px
          float left
          text-transform uppercase
          font c1b
          text-decoration none
          &:hover
            transform scale(1.05)
            text-decoration underline
      > .inner
        > .copy:nth-child(1)
          font h1
        > .copy:nth-child(2)
          padding 30px 0 60px 0
          width 300px
@media all and (min-width: 1px) and (max-width: 1000px)
  #Downloads
    > .inner
      width auto
      column-count 1
      column-span 0

</style>
