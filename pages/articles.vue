<template lang="pug">
.page.page-articles
  ArticlesHero
  LatestArticles(:limit="3")
</template>


<script>
import ArticlesHero from '@/components/articles/ArticlesHero'
import LatestArticles from '@/components/articles/LatestArticles'
export default {
  components: { ArticlesHero, LatestArticles },
}
</script>
