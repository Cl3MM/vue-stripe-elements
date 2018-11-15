<template>
  <stripe-element
    ref='element'
    :type="type"
    :stripe='stripe'
    :value='value'
    :options='options'
    @blur='$emit("blur")'
    @focus='$emit("focus")'
    @change='$emit("change", $event)'
  />
</template>

<script>
import Base from './Base'

export default {
  Mixins: [Base]
}
</script>
