<template lang="pug">
#DataFilters.fixed.z-10.inset-x-0.print_hidden
  .bg-white.tran-all-p2s(:class="{'shadow-md p-2 -mt-22px': has_scrolled, 'p-8 mt-36px': !has_scrolled}")
    .flex.items-center.justify-center.lg_-mx-2.-mx-1.ani-d-5
      .mx-1.lg_mx-2.relative(v-for="option in types",:key="option")
        .whitespace-no-wrap.uppercase.text-bolder.text-xs.lg_text-base.rounded-full.py-2.px-2.lg_px-4.tran-all-p2s(
          @click="choose(option)",
          :class="option_class(option)")
          .inline-flex(v-if="option !== type") {{ option }}
          .inline-flex(v-else-if="is_district") {{ state_value }} {{ district | nth }}
          .inline-flex(v-else) {{ value(location) }}
        .ani-sib.relative(v-if="select && select === option")
          .inset-0.absolute
            .carat.mx-auto.bg-seashell.shadow-md(:class="{'-mt-0': !has_scrolled, '-mt-2': has_scrolled}")
        .ani-sib.relative(v-else)
          .inset-0.absolute
            .carat.mx-auto
        .absolute.-ml-10.-mr-10(v-if="statetip && option === 'district'")
          .ani-sib.z-10.relative
            .w-4.h-4.border-l.border-t.border-seashell.mx-auto.carat.-mb-2.bg-white
          .border.border-seashell.rounded.bg-white.p-4.shadow.ani-zi
            .text-sm Please choose a state
  .relative(v-if="select")
    .absolute.z-10.w-screen(:class="{'-mt-6': !has_scrolled, '-mt-2': has_scrolled}")
      .canister.p-4.lg_pl-20.bg-seashell.shadow-md.rounded-lg.ani-zi.overflow-y-scroll.max-h-filters
        transition(:name="direction",mode="out-in")
          ul.col-cnt-2.lg_col-cnt-4(key="states",v-if="select === 'state'").-p-4
            li.tran-colors.m-2(
              v-for="state in states",
              :key="`state-${state}`",
              @click="select_go('state', state)",
              :class="is_state && state == location ? classes.types.active : classes.type.inactive")
              | {{ state }}
          ul.col-cnt-2.lg_col-cnt-4(key="metros",v-if="select === 'metro'")
            li.tran-colors.m-2(
              v-for="metro in metros",
              :key="`metro-${metro}`",
              @click="select_go('metro', metro)",
              :class="is_metro && metro == location ? classes.types.active : classes.type.inactive")
              | {{ metro }}
          ul.col-cnt-2.lg_col-cnt-4(key="districts",v-if="select === 'district'")
            li.tran-colors.m-2(
              v-for="dist in districts[state_value]",
              :key="`district-${state}-${dist}`",
              @click="select_go('district', `${state}-${nth(dist)}`)",
              :class="is_district && dist == district ? classes.types.active : classes.type.inactive")
              | {{ state_value }} {{ dist | nth }}
</template>

<script>
import sheets from '@/mixins/sheets'
import scrolled from '@/mixins/scrolled'
import numeral from 'numeral'
export default {
  filters: {
    nth (value) {
      return numeral(value).format('0o')
    }
  },
  mixins: [ sheets, scrolled ],
  data () {
    return {
      statetip: false,
      direction: 'slide-right',
      select: false,
      types: [ 'national', 'state', 'metro', 'district' ],
      classes: {
        type: {
          active: 'bg-orange text-white cursor-pointer ani-zi',
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
  computed: {
    is_national () { return this.$route.params.loc === undefined },
    is_state () { return this.states.includes(this.value(this.location)) },
    is_metro () { return this.metros.includes(this.value(this.location)) },
    is_district () { return this.$route.params.loc ? this.$route.params.loc.includes('-') : false },
    district () { return this.is_district ? numeral(this.$route.params.loc.split('-')[1]).value() : false },
    state () {
      return this.is_state ? this.location :
        this.is_district ? this.$route.params.loc.split('-')[0] :
        this.is_metro ? this.state_from_metro(this.value(this.metro)) : false
    },
    state_value () { return this.is_national ? false : this.value(this.state) },
    metro () { return this.is_metro ? this.location : false },
    district_full () { return this.is_district ? `${this.state} ${this.$options.filters.nth(this.district)}` : false },
    district_key () { return this.is_district ? `${this.state}_${this.district}` : false },
    location () { return this.is_national ? 'National' : this.$route.params.loc },
    type () { return this.is_national ? 'national' : this.is_state ? 'state' : this.is_district ? 'district' : 'metro' },
  },
  mounted () { this.chose() },
  methods: {
    nth (value) {
      return numeral(value).format('0o')
    },
    option_class (option) {
      let classes = []
      if (option === this.type) {
        classes.push(this.classes.type.active)
      }
      if (option === 'district' && (!this.is_state  && !this.is_district)) {
        classes.push(this.classes.type.disabled)
      } else if (option !== this.type) {
        classes.push(this.classes.type.inactive)
      }
      return classes
    },

    choose (type) {
      if (type === 'national') {
        this.select = false;
        return this.$router.replace('/data')
      }
      if (type === 'district' && !this.is_state && !this.is_district) {
        this.select = false
        this.statetip = !this.statetip
        return false
      }
      this.statetip = false
      if (this.select !== false) {
        if (this.select === 'state') {
          this.direction = 'slide-right'
        }
        if (this.select === 'metro' && type === 'state') {
          this.direction = 'slide-left'
        }
        if (this.select === 'district') {
          this.direction = 'slide-left'
        }
      }
      this.select = type
    },
    select_go(type, val) {
      this.type == type,
      this.$router.replace(`/data/${this.keyspace(val)}`)
    },
    chose () {
      this.$emit(
      'chose',
        {
          type: this.type,
          location: this.is_district ? this.district_full : this.location,
          key: this.is_district ? this.district_key : this.key(this.location),
          value: this.value(this.location),
          state: this.state,
          state_value: this.state_value,
          metro: this.metro,
          district: this.district
        })
    }
  },
}
//.relative.flex.justify-center
//  .py-8.bg-seashell.absolute.z-10
</script>
