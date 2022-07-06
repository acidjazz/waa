<template>
  <div class="relative w-full flex justify-center items-center">
    <icon v-if="visible" icon="mdi:chevron-down" class="mt-24 absolute animate-bounce duration-1000 w-6 h-6" />
  </div>
</template>

<script>
export default {

  data () {
    return {
      visible: false,
    }
  },
  created () {
    if (process.browser)
      window.addEventListener('scroll', this.scroll)

    setTimeout(() => { this.visible = true }, 1000)
  },
  destroyed () {
    if (process.browser)
      window.removeEventListener('scroll', this.scroll)

  },
  methods: {
    scroll (event) {
      if (window.scrollY >= 100 && this.visible === true)
        this.visible = false

      if (window.scrollY <= 60 && this.visible === false)
        this.visible = true

    },
  },
}
</script>
