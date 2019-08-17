<template lang="pug">
#Error.mb-48
  SectionHero(type="image",src="/balconies.png",gradient="bg-tranred")
    .uppercase.mb-5.ani-sit.ani-d-2 we are apartments
    .copy.text-3xl.mb-5.ani-sit.ani-d-3 The page you are looking for cannot be found.
    nuxt-link(to="/").waa-button.ani-zi.ani-d-6
      .copy go home
      .strip
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
    }
  },
  head () {
    return {
      title: this.error.message || 'An error occured'
    }
  }
}
</script>
