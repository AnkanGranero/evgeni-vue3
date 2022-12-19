<template>
  <div class="cellphoneMenuWrapper" @click="closeCellphoneMenu">
    <Overlay opacity="dark" @clickedOnOverlay="closeCellphoneMenu" />
    <ul>
      <li v-for="view in views" :key="view.name">
        <router-link
          v-if="view.name === 'Video'"
          @click.native="closeCellphoneMenu"
          size="phone"
          :to="{ name: 'video', params: { videoType: VIDEO_TYPES.ACTOR } }"
          >{{ view.name }}</router-link
        >
        <router-link
          v-else
          @click.native="closeCellphoneMenu"
          :to="view.link"
          >{{ view.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { VIDEO_TYPES } from "@/media/";
import Overlay from "@/components/Overlay.vue";

export default {
  name: "CellPhoneMenu",
  data() {
    return {
      VIDEO_TYPES,
    };
  },
  components: {
    Overlay,
  },
  computed: {
    views() {
      return this.$store.getters.views;
    },
  },
  methods: {
    closeCellphoneMenu() {
      this.$emit("closeCellphoneMenu");
    },
  },
};
</script>
<style lang="scss" scoped>
.cellphoneMenuWrapper {
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-evenly;
  z-index: 4;

  align-items: center;
  ul {
    z-index: 5;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  li {
    padding: 10px;
    a {
      color: white;

      white-space: nowrap;
    }
  }
}
</style>
