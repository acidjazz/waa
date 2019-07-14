<template lang="pug">
#DataFilters
  .pt-8.bg-white
    .flex.items-center.justify-center.-mx-2
      .mx-2(v-for="option in types")
        .uppercase.text-bolder.rounded-full.cursor-pointer.py-2.px-4.mb-8(
          @click="choose(option)",
          :class="option === type ? classes.type.active : classes.type.inactive") {{ option }}
        .ani-sib(v-if="select && select === option")
          .carat.mx-auto.bg-seashell
        .carat.mx-auto(v-else)
  .py-8.bg-seashell(v-if="select")
    .canister
      .states.flex.flex-wrap.justify-center
        nuxt-link.w-40.p-2.m-2.hover_text-orange.tran-colors(
          v-for="state in states",
          :class="is_state && state === location ? classes.types.active : classes.type.inactive",
          :key="state",
          :to="`/data/${state}`") {{ state }}
</template>


<script>
import sheets from '@/mixins/sheets'
export default {
  mixins: [ sheets ],
  data () {
    return {
      select: false,
      types: [ 'national', 'state', 'metro', 'district' ],
      classes: {
        type: {
          active: 'bg-orange text-white',
          inactive: 'hover_text-orange tran-colors',
        },
        types: {
          active: 'hover_text-orange tran-colors hover_bg-white',
          inactive: 'text-black',
        },
      }
    }
  },
  computed: {
    type () { return this.is_national ? 'national' : this.is_state ? 'state' : 'metro' },
    is_national () { return this.$route.params.loc === undefined },
    is_state () { this.states.includes(this.location) },
    location () { return this.$route.params.loc },

  },
  methods: {
    choose (type) {
      if (type === 'national') return this.$router.push('/data')
      this.select = type
    }
  },
  //.relative.flex.justify-center
  //  .py-8.bg-seashell.absolute.z-10
  mounted () {
    console.log(this.$route)
  },
}
</script>
