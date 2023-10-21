<script setup>
import { VIDEO_TYPES } from "@/media";
import fetchFromContentful from "@/helpers/helperfunctions.js";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();

const mediaItems = ref();
/* const mediaItemsSorted = computed(() => {
  return (
    mediaItems.value &&
    mediaItems.value.sort((a, b) => {
      return a.date < b.date ? -1 : 1;
    })
  );
}); */
const videoTypes = VIDEO_TYPES;
const route = useRoute();
const videoType = computed(() => route.params.videoType);
const videosByType = computed(() => {
  if (mediaItems.value) {
    return mediaItems.value.filter((item) =>
      item.type.includes(videoType.value)
    );
  }
});
function clickedVideoType(payload) {
  store.dispatch("clickedVideoType", payload);
}
onMounted(async () => {
  try {
    await fetchFromContentful("mediaItem").then(
      (resp) =>
        (mediaItems.value = resp
          .map((item) => {
            let newItem = { ...item.fields };
            if (item.fields.image) {
              newItem.image = item.fields.image.fields.file.url;
            }
            if (!item.fields.date) {
              newItem.date = "0000-00-00";
            }
            return newItem;
          })
          .sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          }))
    );
  } catch (error) {
    throw error;
  }
});
</script>
<template>
  <div class="wrapper">
    <div class="body-wrapper">
      <div class="videoTypes">
        <router-link
          class="videoTypeLinks"
          v-for="type in videoTypes"
          :to="{ name: 'video', params: { videoType: type } }"
          :key="type.index"
          >{{ type }}</router-link
        >
      </div>
      <div class="videoBox" v-for="video in videosByType" :key="video.index">
        <h3>{{ video.name }}</h3>
        <div class="videoWrapper" :class="{ youtube: video.site }">
          <a v-if="video.image" :href="video.linkn">
            <img :src="video.image" class="videoImg" />
          </a>
          <iframe
            v-else
            class="iframe"
            :src="video.link"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.videoTypes {
  display: none;
  @media only screen and (max-width: $mobile) {
    margin-top: 5%;
    display: inline;
    font-size: 22px;

    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-bottom: 2em;
  }
  @media only screen and (max-width: $smallMobile) {
    font-size: 16px;
  }
}

.videoTypeLinks {
  /* font-family: "Ilisarniq-Demi"; */
}

.videoImg {
  /* width:83%;
  height:83%; */
  max-width: 100%;
  height: auto;
}

.videoWrapper {
  height: 429px;
  @media only screen and (max-width: $mobile) {
    height: 100%;
  }
}

.videoBox {
  padding: 3em;
  text-align: center;
  display: inline;
  max-width: 100%;
  /* margin:5%; */

  @media only screen and (max-width: $mobile) {
    padding: 0;
    padding: 2em;
  }
  .videoBox:last-child {
    margin-bottom: 100px;
  }
}
h3 {
  font-size: 1.9em;
  margin-bottom: 2em;
  @media only screen and (max-width: $mobile) {
    font-size: 22px;
    letter-spacing: 0;
    margin-bottom: 1em;
  }
}
.iframe {
  display: inline-block;

  width: 100%;
  height: 100%;
}

.wrapper {
  /* width:90%; */

  padding-bottom: 5em;
}

.youtube {
  width: 762px;
  margin: auto;
  @media only screen and (max-width: $mobile) {
    width: 100%;
  }
}
</style>
