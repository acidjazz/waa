<template>
  <SectionHero type="image" src="/calculator.jpg" gradient="bg-tranpurp">
    <div v-in-vp class="text-lg font-os mb-10 vp-y">CALCULATOR</div>
    <div v-in-vp class="mx-auto text-4xl w-10/12 lg:w-192 mb-10 vp-y vp-d-2">
      Calculate the economic contribution of an apartment community nationally, in your state or metro area below.
    </div>
  </SectionHero>
</template>

<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
}
</script>
