<template>
  <div class="page page-calculator">
    <calc-hero />
    <calc-params @calculate="calculate" />
  </div>
</template>

<script>
import CalcHero from '@/components/calculator/CalcHero'
import CalcParams from '@/components/calculator/CalcParams'
export default {
  components: { CalcHero, CalcParams },
  methods: {
    calculate (data) {
      this.$router.push(`/results/#${data.type}/${data.homes}/${data.by != 'national' ? data.selected.replace(/ /g, '_') : data.by}`)
    },
  },
}
  </script>
