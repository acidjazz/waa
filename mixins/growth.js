/*
 * growth.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  computed: {
    current () {
      if (this.area.type === 'state')
        return this.populationState[this.area.key][2016]
      if (this.area.type === 'metro')
        return this.populationMetro[2016][this.area.key]
      return this.populationUS[2016]
    },
    future () {
      if (this.area.type === 'state')
        return this.populationState[this.area.key][2030]
      if (this.area.type === 'metro')
        return this.populationMetro[2030][this.area.key]
      return this.populationUS[2030]
    },
    increase () {
      if (this.area.type === 'national')
        return 10
      if (this.area.type === 'state')
        return Math.round(this.populationState[this.area.key].Percent_Change*100)
      if (this.area.type === 'metro')
        return Math.round(this.populationMetro[2016][this.area.key] /
          this.populationMetro[2030][this.area.key]*10)
      return 0
    },
  },
}
