<template lang="pug">
.page.page-articles
  ArticlesHero
  OffsetSection
    .block.font-os.mb-4 ARTICLES
    .block.text-3xl.mb-6 Featured article on
      span &nbsp;
      a.underline(href="https://medium.com/@WeAreApartments",target="_new") Medium.
    MediumArticle(:article="featured",:featured="true")
    .block.text-3xl.mb-6 Other articles on
      span &nbsp;
      a.underline(href="https://medium.com/@WeAreApartments",target="_new") Medium.
    ArticleList(:feed="feed")
</template>


<script>
import feed from '@/data/feed.json'
import ArticlesHero from '@/components/articles/ArticlesHero'
import MediumArticle from '@/components/articles/MediumArticle'
import ArticleList from '@/components/articles/ArticleList'
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection, ArticlesHero, ArticleList, MediumArticle },
    data () {
      return {
        featured: feed.find(a => a.featured === true),
        feed: feed.filter(a => a.featured !== true),
      }
  },
}
</script>
