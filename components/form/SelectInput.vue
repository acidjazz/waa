<template lang="pug">
select.text-xl.bg-seashell.p-2.w-full.font-bold(@input="update")
  option(:selected="value == '' || !options.includes(value)") {{ placeholder }}
  option(
    v-for="option in options",
    :value="option",
    :selected="value === option") {{ option }}
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    update(event) {
      this.$emit('input', event.target.value)
    }
  },
}
</script>
