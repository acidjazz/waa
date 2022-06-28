<template>
  <div class="font-os uppercase text-2xl mb-8 print:hidden">
    <span v-if="name">{{ name }}</span>
    <span v-else>{{ area.type }} data
      <span v-if="area.location != 'National'">
        -
        {{ area.value }}
      </span>
    </span>
  </div>
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
    },
  },
}
</script>
