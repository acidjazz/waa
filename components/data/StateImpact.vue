<template>
  <div v-if="state_impact" class="text-center">
    * The economic impact is estimated using state impact numbers since this metro was not included in the original economic impact study
  </div>
</template>

<script>
import data from '@/mixins/data'
export default {
  mixins: [ data ],
}
</script>

