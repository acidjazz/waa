<template lang="pug">
.articles.flex.flex-wrap.-mx-2
  MediumArticle.w-full.lg_w-1_3(
    v-for="item, index in feed",
    :article="item",
    :key="index",
    :index="index+1")
</template>

<script>
import MediumArticle from '@/components/articles/MediumArticle'
export default {
  components: { MediumArticle },
  props: {
    feed: {
      type: Array,
      required: true,
    }
  }
}
</script>
