<template lang="pug">
.page.page-calculator
  CalcHero
  CalcParams
</template>


<script>
import CalcHero from '@/components/calculator/CalcHero'
import CalcParams from '@/components/calculator/CalcParams'
export default {
  components: { CalcHero, CalcParams },
}
</script>
