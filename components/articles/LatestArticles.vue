<template lang="pug">
OffsetSection
  nuxt-link.block.font-os.mb-4(to="/articles") ARTICLES
  .text-xl.mb-6 Across the country, states and localities are searching for ways to alleviate the housing affordability crisis. The following articles explore housing affordability approaches and programs from different communities nationwide.
  //.block.text-3xl.mb-6 Latest articles on
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
