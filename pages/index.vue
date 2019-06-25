<template lang="pug">
.page.page-home
  HomeHero
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
import LatestStories from '@/components/stories/LatestStories'
export default {
  components: { HomeHero, LatestStories },
}
</script>
