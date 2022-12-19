    <template>
  <footer class="footerWrapper">
    <p><span>Kontakta mig:</span> 070 402 46 06</p>

    <a :href="mailLogo.href">
      <img :src="mailLogo.src" />
    </a>
    <p>
      <span>evgenileonov1987@gmail.com</span>
    </p>
  </footer>
</template>
<script>
import { getLogoByName } from "@/media";
export default {
  name: "Footer",
  computed: {
    mailLogo() {
      return getLogoByName("mail");
    },
  },
};
</script>
<style lang="scss" scoped>
span {
  color: black;
  @media only screen and (max-width: $tablet) {
    display: none;
  }
}
.footerWrapper {
  position: absolute;
  width: 100%;

  height: 60px;
  background: rgb(141, 235, 141);

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: $mobile) {
    flex-wrap: wrap;
    padding: 0;
    height: 50px;
    justify-content: center;
    align-content: center;
    /*   position: fixed;
    bottom: 0; */

    p {
      font-size: 20px;
    }
  }
}

.footerWrapper img {
  height: 30px;
  margin-left: 30px;
  margin-right: 25px;

  @media only screen and (max-width: $mobile) {
  }
}
</style>




   
      