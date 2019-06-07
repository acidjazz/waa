<template lang="pug">
#waa
  .container
    HeaderTitle
    HeaderMenu
    nuxt
</template>

<script>
import HeaderTitle from '@/components/header/HeaderTitle'
import HeaderMenu from '@/components/header/HeaderMenu'
export default {
  components: { HeaderTitle, HeaderMenu },
}
</script>
