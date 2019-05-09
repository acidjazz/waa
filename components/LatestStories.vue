<template lang="pug">
.latest_stories
  p(v-in-viewport) Latest Stories

  .stories(v-in-viewport)
    a.story(v-for ="item in feed.items",:href="item.link",target="_new")
      .story_image
        img(:src="item.thumbnail")
      .story_header
        .story_header_label featured
        .story_header_title {{ item.title }}
        .story_header_description(v-html="strip(item.description)")
</template>

<script>
import feed from '@/operations/feed.json'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },

  data () {
    return {
      feed: feed,
    }
  },

  methods: {
    strip (html) {
      return html.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
    }
  },

  mounted () {
    console.log(feed.items[0])
  },
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')

.latest_stories
  max-width 1100px
  margin auto
  > p
    text-align center
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

  .stories
    display flex
    flex-direction row
    justify-content center
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

    .story
      position relative
      flex-basis 100%
      margin-right 1em
      text-decoration none
      height 400px
      &:last-child
        margin-right 0em
      .story_image, .story_header
        transition height .4s ease-in-out
      .story_image
        height 400px
        overflow hidden
        img
          object-fit cover
          object-position 50% 100%
          width 100%
          height 100%
      .story_header
        position absolute
        bottom 0px
        left 0px
        right 0px
        color white
        overflow hidden
        padding 1em
        background-color robins-egg
        height 100px
        .story_header_label
          text-transform uppercase
          font c1ss
          padding-bottom 1em
        .story_header_title
          font c4
          padding-bottom 1em
        .story_header_description
          transition opacity 0.4s ease-in 0.1s, transform 0.4s ease-in 0.1s
          transform translate(0, 10px)
          opacity 0
    .story:hover
      .story_header
        height 190px
      .story_header_description
        transform translate(0, 0)
        opacity 1

</style3>
