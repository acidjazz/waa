module.exports = {
  props: {
    state: {
      type: String,
      default: 'National'
    },
    metro: {
      type: String,
      default: 'None'
    },
    district: {
      type: String,
      default: 'None'
    }
  },
  watch: {
    '$route': function () {
      this.populate()
    }
  },
  methods: {
    capitalizeFirstLetter (string) {
      if (string === 'of') {
        return string
      }
      if (string === 'd.c.') {
        return 'D.C.'
      }
      return string[0].toUpperCase() + string.slice(1)
    },
    formatParam (type, string) {
      if (string === undefined) return this.$props[type]
      let words = string.split('-')
      for (let index in words) {
        words[index] = this.capitalizeFirstLetter(words[index])
      }
      return words.join(' ')
    },
    populate () {
      this.path = this.$route.path
      this.metro = this.formatParam('metro', this.$route.params.metro)
      this.state = this.formatParam('state', this.$route.params.state)
      this.district = this.formatParam('district', this.$route.params.district)
    },
    choice () {
      if (this.state !== 'National' && this.metro === 'None' && this.district === 'None') {
        return { type: 'state', value: this.state.trim(), state: this.state.trim(), copy: this.state.trim() }
      }
      if (this.metro !== 'None') {

        var Filters =  require('../static/Filters.json')
        let state = false

        for (let key in Filters.data) {
          if (Filters.data[key].Metro !== undefined) {
            let value = this.metro.indexOf(Filters.data[key].Metro.split(','))
            let metros = Filters.data[key].Metro.split(',')
            for (let bkey in metros) {
              if (metros[bkey].trim() === this.metro) {
                state = Filters.data[key].State
              }
            }
          }
        }

        return {
          type: 'metro',
          value: this.metro,
          copy: (this.metro === 'Dallas Fort Worth') ? 'Dallas-Fort Worth' : this.metro,
          state: state
        }

      }
      if (this.district !== 'None') {
        return {
          type: 'district',
          value: this.district,
          copy: this.district,
          state: this.district.split(' ').slice(0, -1).join(' ')
        }
      }
      return { type: 'national', value: 'National', copy: 'National' }
    }
  }
}
