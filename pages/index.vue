<template>
  <div class="page page-home bg-black">
    <home-hero />
    <!--<latest-articles :feed="feed" /> -->
    <national-forecast />
    <fact-ticker range="CopyTickerHome" />
    <our-initiative />
    <source-line />
  </div>
</template>

<script>
import feed from '@/data/feed.json'
import HomeHero from '@/components/home/HomeHero'
import NationalForecast from '@/components/home/NationalForecast'
import FactTicker from '@/components/global/FactTicker'
import OurInitiative from '@/components/home/OurInitiative'
import SourceLine from '@/components/global/SourceLine'
export default {
  components: { HomeHero, NationalForecast, FactTicker, OurInitiative, SourceLine },
  data () {
    return {
      feed: feed.filter(f => f.frontpage === true),
    }
 },
}
</script>
