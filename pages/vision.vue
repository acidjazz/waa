<template lang="pug">
.page.page-vision
  VisionHero
  VisionOutreach
  OffsetSection
    VisionBuild
    VisionIncome
  VisionFAQ
  TheReport
</template>

<script>
import VisionHero from '@/components/vision/VisionHero'
import OffsetSection from '@/components/global/OffsetSection'
import VisionOutreach from '@/components/vision/VisionOutreach'
import VisionBuild from '@/components/vision/VisionBuild'
import VisionIncome from '@/components/vision/VisionIncome'
import TheReport from '@/components/global/TheReport'
import VisionFAQ from '@/components/vision/VisionFAQ'
export default {
  components: {
    VisionHero,
    VisionOutreach,
    OffsetSection,
    VisionBuild,
    VisionIncome,
    TheReport,
    VisionFAQ,
  },
}
</script>
