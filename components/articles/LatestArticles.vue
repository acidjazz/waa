<template>
  <OffsetSection>
    <nuxt-link class="block font-os mb-4" to="/articles">ARTICLES</nuxt-link>
    <div class="text-xl mb-6">
      Across the country, states and localities are searching for ways to alleviate the housing affordability crisis. The following articles explore housing affordability approaches and programs from different communities nationwide.
    </div>
    <ArticleList :feed="feed" />
  </OffsetSection>
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
