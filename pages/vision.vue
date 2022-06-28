<template>
  <div class="page page-vision">
    <vision-hero />
    <vision-outreach />
    <offset-section>
      <vision-build />
    <!-- VisionIncome-->
    </offset-section>
    <!-- VisionFAQ-->
    <publications />
    <gallery-section />
    <the-research />
    <offset-section>
      <the-team />
      <the-people />
    </offset-section>
    <source-line />
  </div>
</template>

<script>
import VisionHero from '@/components/vision/VisionHero'
import OffsetSection from '@/components/global/OffsetSection'
import VisionOutreach from '@/components/vision/VisionOutreach'
import VisionBuild from '@/components/vision/VisionBuild'
import VisionIncome from '@/components/vision/VisionIncome'
import Publications from '@/components/global/Publications'
import VisionFAQ from '@/components/vision/VisionFAQ'
import SourceLine from '@/components/global/SourceLine'

import GallerySection from '@/components/initiative/GallerySection'
import TheResearch from '@/components/initiative/TheResearch'
import TheTeam from '@/components/initiative/TheTeam'
import ThePeople from '@/components/initiative/ThePeople'
export default {
  components: {
    VisionHero,
    VisionOutreach,
    OffsetSection,
    VisionBuild,
    VisionIncome,
    Publications,
    VisionFAQ,
    SourceLine,

    GallerySection,
    TheResearch,
    TheTeam,
    ThePeople,
  },
}
</script>
