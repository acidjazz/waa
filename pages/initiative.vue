<template>
  <div class="page page-initiative bg-black">
    <init-hero />
    <the-research />
    <the-team />
    <gallery-section />
    <the-people />
    <the-report bg="scooter" fg="white" />
    <source-line />
  </div>
</template>

<script>
import InitHero from '@/components/initiative/InitHero'
import TheResearch from '@/components/initiative/TheResearch'
import TheTeam from '@/components/initiative/TheTeam'
import GallerySection from '@/components/initiative/GallerySection'
import ThePeople from '@/components/initiative/ThePeople'
import TheReport from '@/components/global/TheReport'
import SourceLine from '@/components/global/SourceLine'
export default {
  components: {
    InitHero,
    TheResearch,
    TheTeam,
    GallerySection,
    ThePeople,
    TheReport,
    SourceLine,
  },
}
</script>
