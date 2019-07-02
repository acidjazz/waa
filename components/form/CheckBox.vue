<template lang="pug">
.checkbox.text-white.rounded.w-10.h-10.flex.items-center.justify-center.border-2.cursor-pointer(
  :class="{'bg-orange border-orange': this.checked, 'border-black': !this.checked}")
  i.mdi.mdi-36px.mdi-check-bold.ani-zi(v-if="checked")
</template>


<script>
export default {
  props: {
    checked: {
      type: Boolean,
      required: true,
    }
  }
}
</script>
