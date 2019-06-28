<template lang="pug">
.page.page-home
  HomeHero
  LatestArticles(:limit="3")
  TheDemand
  FactTicker
  OurInitiative
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
import OurInitiative from '@/components/home/OurInitiative'
export default {
  components: { HomeHero, LatestArticles, TheDemand, FactTicker, OurInitiative },
}
</script>
