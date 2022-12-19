<template>
  <div class="viewWrapper">
    <h1>Hej!</h1>
    <div class="body-wrapper">
      <div class="body-content">
        <img src="images/Evgeni-turkos.jpeg" id="hej" />

        <p>
          Jag heter Evgeni Leonov och är {{ age }} år gammal. Jag utbildade mig
          till skådespelare på Teaterhögskolan i Stockholm 2007-2010. Sedan jag
          blev färdig med utbildningen har jag arbetat som frilansande
          skådespelare i olika delar av Sverige. Bl.a. på Smålands musik och
          teater och Teateri i Jönköping och på 4:e teatern i Västerås. Jag har
          medverkat i många föreställningar som varit riktade till ungdomar och
          turnerat runt om i Sverige i flera år. En av dessa föreställningar har
          varit en egenskriven monologföreställning som jag har spelat i både
          Sverige och Ryssland på svenska, ryska och spanska. Jag har även
          medverkat i film, reklam och tv-serier, bl.a. Johan Falk: Slutet, Ikea
          och Clas Ohlson reklam, Eagles säsong 3, Drugdealer och den kommande
          serien Bäckström säsong 2.
        </p>
        <p>
          På Stockholms dramatiska högskola har jag gått kurserna
          Filmskådespeleri 1 och Filmskådespeleri 2 som leddes av Matthew Allen.
          Där fick jag lära mig mer om filmmanusarbete, regi, klippning och
          filmande. Inspirerad av kurserna började jag arbeta bakom kameran. Jag
          har gjort två kampanjfilmer för Kompis Sverige, flera musikvideos till
          mitt band och en dokumentärfilm som handlar om min familjs flykt från
          Pinochetregimen i Chile.
        </p>

        <p>
          Jag sjunger, spelar och komponerar låtar i bandet Dreaming of Space
          och arbetar som musikledare på daglig verksamhet. Parallellt med mitt
          konstnärskap har jag utbildat mig till rysk – svensk kontakttolk och
          arbetar i offentlig sektor som auktoriserad tolk. Jag har även ett
          starkt samhällsengagemang och är engagerad i Kompis Sverige. Jag
          älskar att träffa nya människor, utvecklas och lära mig nya saker. Hör
          gärna av dig om du vill samarbeta.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hej",
  computed: {
    age() {
      const diff_ms = Date.now() - new Date(1987, 2, 6).getTime();
      const age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    },
  },
  metaInfo() {
    return {
      title: "Hej",
      meta: [
        {
          vmid: "description",
          name: "Hej",
          content: `Jag heter Evgeni Leonov och är ${this.age} år gammal. Jag utbildade mig
          till skådespelare på Teaterhögskolan i Stockholm 2007-2010.`,
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  background: black;
  margin-bottom: 10%;
}
</style>
