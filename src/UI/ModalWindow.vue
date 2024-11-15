<template>
  <div class="modal-window" v-if="show">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.modal-window {
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  padding: 20px;
}

.modal-content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 250px;
  min-height: 100px;
  padding: 20px;
  text-align: center;
}
</style>
