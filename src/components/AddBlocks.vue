<template>
  <div class="add-btn">
    <MyButton :handleClick="addBlock">Додати блок</MyButton>
    <ModalWindow :show="showModalWindow" @close="showModalWindow = false">
      Максимум 5 блоків.
    </ModalWindow>
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
    addBlock() {
      if (this.$store.state.cities.length >= 5) {
        this.showModalWindow = true;
      } else {
        this.$store.commit("incrementBlocks");
      }
    },
  },
};
</script>

<style scoped>
.add-btn {
  width: 100px;
  margin: 0 auto;
}
</style>
