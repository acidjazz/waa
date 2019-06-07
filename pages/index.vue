<template lang="pug">
.page.page-home
  HomeHero
  DiagSection
  br
  LatestStories(:limit="3")
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
</template>

<script>
import HomeHero from '@/components/home/HomeHero'
import DiagSection from '@/components/global/DiagSection'
import LatestStories from '@/components/stories/LatestStories'
export default {
  components: { HomeHero, DiagSection, LatestStories },
}
</script>
