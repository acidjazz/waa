<template>
  <div class="w-screen h-screen-bl48 relative lg:-mb-48">
    <video
      v-if="type === 'video'" class="absolute w-screen h-screen-bl48 top-50 left-50 w-auto h-auto transform-50 object-cover z-5" playsinline="playsinline"
      autoplay="autoplay" muted="muted" loop="loop"
    >
      <source :src="src" type="video/mp4">
    </video>
    <img
      v-if="type === 'image'" class="object-cover absolute w-screen h-screen-bl48" :src="src"
      alt="Hero Image"
    >
    <div class="relative w-screen h-screen-bl48 flex justify-center items-center" :class="gradient">
      <div class="text-white text-center">
        <slot />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'image',
    },
    src: {
      type: String,
      required: true,
    },
    gradient: {
      type: String,
      required: true,
    },
  },
}
</script>
