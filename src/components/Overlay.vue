<template>
  <div class="overlay" @click="$emit('clickedOnOverlay')" :class="opacity" />
</template>
<script>
export default {
  name: "Overlay",
  props: {
    opacity: {
      type: String,
      validator: function (value) {
        return ["light", "dark"].includes(value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.overlay {
  background: rgb(0, 0, 0);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
}
.light {
  opacity: 0.2;
}
.dark {
  opacity: 0.8;
}
</style>
