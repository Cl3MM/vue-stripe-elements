export default {
  stripe: {
    type: [String, Object], // stripe key or instance
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: function(value) {
      // The value must match one of these strings
      return (
        ["iban", "card", "cardCvv", "cardExpiry", "cardNumber", "postalCode"]
          .map(s => s.toLowerCase())
          .indexOf(values.toLowerCase()) !== -1
      )
    }
  },
  value: {
    type: String,
    required: false
  },
  options: {
    type: Object,
    required: false
  }
}
