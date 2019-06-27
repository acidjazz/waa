<template lang="pug">
.page.page-home
  HomeHero
  LatestArticles(:limit="3")
  TheDemand
  FactTicker
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
</template>

<script>
import HomeHero from '@/components/home/HomeHero'
import LatestArticles from '@/components/articles/LatestArticles'
import TheDemand from '@/components/home/TheDemand'
import FactTicker from '@/components/home/FactTicker'
export default {
  components: { HomeHero, LatestArticles, TheDemand, FactTicker },
}
</script>
