<template>
  <div class="page page-resources">
    <resources-hero />
    <resources-outreach />
    <offset-section>
      <resources-build />
    </offset-section>
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
import ResourcesHero from '@/components/resources/ResourcesHero'
import OffsetSection from '@/components/global/OffsetSection'
import ResourcesOutreach from '@/components/resources/ResourcesOutreach'
import ResourcesBuild from '@/components/resources/ResourcesBuild'
import Publications from '@/components/global/Publications'
import SourceLine from '@/components/global/SourceLine'

import GallerySection from '@/components/initiative/GallerySection'
import TheResearch from '@/components/initiative/TheResearch'
import TheTeam from '@/components/initiative/TheTeam'
import ThePeople from '@/components/initiative/ThePeople'
export default {
  components: {
    ResourcesHero,
    ResourcesOutreach,
    OffsetSection,
    ResourcesBuild,
    Publications,
    SourceLine,

    GallerySection,
    TheResearch,
    TheTeam,
    ThePeople,
  },
}
</script>
