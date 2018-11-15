<template>
  <stripe-element
    ref='element'
    type='card'
    :stripe='stripe'
    :value='value'
    :options='options'
    @blur='$emit("blur")'
    @focus='$emit("focus")'
    @change='$emit("change", $event)'
  />
</template>

<script>
import VStripeElements from './VStripeElements'

export default {
  Mixins: [VStripeElements]
}
</script>
