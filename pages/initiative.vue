<template lang="pug">
.page.page-initiative
  InitHero
  TheResearch
  TheTeam
  FactTicker(range="Copy-TickerInit")
  GallerySection
</template>


<script>
import InitHero from '@/components/initiative/InitHero'
import TheResearch from '@/components/initiative/TheResearch'
import TheTeam from '@/components/initiative/TheTeam'
import FactTicker from '@/components/global/FactTicker'
import GallerySection from '@/components/initiative/GallerySection'
export default {
  components: { InitHero, TheResearch, TheTeam, FactTicker, GallerySection },
}
</script>
