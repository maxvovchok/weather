<template>
  <button @click="handleClick">
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
  },
};
</script>

<style>
button {
  width: 100px;
  height: 40px;
  border: 1px solid rgb(71, 71, 247);
  border-radius: 5px;
  background-color: aliceblue;
  transition: 0.3s;
}

button:hover {
  background-color: rgb(139, 139, 250);
}
</style>
