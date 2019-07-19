<template lang="pug">
  .font-os.uppercase.text-2xl.mb-8
    | {{ area.type }} data
    span(v-if="area.location != 'National'")
      |
      | -
      | {{ area.location }}
</template>


<script>
export default {
  props: {
    area: {
      type: Object,
      required: true,
    }
  }
}
</script>
