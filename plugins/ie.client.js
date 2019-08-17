/*
 * ie.js Internet Explorer 11- detection
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */

export default function ({ redirect }) {
  var ua = window.navigator.userAgent
  var msie = ua.indexOf('MSIE ')
  var trident = ua.indexOf('Trident/')
  if  (msie > 0 || trident > 0)
    redirect('/compat')
}
