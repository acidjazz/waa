<template lang="pug">
#waa
  .container
    HeaderNav
    HeaderMenu
    nuxt
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav'
import HeaderMenu from '@/components/header/HeaderMenu'
export default {
  components: { HeaderNav, HeaderMenu },
}
</script>
