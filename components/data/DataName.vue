<template lang="pug">
  .font-os.uppercase.text-2xl.mb-8.print_hidden
    span(v-if="name") {{ name }}
    span(v-else) {{ area.type }} data
      span(v-if="area.location != 'National'")
        |
        | -
        | {{ area.value }}
</template>


<script>
export default {
  props: {
    name: {
      type: [Boolean,String],
      required: false,
      default: false,
    },
    area: {
      type: [Boolean,Object],
      required: false,
      default: false,
    }
  }
}
</script>
