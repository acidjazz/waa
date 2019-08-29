/*
 * growth.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  methods: {
    values (key) {
      if (this.area.type === 'state')
        return this.rentergrowth_state[this.area.key][key]
      if (this.area.type === 'metro')
        return this.rentergrowth_metro[this.area.key][key]
      return this.rentergrowth_national[key]
    }
  },
  computed: {
    current () { return this.values(2016) },
    future () { return this.values(2030) },
    increase () { return Math.round(this.values('Difference')*100) },
  },
}
