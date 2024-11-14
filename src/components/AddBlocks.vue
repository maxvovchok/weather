<template>
  <div class="add-btn">
    <MyButton
      :handleClick="addBlock"
      :styles="{ backgroundColor: 'aliceblue' }"
      :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
      >{{ $t("addBlock") }}</MyButton
    >
    <ModalWindow :show="showModalWindow">
      <h3 class="modal-title">{{ $t("maxBlock") }}</h3>
      <p class="modal-text">
        {{ $t("addInfo") }}
      </p>

      <MyButton
        :handleClick="closeModalWindow"
        :styles="{ backgroundColor: 'aliceblue' }"
        :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
        >{{ $t("ok") }}</MyButton
      >
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

    closeModalWindow() {
      this.showModalWindow = false;
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
