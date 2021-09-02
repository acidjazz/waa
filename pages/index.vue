<template lang="pug">
.page.page-home.bg-black
  HomeHero
  LatestArticles(:feed="feed")
  // RenterGrowth
  NationalForecast
  FactTicker(range="CopyTickerHome")
  OurInitiative
  SourceLine
</template>

<script>
import feed from '@/data/feed.json'
import HomeHero from '@/components/home/HomeHero'
import LatestArticles from '@/components/articles/LatestArticles'
import NationalForecast from '@/components/home/NationalForecast'
import FactTicker from '@/components/global/FactTicker'
import OurInitiative from '@/components/home/OurInitiative'
import SourceLine from '@/components/global/SourceLine'
export default {
  components: { HomeHero, LatestArticles, NationalForecast, FactTicker, OurInitiative, SourceLine },
  data () {
    return {
      feed: feed.filter(f => f.frontpage === true),
    }
 },
}
</script>
