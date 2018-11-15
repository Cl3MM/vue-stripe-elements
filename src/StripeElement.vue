<template>
</template>

<script>
import props from './props'
import { create, destroy } from './stripeElements'

export default {
  // please see https://stripe.com/docs/elements/reference for details
  props: props,

  beforeMount () {
    this.stripeElement = create(this.type, this.stripe, this.options)
    this.stripeElement.on('blur', event => this.$emit('blur'))
    this.stripeElement.on('focus', event => this.$emit('focus'))
    this.stripeElement.on('change', event => this.$emit('change', event))
  },

  mounted () {
    // Vue likes to stay in control of $el but Stripe needs a real element
    const el = document.createElement('div')
    this.stripeElement.mount(el)
    // this.$children cannot be used because it expects a VNode :(
    this.$el.appendChild(el)
  },

  beforeDestroy () {
    this.stripeElement.unmount()
    this.stripeElement.destroy()
    destroy()
  },

  methods: {
    blur () { this.stripeElement.blur() },
    clear () { this.stripeElement.clear() },
    focus () { this.stripeElement.focus() },
    update () { this.stripeElement.update() }
  }
}
</script>
