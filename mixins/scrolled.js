/*
 * scrolled.js detect the user has scrolled from the top
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */

export default {
  data () {
    return {
      has_scrolled: false,
    }
  },
  methods: {
    check_scroll () {
      this.has_scrolled = process.browser && window.scrollY >= 240 // && window.innerWidth >= 1000
    }
  },
  mounted () {
    if (process.browser)
      window.addEventListener('scroll', this.check_scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.check_scroll)
  },
}
