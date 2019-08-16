<template lang="pug">
.page.page-home.bg-black
  HomeHero
  LatestArticles(:feed="feed")
  RenterGrowth
  FactTicker(range="CopyTickerHome")
  OurInitiative
  SourceLine
</template>

<script>
import feed from '@/data/feed.json'
import HomeHero from '@/components/home/HomeHero'
import LatestArticles from '@/components/articles/LatestArticles'
import RenterGrowth from '@/components/home/RenterGrowth'
import FactTicker from '@/components/global/FactTicker'
import OurInitiative from '@/components/home/OurInitiative'
import SourceLine from '@/components/global/SourceLine'
export default {
  components: { HomeHero, LatestArticles, RenterGrowth, FactTicker, OurInitiative, SourceLine },
  data () { return { feed: feed.payload.posts.slice(0, 3), } },
}
</script>
