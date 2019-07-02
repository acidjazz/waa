<template lang="pug">
input.text-xl.bg-seashell.rounded.p-2.w-full.font-bold(
  :type="type",
  :placeholder="placeholder",
  :value="value",
  @input="update")
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'placeholder',
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    update() {
      this.$emit('input', this.value)
    }
  },
}
</script>
