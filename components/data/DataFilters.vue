<template lang="pug">
#DataFilters
  .pt-8.bg-white
    .flex.items-center.justify-center.-mx-2
      .mx-2(v-for="option in types")
        .uppercase.text-bolder.rounded-full.py-2.px-4.mb-8(
          @click="choose(option)",
          :class="option === type ? classes.type.active : option === 'district' && !is_state ? classes.type.disabled : classes.type.inactive") {{ option }}
        .ani-sib(v-if="select && select === option")
          .carat.mx-auto.bg-seashell
        .carat.mx-auto(v-else)
  .py-8.bg-seashell(v-if="select")
    .canister
      transition(name="fade-in-left")
        .flex.flex-wrap.justify-center(v-if="select === 'state'")
          nuxt-link.w-40.tran-colors.m-2(
            v-for="state in states",
            :key="`state-${state}`",
            :to="`/data/${state}`"
            :class="is_state && state == location ? classes.types.active : classes.type.inactive")
            | {{ state }}
        .flex.flex-wrap.justify-center(v-if="select === 'metro'")
          nuxt-link.w-40.tran-colors.m-2(
            v-for="metro in metros",
            :key="`metro-${metro}`",
            :to="`/data/${metro}`",
            :class="is_metro && metro == location ? classes.types.active : classes.type.inactive")
            | {{ metro }}
        .flex.flex-wrap.justify-center(v-if="select === 'district'")
          nuxt-link.w-40.tran-colors.m-2(
            v-for="dist in districts[state]",
            :key="`district-${state}-${dist}`",
            :to="`/data/${state}-${dist}`",
            :class="is_district && dist == district ? classes.types.active : classes.type.inactive")
            | {{ state }} {{ dist | nth }}



</template>


<script>
import sheets from '@/mixins/sheets'
import numeral from 'numeral'
export default {
  mixins: [ sheets ],
  data () {
    return {
      select: false,
      types: [ 'national', 'state', 'metro', 'district' ],
      classes: {
        type: {
          active: 'bg-orange text-white cursor-pointer',
          inactive: 'hover_text-orange tran-colors cursor-pointer',
          disabled: 'text-alum'
        },
        types: {
          inactive: 'hover_text-orange tran-colors hover_bg-white',
          active: 'text-orange underline',
        },
      }
    }
  },
  filters: {
    nth (value) {
      return numeral(value).format('0o')
    }
  },
  computed: {
    is_national () { return this.$route.params.loc === undefined },
    is_state () { return this.states.includes(this.location) },
    is_metro () { return this.metros.includes(this.location) },
    is_district () { return this.$route.params.loc ? this.$route.params.loc.includes('-') : false },
    district () { return this.is_district ? this.$route.params.loc.split('-')[1] : false },
    state () { return this.is_state ? this.location: this.is_district ? this.$route.params.loc.split('-')[0] : false },
    location () { return this.$route.params.loc },
    type () { return this.is_national ? 'national' : this.is_state ? 'state' : this.is_district ? 'district' : 'metro' },

  },
  methods: {
    choose (type) {
      if (type === 'national') return this.$router.push('/data')
      if (type === 'district' && !this.is_state && !this.is_district ) return false
      this.select = type
    }
  },
  //.relative.flex.justify-center
  //  .py-8.bg-seashell.absolute.z-10
  mounted () {
    console.log(this.district)
    console.log(this.district_state)
  },
}
</script>
