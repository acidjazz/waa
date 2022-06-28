<template>
  <div id="SelectInput" class="w-full relative">
    <select class="text-xl bg-seashell p-2 w-full font-bold appearance-none" @input="update">
      <option :selected="value == '' || !options.includes(value)">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="value === option"
      >
        {{ option }}
      </option>
    </select><i class="mdi mdi-24px mdi-chevron-down absolute right-0 mt-1 mr-2" />
  </div>
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
    },
  },
}
</script>
