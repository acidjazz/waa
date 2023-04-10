<template>
  <div id="DataFilters" class="fixed z-10 inset-x-0 print:hidden">
    <div class="bg-white tran-all-p2s" :class="{'shadow-md p-2 -mt-22px': has_scrolled, 'p-8 mt-36px': !has_scrolled}">
      <div class="flex items-center justify-center lg:-mx-2 -mx-1 ani-d-5">
        <div v-for="option in types" :key="option" class="mx-1 lg:mx-2 relative">
          <div class="whitespace-no-wrap uppercase text-bolder text-xs lg:text-base rounded-full py-2 px-2 lg:px-4 tran-all-p2s" :class="option_class(option)" @click="choose(option)">
            <div v-if="option !== type" class="inline-flex">{{ option }}</div>
            <div v-else-if="is_district" class="inline-flex">{{ state_value }} {{ district | nth }}</div>
            <div v-else class="inline-flex">{{ value(location) }}</div>
          </div>
          <div v-if="select && select === option" class="ani-sib relative">
            <div class="inset-0 absolute">
              <div class="carat mx-auto bg-seashell shadow-md" :class="{'-mt-0': !has_scrolled, '-mt-2': has_scrolled}" />
            </div>
          </div>
          <div v-else class="ani-sib relative">
            <div class="inset-0 absolute">
              <div class="carat mx-auto" />
            </div>
          </div>
          <div v-if="statetip && option === 'district'" class="absolute -ml-10 -mr-10">
            <div class="ani-sib z-10 relative">
              <div class="w-4 h-4 border-l border-t border-seashell mx-auto carat -mb-2 bg-white" />
            </div>
            <div class="border border-seashell rounded bg-white p-4 shadow ani-zi">
              <div class="text-sm">Please choose a state</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="select" class="relative">
      <div class="absolute z-10 w-screen" :class="{'-mt-6': !has_scrolled, '-mt-2': has_scrolled}">
        <div class="canister p-4 lg:pl-20 bg-seashell shadow-md rounded-lg ani-zi overflow-y-scroll max-h-filters">
          <transition :name="direction" mode="out-in">
            <ul v-if="select === 'state'" key="states" class="grid grid-cols-2 lg:grid-cols-4 -p-4">
              <li
                v-for="lstate in states" :key="`state-${lstate}`" class="tran-colors m-2"
                :class="is_state && lstate == location ? classes.types.active : classes.type.inactive" @click="select_go('state', lstate)"
              >
                {{ lstate }}
              </li>
            </ul>
            <ul v-if="select === 'metro'" key="metros" class="grid grid-cols-2 lg:grid-cols-4">
              <li
                v-for="lmetro in metros" :key="`metro-${lmetro}`" class="tran-colors m-2"
                :class="is_metro && lmetro == location ? classes.types.active : classes.type.inactive" @click="select_go('metro', lmetro)"
              >
                {{ lmetro }}
              </li>
            </ul>
            <ul v-if="select === 'district'" key="districts" class="grid grid-cols-2 lg:grid-cols-4">
              <!-- eslint-disable vue/no-use-v-if-with-v-for -->
              <li
                v-for="dist in districts[state_value]" v-if="!is_hidden_district(state, dist)" :key="`district-${state}-${dist}`"
                class="tran-colors m-2"
                :class="is_district && dist == district ? classes.types.active : classes.type.inactive" @click="select_go('district', `${state}-${nth(dist)}`)"
              >
                {{ state_value }} {{ dist | nth }}
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sheets from '@/mixins/sheets'
import scrolled from '@/mixins/scrolled'
import numeral from 'numeral'
export default {
  filters: {
    nth (value) {
      return numeral(value).format('0o')
    },
  },
  mixins: [ sheets, scrolled ],
  data () {
    return {
      statetip: false,
      direction: 'slide-right',
      select: false,
      hiddenDistricts: [
        {
          name: 'California',
          hidden: [40],
        },
        {
          name: 'Illinois',
          hidden: [18],
        },
        {
          name: 'Michigan',
          hidden: [4],
        },
        {
          name: 'New York',
          hidden: [22],
        },
        {
          name: 'Ohio',
          hidden: [13],
        },
        {
          name: 'Pennsylvania',
          hidden: [12],
        },
        {
          name: 'West Virginia',
          hidden: [2],
        },
      ],
      disclaimerDistricts: [
        {
          name: 'Florida',
          districts: [5],
        },
        {
          name: 'Montana',
          districts: [1],
        },
        {
          name: 'North Caorlina',
          districts: [5,8,9,13],
        },
      ],
      types: [ 'national', 'state', 'metro', 'district' ],
      classes: {
        type: {
          active: 'bg-orange text-white cursor-pointer ani-zi',
          inactive: 'hover:text-orange tran-colors cursor-pointer',
          disabled: 'text-alum',
        },
        types: {
          inactive: 'hover:text-orange tran-colors hover:bg-white',
          active: 'text-orange underline',
        },
      },
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
  mounted () {
    this.chose()
  },
  methods: {
    nth (value) {
      return numeral(value).format('0o')
    },
    option_class (option) {
      let classes = []
      if (option === this.type)
        classes.push(this.classes.type.active)

      if (option === 'district' && (!this.is_state  && !this.is_district))
        classes.push(this.classes.type.disabled)
       else if (option !== this.type)
        classes.push(this.classes.type.inactive)

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
        if (this.select === 'state')
          this.direction = 'slide-right'

        if (this.select === 'metro' && type === 'state')
          this.direction = 'slide-left'

        if (this.select === 'district')
          this.direction = 'slide-left'

      }
      this.select = type
    },
    select_go(type, val) {
      this.type == type,
      this.$router.replace(`/data/${this.keyspace(val)}`)
    },
    hidden_districts(state) {
      return this.hiddenDistricts.filter(d => d.name === state).length
    },
    is_hidden_district (state, district) {
      return this.hiddenDistricts.filter(d => d.name === state && d.hidden.includes(district)).length > 0
    },
    is_disclaimer_district(state, district) {
      return this.disclaimerDistricts.filter(d => d.name === state && d.districts.includes(district)).length > 0
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
          district: this.district,
          disclaimer: this.is_disclaimer_district(this.state, this.district),
        })
    },
  },
}
//.relative.flex.justify-center
//  .py-8.bg-seashell.absolute.z-10
</script>
