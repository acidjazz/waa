<template lang="pug">
.page.page-home
  HomeHero
  LatestArticles(:limit="3")
  TheDemand
  FactTicker(range="CopyTickerHome")
  OurInitiative
  SourceLine
</template>

<script>
import HomeHero from '@/components/home/HomeHero'
import LatestArticles from '@/components/articles/LatestArticles'
import TheDemand from '@/components/home/TheDemand'
import FactTicker from '@/components/global/FactTicker'
import OurInitiative from '@/components/home/OurInitiative'
import SourceLine from '@/components/global/SourceLine'
export default {
  components: { HomeHero, LatestArticles, TheDemand, FactTicker, OurInitiative, SourceLine },
}
</script>
