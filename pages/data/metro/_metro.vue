<template lang="pug">
.page.page_data
  Soon(v-if="$route.params.metro === 'greensboro'")
  DataPage(v-else)
</template>

<script>
import DataPage from '~/components/DataPage.vue'
import Soon from '~/components/Soon.vue'
export default { components: { DataPage, Soon } }
</script>
