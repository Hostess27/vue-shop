<template>
  <div class="input-field">
    <label :for="id">{{ label }}</label>
    <input
      class="input-field__field"
      v-bind="$attrs"
      :id="id"
      :type="type"
      :maxlength="maxlength"
      :value="value"
      @input="updateValue"
    />
    <small class="input-field__error-messge">{{ errorMessage }}</small>
  </div>
</template>

<script>
const EVENTS = { input: 'input' }
const typeText = "text"
export default {
  name: 'input-field',

  props: {
    type: { type:  String, Number, required: true, default: typeText },
    value: {
      require: true,
    },
    maxlength: { type: Number, default: 0 },
    errorMessage: { type: String, default: '' },
    label: {
      type: String,
      default: 'Label',
    },
    id: { type: null },
  },
  methods: {
    updateValue: function (value) {
      this.$emit(EVENTS.input, value.target.value)
    },
  },
}
</script>
<style lang="scss" scoped>
.input-field {
  display: flex;
  flex-direction: column;
  position: relative;
}
.input-field__field {
  width: 100%;
}
.input-field__error-messge {
  position: absolute;
  top: toRem(50);
  right: 0;
  white-space: nowrap;
}
.input-field__error-message {
  background-color: var(--atencion-color);
  color: var(--atencion-color);
}
</style>
