<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { createClient } from "contentful";
const authToken = "Bearer EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU";
const cvItems = ref();

const destructedCvItems = ref();
const client = createClient({
  space: "77vux6lerjt0",
  environment: "master",
  accessToken: "EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU",
});
function fetchCvItems() {
  client
    .getEntries({
      content_type: "cvitem",
    })
    .then((response) => {
      cvItems.value = response.items;
      destructedCvItems.value = destructureCvItems(response.items);
    })
    .catch(console.error);
}

function destructureCvItems(items) {
  return items
    .map((element) => {
      let { fields } = element;
      let updatedElement = { ...fields };
      updatedElement.textList = fields.text.content.map((item) => {
        return {
          value: item.content[0].value,
          nodeType: item.nodeType,
        };
      });

      return updatedElement;
    })
    .sort((a, b) => (a.orderNumber < b.orderNumber ? -1 : 1));
}
onMounted(() => {
  fetchCvItems();
});
</script>
<template>
  <div class="contentWrapper">
    <h1>Cv</h1>
    <div class="body-wrapper">
      <div class="body-content">
        <div class="imgWrapper">
          <img class="cvPicture" src="../../public/images/stairs.jpg" alt />
        </div>
        <div class="cvLista">
          <div
            class="meritWrapper"
            v-for="cvCategory in destructedCvItems"
            :key="cvCategory.category"
          >
            <h4>{{ cvCategory.category }}</h4>
            <ul>
              <li v-for="item in cvCategory.textList" :key="item.orderNumber">
                <h5 v-if="item.nodeType === 'heading-5'">{{ item.value }}</h5>
                <p v-else>{{ item.value }}</p>
              </li>

              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  font-family: "Ilisarniq-Light";
  text-align: center;
  margin-bottom: 2em;
  font-size: 30px;
  @media only screen and (max-width: $mobile) {
    margin-top: 2em;
  }
}
h5 {
  font-size: 22px;
  margin-bottom: 10px;
  @media only screen and (max-width: $mobile) {
    font-size: 19px;
  }
}
p {
  margin-top: 2px;
}
ul {
  margin-bottom: 4em;
}

.meritWrapper {
  margin-top: 7em;
  text-align: left;
  @media only screen and (max-width: $mobile) {
    margin-top: 1em;
  }
}

.cvLista li {
  color: black;
  list-style: none;
  font-size: 22px;
  font-family: "Ilisarniq-LightItalic";
  margin: 0px;
  padding: 0;
  @media only screen and (max-width: $mobile) {
    font-size: 19px;
  }
}
.imgWrapper {
  display: block;
  position: relative;
  width: 100%;
  height: 80vh;
  margin: auto;
  overflow: hidden;
  @media only screen and (max-width: $mobile) {
    height: 50vh;
  }
}
.cvPicture {
  object-fit: cover;
  width: 100%;
  margin: auto;
  position: relative;
  bottom: 14%;
}

.personalDetails {
  text-align: left;
}
.personalDetails p {
  @media only screen and (max-width: $mobile) {
    /* font-size:16px; */
  }
}
.personalWrapper {
  margin: 5em;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: $mobile) {
    margin: 4em;
  }
}
a.dropDownLink {
  color: green;
}
</style>
