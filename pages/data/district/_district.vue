<template lang="pug">
.page.page_data
  DataPage(v-bind:state="state")
</template>

<script>

import DataPage from '~/components/DataPage.vue'

function capitalizeFirstLetter (string) {
  return string[0].toUpperCase() + string.slice(1)
}

function formatParam (string) {
  let words = string.split('-')
  for (let index in words) {
    words[index] = capitalizeFirstLetter(words[index])
  }
  return words.join(' ')
}

export default {
  data () {
    return {
      state: formatParam(this.$route.params.district)
    }
  },
  components: { DataPage }
}

</script>
