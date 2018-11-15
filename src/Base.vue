<template>
  <div
    ref='element'
    :type='type'
    :stripe='stripe'
    :value='value'
    :options='options'
    @blur='$emit("blur")'
    @focus='$emit("focus")'
    @change='$emit("change", $event)'
  >
  </div>
</template>

<script>
import props from './props'
import { create, destroy } from './stripeElements'

export default {
  props,

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
    if (this.stripeElement) {
      this.stripeElement.unmount()
      this.stripeElement.destroy()
    }
    destroy()
  },

  methods: {
    // blur () { this.$refs.element.blur() },
    // clear () { this.$refs.element.clear() },
    // focus () { this.$refs.element.focus() },
    // update (options) { this.$refs.element.update(options) }

    blur () { this.stripeElement.blur() },
    clear () { this.stripeElement.clear() },
    focus () { this.stripeElement.focus() },
    update (opts) { this.stripeElement.update(opts) }
  }
}
</script>

