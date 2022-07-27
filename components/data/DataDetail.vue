<template>
  <div id="DataDetail">
    <DataName :area="area" />
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    area: {
      type: Object,
      required: true,
    },
  },
}
</script>
