<template lang="pug">
.page.page-home
  HomeHero
  br
  LatestArticles(:limit="3")
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
import LatestArticles from '@/components/articles/LatestArticles'
export default {
  components: { HomeHero, LatestArticles },
}
</script>
