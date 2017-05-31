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
  methods: {
    choice () {
      if (this.state !== 'National' && this.metro === 'None' && this.district === 'None') {
        return { type: 'state', value: this.state }
      }
      if (this.metro !== 'None') {
        return { type: 'metro', value: this.metro }
      }
      if (this.district !== 'None') {
        return { type: 'district', value: this.district }
      }
      return { type: 'national', value: 'National' }
    }
  }
}
