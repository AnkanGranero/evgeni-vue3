<template>
  <div class="wrapper">
    <div class="body-wrapper">
      <div class="videoTypes">
        <router-link
          class="videoTypeLinks"
          v-for="type in VIDEO_TYPES"
          :to="{ name: 'video', params: { videoType: type } }"
          :key="type.index"
          >{{ type }}</router-link
        >
      </div>
      <div class="videoBox" v-for="video in videosByType" :key="video.index">
        <h3>{{ video.name }}</h3>
        <div class="videoWrapper" :class="{ youtube: video.site }">
          <iframe
            v-if="video.link"
            class="iframe"
            :src="video.link"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <a v-if="video.href" :href="video.href">
            <img :src="video.img" class="videoImg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { videos, VIDEO_TYPES } from "@/media";
export default {
  name: "Video",
  props: ["size"],
  data() {
    return {
      videos,
      VIDEO_TYPES,
    };
  },
  computed: {
    videoType() {
      return this.$route.params.videoType;
    },
    videosByType() {
      return this.videos.filter((v) => v.type.includes(this.videoType));
    },
  },
  methods: {
    clickedVideoType(payload) {
      this.store.dispatch(clickedVideoType, payload);
    },
  },
  metaInfo() {
    return {
      title: "Videos",
      meta: [
        {
          vmid: "description",
          name: "Videos",
          content: "Videos by or with appearances of Evgeni Leonov",
        },
      ],
    };
  },
};
</script>


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
