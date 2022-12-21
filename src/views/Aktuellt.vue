<template>
  <div id="aktuelltWrapper">
    <h1>Aktuellt!</h1>
    <div class="body-wrapper body-content">
      <div v-for="news in newsObject" class="newsObject" :key="news.header">
        <h4>{{ news.header }}</h4>
        <div class="text-wrapper">
          <p>{{ news.bodytext }}</p>
          <a class="href-text" v-if="news.href" :href="news.href">{{
            news.hrefText
          }}</a>
          <div v-if="news.href">
            <a :href="news.href"><img :src="news.src" /> </a>
          </div>
          <div v-else><img :src="news.src" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { newsObject } from "../NewsObject";
export default {
  name: "aktuellt",
  data() {
    return {
      newsObject,
    };
  },
  metaInfo() {
    return {
      title: "Aktuellt",
      meta: [
        {
          vmid: "description",
          name: "Aktuellt",
          content: this.newsObject[0].bodytext.slice(0, 100),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.body-wrapper {
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
}
img {
  width: 100%;
  background: black;
  margin-bottom: 3%;
}
h4 {
  margin-top: 50px;
  text-align: center;
}
#aktuelltWrapper {
  display: flex;
  justify-content: center;
}

.newsObject {
  @media only screen and (min-width: $tablet) {
    margin-bottom: 5%;
  }
}

.text-wrapper {
}

a {
  font-family: "Ilisarniq-DemiItalic";
  font-size: 20px;
  text-decoration: none;
}

.href-text {
  margin-bottom: 5%;
  display: block;
}
</style>