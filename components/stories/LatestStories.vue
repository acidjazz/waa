<template lang="pug">
.latest_stories.m-auto
  nuxt-link.block.text-center.text-3xl.my-10(to="/stories") Latest Stories
  .stories.flex.items-center.justify-center.flex-wrap.mb-4
    Story(v-for="item, index in stories", :story="item",:key="index",:index="index+1")
</template>

<script>
import feed from '@/data/feed.json'
import Story from '@/components/stories/Story'
export default {
  components: { Story },
  props: {
    limit: {
      type: [Boolean, Number],
      required: true,
    },
    featured: {
      type: [Boolean, Object],
      required: false,
      default: false,
    },
  },
  data () {
    return {
      feed: feed.payload,
    }
  },
  computed: {
    stories () {
      if (this.featured) return this.feed.posts.filter(p => p.id !== this.featured.id)
      if (!this.limit) return this.feed.posts
      return this.feed.posts.slice(0, this.limit)
    },
  },

}
</script>
