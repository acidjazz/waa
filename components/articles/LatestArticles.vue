<template lang="pug">
OffsetSection
  nuxt-link.block.font-os.ml-3.mb-4(to="/articles") ARTICLES
  .block.text-3xl.ml-3.mb-6 Featured articles on
    span &nbsp;
    a.underline(href="https://medium.com/@WeAreApartments",target="_new") Medium.
  .articles.flex.flex-wrap.-mx-2
    MediumArticle(
      class="sm:w-full",
      v-for="item, index in articles",
      :article="item",
      :key="index",
      :index="index+1")
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import feed from '@/data/feed.json'
import MediumArticle from '@/components/articles/MediumArticle'
export default {
  components: { MediumArticle, OffsetSection },
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
    articles () {
      if (this.featured) return this.feed.posts.filter(p => p.id !== this.featured.id)
      if (!this.limit) return this.feed.posts
      return this.feed.posts.slice(0, this.limit)
    },
  },

}
</script>
