<template lang="pug">
.page.page-initiative
  InitHero
  TheResearch
  TheTeam
  FactTicker(range="CopyTickerInit")
  GallerySection
  SourceLine
</template>


<script>
import InitHero from '@/components/initiative/InitHero'
import TheResearch from '@/components/initiative/TheResearch'
import TheTeam from '@/components/initiative/TheTeam'
import FactTicker from '@/components/global/FactTicker'
import GallerySection from '@/components/initiative/GallerySection'
import SourceLine from '@/components/global/SourceLine'
export default {
  components: { InitHero, TheResearch, TheTeam, FactTicker, GallerySection, SourceLine },
}
</script>
