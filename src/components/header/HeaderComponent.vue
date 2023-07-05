<script setup>
import { VIDEO_TYPES, logos } from "@/media/";
import { Hamburger, CellphoneMenu, DesktopMenu } from "./index";
import fetchFromContentful from "@/helpers/helperfunctions.js";
import { ref, onMounted, computed } from "vue";

const logoLinks = ref();
const videoTypes = VIDEO_TYPES;
const desktopMenuIsOpen = ref(false);
const cellphoneMenuIsOpen = ref(false);

const views = computed(() => {
  return [
    { name: "Hej", link: "/" },
    { name: "Aktuellt", link: "/Aktuellt" },
    { name: "Galleri", link: "/Galleri" },
    { name: "Cv", link: "/Cv" },
  ];
});
const videoDropdown = computed(() => {
  return {
    name: "Video",
    link: "/Video",
    params: ["Skådespelare", "Regissör", "Musik"],
  };
});
onMounted(async () => {
  try {
    await fetchFromContentful("headerMenuLink").then(
      (resp) =>
        (logoLinks.value = resp.map((item) => {
          let { fields } = item;
          let updatedElement = { ...fields };
          updatedElement.link = item.fields.link.content[0].content[0].value;
          updatedElement.image = item.fields.image.fields.file.url;
          return updatedElement;
        }))
    );
  } catch (error) {
    throw error;
  }
});
</script>
<template>
  <div class="headerWrapper">
    <CellphoneMenu
      v-if="cellphoneMenuIsOpen"
      @closeCellphoneMenu="cellphoneMenuIsOpen = false"
    />
    <DesktopMenu
      v-if="desktopMenuIsOpen"
      @closeDesktopMenu="desktopMenuIsOpen = false"
    />
    <div class="topMenu">
      <h2 class="topMenu__header">EVGENI LEONOV</h2>
      <img
        src="@/assets/hamburger.png"
        class="hamburger"
        @click="cellphoneMenuIsOpen = true"
      />
    </div>

    <div class="bottomMenu">
      <div class="links">
        <a
          v-for="logo in logoLinks"
          :href="logo.link"
          :key="logo.name"
          class="links__link"
        >
          <img :src="logo.image" alt />
        </a>
      </div>
      <div class="menu">
        <li v-for="view in views" :key="view.name">
          <router-link :to="view.link">{{ view.name }}</router-link>
        </li>
        <li>
          <div class="dropdown">
            <a class="videoLink" @click="desktopMenuIsOpen = true">Video</a>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hamburger {
  height: 60%;
  margin-right: 20px;
  @media only screen and (min-width: $tablet) {
    display: none;
  }
}
li {
  color: white;
  list-style: none;
}

a.router-link-exact-active {
  text-decoration: none;

  -webkit-text-fill-color: rgb(241, 69, 127);
  -webkit-text-stroke-color: rgb(241, 69, 127);
}

.active a.router-link-exact-active {
  color: black;
}
.videoLinkActive {
  color: rgb(241, 69, 127);
}
.linkDeactivated {
  color: green;
}
.menu a:hover {
  cursor: pointer;
}
.topMenu {
  position: relative;
  height: 60px;
  background: rgb(141, 235, 141);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  letter-spacing: 0;
  @media only screen and (min-width: $tablet) {
    flex-grow: 2;
  }
  &__header {
    font-size: 25px;
    letter-spacing: 0;
    margin-left: 20px;
    @media only screen and (min-width: $tablet) {
      font-size: 60px;
      margin-bottom: 10px;
      margin-left: 40px;
      letter-spacing: 4px;
    }
  }
}
.topMenuOld {
  position: relative;
  width: 100%;
  height: 60px;
  flex-grow: 2;
  @media only screen and (min-width: $tablet) {
    height: unset;
    padding-bottom: 10px;
  }
  display: flex;
  background: rgb(141, 235, 141);
  @media only screen and (max-width: $mobile) {
    flex-wrap: wrap;
  }
}
.nameWrapper {
  padding: 10px 40px;
  word-spacing: 10px;
  white-space: nowrap;
  flex: 1 1 560px;
  img {
    display: none;
  }

  @media only screen and (max-width: $mobile) {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: auto;
    word-spacing: 0%;

    display: flex;
    flex-direction: row;

    top: -10px;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: $smallMobile) {
    top: -5px;
  }
}
/* ---------------------------wrappers----------------------------------------------------- */
.bottomMenu {
  display: flex;
  background: rgb(176, 246, 255);
  padding: 0.7% 20px;
  height: 40px;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  top: 76px;
  @media only screen and (min-width: $tablet) {
    padding: 0.7% 0;
    box-sizing: initial;
  }
}
.headerWrapper {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;

  @media only screen and (min-width: $tablet) {
    position: relative;
    height: 168px;
  }
}

.links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  &__link {
    display: flex;
    align-items: center;
    width: 40px;

    @media only screen and (min-width: $tablet) {
      margin-right: 2%;
    }
  }
  @media only screen and (min-width: $tablet) {
    width: 40%;
    margin-left: 40px;
    display: flex;
  }
  @media only screen and (min-width: $desktop) {
    justify-content: flex-start;
  }
}

.links img {
  height: 70%;
  @media only screen and (max-width: $smallMobile) {
    margin-right: 0;
  }
}

.menu {
  display: flex;
  white-space: nowrap;
  margin-right: 40px;
  justify-content: space-between;
  align-content: center;
  right: 0px;
  width: 40%;

  & li {
    margin: 30px;
    margin-top: 6px;
    padding: 0;
    @media only screen and (max-width: $tablet) {
      font-size: 17px;
      margin: 15px;
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: $mobile) {
    display: none;
  }
  /*  margin-top: 2%; */
}

.overlayz {
  position: fixed;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.3;
  z-index: 4;
}
</style>