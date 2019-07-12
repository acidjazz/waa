<template lang="pug">
.py-8.bg-white
  .flex.items-center.justify-center.-mx-2
    .uppercase.font-okib.font-bold.rounded-full.cursor-pointer.py-2.px-4.hover_bg-orange.hover_text-white.mx-2.tran-colors(
      v-for="type in types"
      :class="type === active.type ? active.class : ''") {{ type }}
</template>


<script>
export default {
  data () {
    return {
      types: [ 'national', 'state', 'metro', 'district' ],
      active: {
        class: 'bg-orange text-white',
        type: 'metro',
      },
    }
  }
}
</script>
