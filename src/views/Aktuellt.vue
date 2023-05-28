
<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { createClient } from "contentful";
const authToken = "Bearer EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU";
const newsItems = ref();
const destructedNewsItems = ref();
function destructureNewsItem(items) {
  return items.map((element) => {
    let { fields } = element;
    let updatedElement = { ...fields };
    updatedElement.body = fields.body.content[0].content[0].value;
    updatedElement.image =
      fields.image && fields.image.fields && fields.image.fields.file.url;
    return updatedElement;
  });
}
function atributeHandler(item, attribute) {
  try {
    return item[fields.image.fields.file.url];
  } catch (error) {
    return "";
  }
}
const client = createClient({
  space: "77vux6lerjt0",
  environment: "master",
  accessToken: "EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU",
});

function fetchNewsItems() {
  client
    .getEntries()
    .then((response) => {
      newsItems.value = response.items;
      destructedNewsItems.value = destructureNewsItem(response.items);
    })
    .catch(console.error);
}
const sortedNewsItems = computed(() => {
  if (destructedNewsItems.value) {
    return destructedNewsItems.value.sort((a, b) => {
      return new Date(a.date) > new Date(b.date) > 0 ? -1 : 1;
    });
  }
});

onMounted(() => {
  fetchNewsItems();
});
</script>
<template>
  <div id="aktuelltWrapper">
    <h1>Aktuellt!</h1>
    <div class="body-wrapper body-content">
      <div v-for="item in sortedNewsItems" class="newsObject" :key="item.title">
        <h4>{{ item.title }}</h4>
        <div class="text-wrapper">
          <p>{{ item.body }}</p>
          <a class="href-text" v-if="item.link" :href="item.link">{{
            item.linkText
          }}</a>
          <div v-if="item.link">
            <a :href="item.link"><img :src="item.image" /> </a>
          </div>
          <div v-else><img :src="item.image" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

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