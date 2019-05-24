<template lang="pug">
.latest_stories
  nuxt-link(v-if="link",v-in-viewport,to="/stories") Latest Stories
  p(v-else,v-in-viewport) Latest Stories

  .stories(v-in-viewport)
    Story(v-for="item, index in feed.items", :story="item",:key="index")
</template>

<script>
import feed from '@/operations/feed.json'
import inViewportDirective from 'vue-in-viewport-directive'
import Story from '@/components/stories/Story'
export default {
  components: { Story },
  directives: { 'in-viewport': inViewportDirective },
  props: {
    link: {
      type: Boolean,
      required: true,
    }
  },
  data () {
    return {
      feed: feed,
    }
  },
}
</script>
