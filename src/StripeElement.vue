<template>
</template>

<script>
import props from './props'
import { create, destroy } from './stripeElements'

export default {
  // please see https://stripe.com/docs/elements/reference for details
  props: Object.assign({type: {type:String, required:true}}, props),

  data: () => ({_yolo: null}),

  beforeMount () {
    this._yolo = create(this.type, this.stripe, this.options)
    this._yolo.on('blur', event => this.$emit('blur'))
    this._yolo.on('focus', event => this.$emit('focus'))
    this._yolo.on('change', event => this.$emit('change', event))
  },

  mounted () {
    // Vue likes to stay in control of $el but Stripe needs a real element
    const el = document.createElement('div')
    this._yolo.mount(el)
    // this.$children cannot be used because it expects a VNode :(
    this.$el.appendChild(el)
  },

  beforeDestroy () {
    this._yolo.unmount()
    this._yolo.destroy()
    destroy()
  },

  methods: {
    blur () { this._yolo.blur() },
    clear () { this._yolo.clear() },
    focus () { this._yolo.focus() },
    update () { this._yolo.update() }
  }
}
</script>
