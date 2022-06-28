<template>
  <section class="my-32 mr-0 lg:mr-10 vp-r print:mr-0" v-in-vp :class="`bg-${bg} text-${fg}`">
    <div class="px-4 py-10 -mr-0 lg:-mr-10 lg:py-20 print:py-2">
      <div class="mr-0 lg:mr-10">
        <div class="canister">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      required: false,
      default: 'white',
    },
    fg: {
      type: String,
      required: false,
      default: 'black',
    },
  }
}
</script>
