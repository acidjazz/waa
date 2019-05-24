<template lang="pug">
doctype
.page.stories-page
  Top(type="dark")
  .hero(v-in-viewport)
    .copy In communities across the country, apartments open doors.  Read about the challenges, solutions and people working to make apartments available and affordable.
  ScrollDown
  DiagSection
  .section.section-featured-article
    h1(v-in-viewport) Featured Article
    .stories(v-in-viewport)
      Story.story_featured(:story="featured")
  .section.section-latest-stories
    LatestStories(:link="false",:limit="false")
  Downloads
  Bottom
</template>


<script>
import Top from '~/components/Top.vue'
import LatestStories from '@/components/stories/LatestStories'
import Story from '@/components/stories/Story'
import ScrollDown from '~/components/ScrollDown.vue'
import DiagSection from '~/components/DiagSection.vue'
import inViewportDirective from 'vue-in-viewport-directive'
import feed from '@/operations/feed.json'
import Bottom from '~/components/Bottom.vue'
import Downloads from '~/components/Downloads.vue'
export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { Top, ScrollDown, DiagSection, LatestStories, Story, Bottom, Downloads },
  data () {
    return {
      feed: feed,
      featured: feed.payload.posts[0],
    }
  },
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')
.page.stories-page
  > .hero
    width 100vw
    height 100vh
    background-image url(/doors.jpg)
    &.in-viewport > .copy
      opacity 1
      transform translate(-50%, -50%)
      transition opacity 1s ease 0.1s, transform 1s ease 0.1s
    > .copy
      top 50%
      left 50%
      font h2
      color white
      width 870px
      text-align center
      position absolute
      opacity 0
      transform translate(-50%, -40%)
  .section.section-featured-article
    max-width 1100px
    margin 120px auto
    h1
      font h2
      text-align center
  .section.section-latest-stories
    margin 120px auto
@media all and (min-width: 1px) and (max-width: 1000px)
  .page.stories-page > .hero > .copy
    width 90vw
    font c4
  .section.section-featured-article
    h1
      font h1 !important
</style>

