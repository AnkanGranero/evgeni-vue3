<script setup>
import { pictures } from "@/media";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { createClient } from "contentful";
const authToken = "Bearer EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU";
const client = createClient({
  space: "77vux6lerjt0",
  environment: "master",
  accessToken: "EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU",
});
const galleryImages = ref();
const moduleImage = ref();
const moduleOpen = ref(false);

function toggleModule() {
  moduleOpen.value = !moduleOpen.value;
}
function getModuleImage(orderNumber) {
  moduleImage.value = galleryImages.value.filter(
    (p) => p.orderNumber == orderNumber
  )[0].url;
}
function fetchGalleryImages() {
  client
    .getEntries({
      content_type: "galleryImage",
    })
    .then((response) => {
      galleryImages.value = response.items
        .map((item) => {
          const destructedItem = item.fields;
          destructedItem.url = item.fields.image.fields.file.url;
          return destructedItem;
        })
        .sort((a, b) => a.orderNumber - b.orderNumber);
    })
    .catch(console.error);
}
onMounted(() => {
  fetchGalleryImages();
});
</script>
<template>
  <div class="viewWrapper">
    <div v-if="moduleOpen" v-on:click="toggleModule()" id="moduleWrapper">
      <img :src="moduleImage" id="fullScreen" />
    </div>

    <div class="wrapper">
      <div class="overlay">
        <div
          v-for="image in galleryImages"
          :key="image.orderNumbber"
          div
          class="cell"
          :class="image.orderNumber"
        >
          <img
            :src="image.url"
            v-on:click="getModuleImage(image.orderNumber), toggleModule()"
            alt="image on Evgeni Leonov"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#gallery {
  @media only screen and (max-width: $mobile) {
  }
}

.wrapper {
  margin: 5%;
  overflow: hidden;

  @media only screen and (max-width: $mobile) {
    height: 90vh;
    margin-bottom: 0;
  }
}

.overlay {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: repeat(5, 1fr);

  grid-gap: 5%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: $mobile) {
    margin-top: 10%;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 5%;
    grid-row-gap: 15%;
  }
}
.cell {
  width: 100%;
  height: 30vw;
  cursor: pointer;
}
.cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 20%;
  margin: auto;
}

h1 {
  margin-bottom: 10%;
}
.containerTest {
  height: auto;
  margin: 2rem;
  display: grid;

  grid-gap: 5%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

#moduleWrapper {
  height: 100vh;
  width: 100vw;
  position: fixed;
  float: center;

  top: 0;

  background: rgb(3, 4, 2, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

#fullScreen {
  position: absolute;
  float: center;
  height: 70vh;
}
</style>


