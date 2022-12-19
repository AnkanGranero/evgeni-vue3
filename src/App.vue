
<template>
  <div class="appWrapper">
    <HeaderComponent />
    <div class="routerViewWrapper">
      <RouterView />
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue";
/* import BackToTop from "./components/BackToTop.vue"; */
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
    /*     BackToTop, */
    Footer,
  },
  metaInfo() {
    return {
      title: "Evgeni-Leonov",
      meta: [
        {
          vmid: "description",
          name: "Evgeni Leonovs hemsida",
          content: "hemsida till skådespelare/musiker/regissör Evgeni Leonov",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.body-content {
  text-align: left;
  width: 50%;
  padding: 20px;
  align-self: center;
  overflow: hidden;
  margin-bottom: 10%;
  color: black;
  @media only screen and (max-width: $mobile) {
    width: 90%;
  }
}

.videoImg {
  width: 768px;
  height: 432px;
}

#aktuellt {
  object-position: 0% 20%;
  opacity: 0.8;
}
//kolla om dessa behövs
.viewWrapper {
  display: inline-block;
  width: 100%;
  @media only screen and (min-width: $desktop) {
    min-height: 1900px;
  }
}
.appWrapper {
  position: relative;
  min-height: 100%;
  overflow: hidden;
}

.routerViewWrapper {
  margin-bottom: 0;
  margin-top: 8%;
  @media only screen and (max-width: $tablet) {
  }
  @media only screen and (max-width: $mobile) {
    margin-top: 120px;
    margin-bottom: 0;
  }
}
.body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0%;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
}
</style>
