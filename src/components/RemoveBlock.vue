<template>
  <div class="remove-btn">
    <MyButton
      :handleClick="confirmRemove"
      :styles="{ backgroundColor: 'rgb(255, 81, 81)', color: 'white' }"
      :hoverStyles="{ backgroundColor: 'rgb(255, 0, 0)' }"
    >
      {{ $t("removeBlock") }}</MyButton
    >
    <ModalWindow :show="showModalWindow">
      <h3 class="modal-title">{{ $t("remove") }}?</h3>
      <p class="modal-text">
        {{ $t("warning") }}
      </p>

      <ul class="modal-btn-list">
        <li class="modal-btn-item">
          <MyButton
            :handleClick="closeModal"
            :styles="{ backgroundColor: 'aliceblue' }"
            :hoverStyles="{ backgroundColor: 'rgb(139, 139, 250)' }"
          >
            {{ $t("cancel") }}</MyButton
          >
        </li>
        <li class="modal-btn-item">
          <MyButton
            :handleClick="removeBlock"
            :styles="{ backgroundColor: 'rgb(255, 81, 81)', color: 'white' }"
            :hoverStyles="{ backgroundColor: 'rgb(255, 0, 0)' }"
          >
            {{ $t("remove") }}</MyButton
          >
        </li>
      </ul>
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
    confirmRemove() {
      this.showModalWindow = true;
    },
    removeBlock() {
      this.showModalWindow = false;
      this.$emit("remove");
    },
    closeModal() {
      this.showModalWindow = false;
    },
  },
};
</script>

<style>
.modal-title {
  margin-bottom: 35px;
}

.modal-text {
  margin-bottom: 20px;
}

.modal-btn-list {
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}
.remove-btn {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin-bottom: 20px;
}
</style>
