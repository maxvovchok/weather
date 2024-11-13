<template>
  <input
    :type="type"
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
  },

  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  width: 300px;
  height: 30px;

  border: 1px solid rgb(94, 94, 94);
  border-radius: 5px;
  padding-left: 10px;
}
</style>
