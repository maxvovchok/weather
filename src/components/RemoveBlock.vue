<template>
  <div class="remove-btn">
    <MyButton :handleClick="removeBlock">Видалити блок</MyButton>
    <!-- <ModalWindow
      :show="showModalWindow"
      @close="showModalWindow = false"
      @confirm="removeBlock"
    >
      Точно видалити?
    </ModalWindow> -->
  </div>
</template>

<script>
import { MyButton, ModalWindow } from "@/UI";

export default {
  components: {
    MyButton,
    ModalWindow,
  },
  data() {
    return {
      showModalWindow: false,
    };
  },
  methods: {
    confirmRemove() {
      this.showModalWindow = true;
    },
    removeBlock() {
      this.showModalWindow = false;
      this.$emit("remove");
    },
  },
};
</script>

<style scoped>
.remove-btn {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
