<template>
  <div @click="closeWindow" class="popup_wraper" ref="popup_wraper">
    <div class="popup">
      <div class="popup__header">
        <span>{{ popupTitle }}</span>
        <span class="material-icons" @click="closePopup"> close </span>
      </div>
      <div class="popup__main">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button type="button" class="popup__footer_close-modal" @click="closePopup">
          <slot name="close"></slot>
        </button>
        <button type="button" class="popup__footer_submit-btn" @click="rightActionBtn">
          <slot name="add"></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const EVENTS = { closePopup: 'close-popup', rightActionBtn: 'right-actionBtn' }
export default {
  name: 'popup',
  props: {
    popupTitle: { type: String, default: 'Name' },
  },
  methods: {
    closePopup() {
      this.$emit(EVENTS.closePopup)
    },
    rightActionBtn() {
      this.$emit(EVENTS.rightActionBtn)
    },
    closeWindow(item) {
      let vm = this
      if (item.target === vm.$refs['popup_wraper']) {
        vm.closePopup()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.popup_wraper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  background: var(--dark-gray-alfa);
}
.popup {
  position: fixed;
  top: toRem(50);
  width: toRem(400);
  padding: toRem(16);
  background: var(--white);
  border-radius: toRem(4);
  z-index: 99;

  .popup__footer_submit-btn {
    padding: toRem(8);
    background: var(--success-color);
  }
  .popup__footer_close-modal {
    padding: toRem(8);
    background: var(--atencion-color);
  }
}
.popup__header,
.popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popup__main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
