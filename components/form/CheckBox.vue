<template>
  <div
    class="checkbox text-white rounded h-10 flex items-center justify-center border-2 cursor-pointer"
    :class="{'bg-orange border-orange': checked, 'border-black': !checked}"
  >
    <client-only>
      <Icon v-if="checked" icon="mdi:check-bold" class="ani-zi" />
    </client-only>
  </div>
</template>


<script>
export default {
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
