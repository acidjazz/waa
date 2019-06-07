<template lang="pug">
.error-page.w-screen.h-screen.text-white
  .error-page-inner.w-screen.h-screen.flex.flex-col.items-center.justify-center
    .uppercase.mb-5 we are apartments
    .copy.text-3xl.mb-5 The page you are looking for cannot be found.
    nuxt-link(to="/").waa-button.waa-button-trans.ani-zoom-in.ani-delay-5
      .copy go home
      .strip
</template>

<script>
export default {
  name: 'nuxt-error',
  props: ['error'],
  head () {
    return {
      title: this.error.message || 'An error occured'
    }
  }
}
</script>
