<template lang="pug">
.page.page-home
  HomeHero
  LatestArticles(:limit="3")
  TheDemand
  FactTicker(range="Copy-TickerHome")
  OurInitiative
</template>

<script>
import HomeHero from '@/components/home/HomeHero'
import LatestArticles from '@/components/articles/LatestArticles'
import TheDemand from '@/components/home/TheDemand'
import FactTicker from '@/components/global/FactTicker'
import OurInitiative from '@/components/home/OurInitiative'
export default {
  components: { HomeHero, LatestArticles, TheDemand, FactTicker, OurInitiative },
}
</script>
