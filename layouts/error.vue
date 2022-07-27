<template>
  <div id="Error" class="mb-48">
    <section-hero type="image" src="/balconies.png" gradient="bg-tranred">
      <div class="uppercase mb-5 ani-sit ani-d-2">we are apartments</div>
      <div class="copy text-3xl mb-5 ani-sit ani-d-3">The page you are looking for cannot be found.</div>
      <nuxt-link class="waa-button ani-zi ani-d-6" to="/">
        <div class="copy">go home</div>
        <div class="strip" />
      </nuxt-link>
    </section-hero>
  </div>
</template>

<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  name: 'NuxtError',
  components: { SectionHero },
  props: {
    error: {
      type: [String, Object],
      required: false,
      default: '',
    },
  },
  head () {
    return {
      title: this.error.message || 'An error occured',
    }
  },
}
</script>
