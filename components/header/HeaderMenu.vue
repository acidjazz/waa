<template lang="pug">
#HeaderMenu(:class="outer_cls",@click="is_open = !is_open")
  div(:class="blue_cls")
  div(:class="inner_cls")
    div(:class="swap_cls")
      span(v-if="!is_open").icon.is-large.flex-hover.icon-0
        i.mdi.mdi-menu.mdi-48px
      span(v-else).icon.is-large.flex-hover.icon-180
        i.mdi.mdi-close.mdi-48px
</template>


<script>
export default {
  data () {
    return {
      is_open: false,
      outer: {
        always: [
          'fixed',
          'top-0',
          'right-0',
          'overflow-hidden',

          'z-20',
          '-mt-4',
          '-mr-4',
        ],
        open: [
          'w-fullbleed',
          'h-fullbleed',
        ],
        closed: [
          'tran-size-delay',
          'w-40',
          'h-40',
        ],
      },
      blue: {
        always: [
          'rounded-full',
          'absolute',
          'top-0',
          'right-0',
          'bg-bigstone',
          'w-40',
          'h-40',
        ],
        open: [
          'scale-30',
        ],
        closed: [
          'scale-1',
        ],
      },
      inner: {
        always: [
          'absolute',
          'top-0',
          'right-0',
          'w-40',
          'h-40',
        ],
        open: [
          'w-fullbleed',
          'h-fullbleed',
        ],
        closed: [
        ],
      },
      swap: {
        always: [
          'tran-colors',
          'select-none',
          'absolute',
          'top-0',
          'right-0',
          'cursor-pointer',
          'rounded-full',
          'w-40',
          'h-40',
          'flex',
          'items-center',
          'justify-center',
        ],
        open: [
          'bg-white',
          'text-black',
        ],
        closed: [
          'bg-lined',
          'text-white',
        ],

      },
    }
  },
  computed: {
    outer_cls () { return this.outer.always.concat(this.is_open ? this.outer.open : this.outer.closed) },
    blue_cls () { return this.blue.always.concat(this.is_open ? this.blue.open : this.blue.closed) },
    inner_cls () { return this.inner.always.concat(this.is_open ? this.inner.open : this.inner.closed) },
    swap_cls () { return this.swap.always.concat(this.is_open ? this.swap.open : this.swap.closed) },
  },
}
</script>
