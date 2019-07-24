<template lang="pug">
#DataDetail
  DataName(:area="area")
</template>

<script>
export default {
  components: {
  },
  props: {
    area: {
      type: Object,
      required: true,
    }
  },
}
</script>
