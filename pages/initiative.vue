<template lang="pug">
.page.page-initiative.bg-black
  InitHero
  TheResearch
  TheTeam
  FactTicker(range="CopyTickerInit")
  GallerySection
  ThePeople
  TheReport(bg="scooter",fg="white")
  SourceLine
</template>

<script>
import InitHero from '@/components/initiative/InitHero'
import TheResearch from '@/components/initiative/TheResearch'
import TheTeam from '@/components/initiative/TheTeam'
import FactTicker from '@/components/global/FactTicker'
import GallerySection from '@/components/initiative/GallerySection'
import ThePeople from '@/components/initiative/ThePeople'
import TheReport from '@/components/global/TheReport'
import SourceLine from '@/components/global/SourceLine'
export default {
  components: {
    InitHero,
    TheResearch,
    TheTeam,
    FactTicker,
    GallerySection,
    ThePeople,
    TheReport,
    SourceLine
  },
}
</script>
