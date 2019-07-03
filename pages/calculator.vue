<template lang="pug">
.page.page-calculator
  CalcHero
  CalcParams(@calculate="calculate")
</template>


<script>
import CalcHero from '@/components/calculator/CalcHero'
import CalcParams from '@/components/calculator/CalcParams'
export default {
  components: { CalcHero, CalcParams },
  methods: {
    calculate (data) {
      this.$router.push(`/calc/${data.type}/${data.homes}/${data.by != 'national' ? data.selected.replace(' ', '_') : data.by}`)
    },
  },
}
</script>
