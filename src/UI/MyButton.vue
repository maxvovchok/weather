<template>
  <button
    @click="handleClick"
    :style="computedStyles"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    handleClick: {
      type: Function,
      required: true,
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    hoverStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    computedStyles() {
      return this.isHovered
        ? { ...this.styles, ...this.hoverStyles }
        : this.styles;
    },
  },
};
</script>

<style scoped>
button {
  width: 100px;
  height: 40px;
  border: 1px solid rgb(71, 71, 247);
  border-radius: 5px;
  transition: 0.3s;
}
</style>
