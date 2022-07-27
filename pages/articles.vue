<template>
  <div class="page page-articles">
    <articles-hero />
    <offset-section>
      <div class="block font-os mb-4">ARTICLES</div>
      <div class="block text-3xl mb-6">
        Featured article on<span>&nbsp;</span>
        <a class="underline" href="https://medium.com/@WeAreApartments" target="_new">Medium.</a>
      </div>
      <medium-article :article="featured" :featured="true" />
      <div class="block text-3xl mb-6">
        Other articles on<span>&nbsp;</span>
        <a class="underline" href="https://medium.com/@WeAreApartments" target="_new">Medium.</a>
      </div>
      <article-list :feed="feed" />
    </offset-section>
  </div>
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
