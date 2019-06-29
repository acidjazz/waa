<template lang="pug">
.page.page-initiative
  InitHero
  TheResearch
  FactTicker(range="Copy-TickerInit")
</template>


<script>
import InitHero from '@/components/initiative/InitHero'
import TheResearch from '@/components/initiative/TheResearch'
import FactTicker from '@/components/global/FactTicker'
export default {
  components: { InitHero, TheResearch, FactTicker },
}
</script>
