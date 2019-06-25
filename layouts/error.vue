<template lang="pug">
.error-page.w-screen.h-screen.text-white
  .error-page-inner.w-screen.h-screen.flex.flex-col.items-center.justify-center
    .uppercase.mb-5.ani-sit.ani-d-2 we are apartments
    .copy.text-3xl.mb-5.ani-sit.ani-d-3 The page you are looking for cannot be found.
    nuxt-link(to="/").waa-button.ani-zi.ani-d-6
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
