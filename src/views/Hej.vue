<script setup>
import fetchFromContentful from "@/helpers/helperfunctions.js";
import { ref, onMounted, computed } from "vue";
const presentationsText = ref();
onMounted(async () => {
  try {
    await fetchFromContentful("presentation")
      .then((resp) =>
        resp.map((item) => {
          let { fields } = item;

          let updatedElement = fields.presentationstext.content.map(
            (item) => item.content[0].value
          );
          return updatedElement;
        })
      )
      .then((resp) => {
        presentationsText.value = resp[0];
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
        <img src="@/assets/Evgeni-turkos.jpeg" id="hej" />

        <div v-for="(text, index) in presentationsText" :key="index">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
img {
  width: 100%;
  background: black;
  margin-bottom: 10%;
}
</style>
