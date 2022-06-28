<template>
  <div class="flex flex-wrap my-32">
    <img
      v-for="i in 4" :key="i" v-in-vp
      class="object-cover w-1/2 lg:w-1/4 h-32 lg:h-96 vp-r" alt="Gallery"
      :src="`/apt${i}.jpg`" :class="`vp-d-${i}`"
    >
  </div>
</template>


<script>
export default {

}
</script>
