<template lang="pug">
OffsetSection
  nuxt-link.block.font-os.mb-4(to="/articles") ARTICLES
  .block.text-3xl.mb-6 Latest articles on
    span &nbsp;
    a.underline(href="https://medium.com/@WeAreApartments",target="_new") Medium.
  ArticleList(:feed="feed")
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import ArticleList from '@/components/articles/ArticleList'
export default {
  components: { ArticleList, OffsetSection },
  props: {
    feed: {
      type: Array,
      required: true,
    },
  },
}
</script>
