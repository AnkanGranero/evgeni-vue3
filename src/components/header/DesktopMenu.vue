<template>
  <div>
    <Overlay @clickedOnOverlay="closeMenu" opacity="light" />
    <div class="dropdownContent">
      <router-link
        @click.native="closeMenu"
        class="dropdownLink"
        v-for="type in Object.values(VIDEO_TYPES)"
        :to="{ name: 'video', params: { videoType: type } }"
        :key="type"
        >{{ type }}</router-link
      >
    </div>
  </div>
</template>
<script>
import Overlay from "@/components/Overlay.vue";
import { VIDEO_TYPES } from "@/media";
export default {
  name: "DesktopMenu",
  components: {
    Overlay,
  },
  data() {
    return {
      VIDEO_TYPES,
    };
  },
  methods: {
    closeMenu() {
      this.$emit("closeDesktopMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  color: black;
  font-family: "Ilisarniq-Light";
  position: relative;
  height: 200px;
}
.dropdownContent {
  display: flex;
  position: absolute;
  right: 0;
  top: 168px;
  flex-direction: column;
  background: rgb(141, 235, 141);
  height: 200px;
  padding: 10px;
  justify-content: space-evenly;
  z-index: 5;
}
.dropdown:hover .dropdownContent {
  display: flex;
}
.dropdownContent a {
  padding: 20px;
}
.dropdownContent a:hover {
  background-color: #61d470;
}
</style>