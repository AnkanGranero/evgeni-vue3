<script setup>
import fetchFromContentful from "@/helpers/helperfunctions.js";
import { ref, onMounted, computed } from "vue";
const presentationsText = ref();
const headerImage = ref();
onMounted(async () => {
  try {
    await fetchFromContentful("presentation")
      .then((resp) =>
        resp.map((item) => {
          let { fields } = item;
          let updatedElement = {};
          updatedElement.text = fields.presentationstext.content.map(
            (item) => item.content[0].value
          );
          updatedElement.headerImage = fields.headerImage;
          return updatedElement;
        })
      )
      .then((resp) => {
        presentationsText.value = resp[0].text;
        headerImage.value = resp[0].headerImage.fields.file.url;
      });
  } catch (error) {
    throw error;
  }
});
</script>
<template>
  <div class="viewWrapper">
    <h1>Hej!</h1>
    <div class="body-wrapper">
      <div class="body-content">
        <img :src="headerImage" id="hej" />

        <div v-for="(text, index) in presentationsText" :key="index">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
img {
  width: 100%;
  background: black;
  margin-bottom: 10%;
  width: 100%;

  object-fit: cover;
  object-position: top;
  max-height: 80vh;

  @media only screen and (max-width: $mobile) {
    max-height: 60vh;
    background: black;
    margin-bottom: 10%;
    object-fit: cover;
    object-position: top;
  }
}
</style>
