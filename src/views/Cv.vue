<template>
  <div class="contentWrapper">
    <h1>Cv</h1>
    <div class="body-wrapper">
      <div class="body-content">
        <div class="imgWrapper">
          <img class="cvPicture" :src="pictures[6].src" alt />
        </div>
        <div class="cvLista">
          <div class="personalWrapper">
            <div class="personalDetails">
              <p>Född: 1987.03.06</p>
              <p>Telefon: 070-402 46 06</p>
              <p>E-mail: evgenileonov1987@gmail.com</p>
            </div>
          </div>

          <div class="meritWrapper">
            <h4>Utbildning</h4>
            <div>
              <p>
                Auktoriserad rysk – svensk kontakttolk. Kammarkollegiet 2021
              </p>
              <p>
                Filmskådespeleri 2, 30 hp Stockholms dramatiska högskola
                2018-2019
              </p>
              <p>
                Åsa folkhögskola: grundutbildning rysk – svensk kontakttolk
                2017-2018
              </p>
              <p>
                Filmskådespeleri 1 30 hp Stockholms dramatiska högskola 2014
              </p>
              <p>
                Teaterhögskolan i Stockholm 2007-2010 (skådespelarprogrammet)
              </p>
              <p>Studiefrämjandet: Monologkurs 2007</p>
              <p>St:Eriks gymnasium, teaterlinjen 2003-2006</p>
            </div>
          </div>
          <div class="meritWrapper">
            <h4>Teater</h4>

            <div>
              <h5>Vad ska vi göra idag?</h5>
              <p>UR Roll: Bengt. Regi: Johanna Oskarsson. 2019</p>
            </div>
            <div>
              <h5>20 sätt att överleva högstadiet</h5>
              <p>
                4:e teatern.Roller: Överlevare/Evgeni Leonov Regi: Lotta
                Östlin-Stenshäll. 2015
              </p>
            </div>
            <div>
              <h5>Vi som blev kvar</h5>
              <p>
                Teateri. Roller: Bloggaren, Wilhelm, Ivan. Regi: Anna Sjövall
                2015
              </p>
            </div>
            <div>
              <h5>LANA 24-7</h5>
              <p>
                Teateri. Roller: Evgeni Leonov, Pappan, Roboten, Lillasystern.
                Regi: Vera Veljovic 2015
              </p>
            </div>

            <div>
              <h5>Det Värdefulla</h5>
              <p>Teateri. Roll: Sam. Regi: Gunilla Johansson 2013</p>
            </div>
            <div>
              <h5>Flight To Santiago</h5>
              <p>Teateri. Roll: E. Regi: Evgeni Leonov 2012</p>
            </div>
            <div>
              <h5>Som glöd under snö</h5>
              <p>
                Teateri. Roll: Peppo ”Per-Erik”. Regi: Maja Salomonsson 2011
              </p>
            </div>

            <div>
              <h5>Måsen</h5>
              <p>
                Smålands musik och teater. Roll: Konstantin Treplev. Regi: Leif
                Adolfsson 2010
              </p>
            </div>
            <div>
              <h5>Melancholia</h5>
              <p>
                Slutproduktion på Teaterhögskolan i Stockholm. Roll: Herr Glas.
                Regi: Ellen Lamm 2010
              </p>
            </div>
            <div>
              <h5>Swedish history X</h5>
              <p>
                Slutproduktion på Teaterhögskolan i Stockholm. Roller: Bagaren,
                Kung Erik, Nils i Söderby, Agda, Klas Tott, Ankarström. Regi:
                Pontus Stenshäll 2009
              </p>
            </div>

            <div>
              <h5>Henrik och Pernille</h5>
              <p>
                Medevi brunnsteater. Roller: Arv, Präst Regi: Per Holmberg 2008
              </p>
            </div>

            <h4>Tv och Film</h4>

            <div v-for="film in tvOchFilm" :key="film.header">
              <h5>{{ film.header }}</h5>
              <p>{{ film.body }}</p>
            </div>
          </div>
          <div class="meritWrapper">
            <h4>Regi</h4>
            <div v-for="merit in regi" :key="merit.title">
              <h5>
                {{ merit.title }}
              </h5>
              <p>
                {{ merit.body }} <span> {{ merit.year }}</span>
              </p>
            </div>
          </div>
          <div class="meritWrapper">
            <h4>Dokumentär</h4>
            <div>
              <h5>Vi var de som åkte</h5>
              <p>
                Skrivit manus, regisserat och klippt dokumentärfilmen ”Vi var de
                som åkte” som handlar om mina morföräldrar som flydde från Chile
                efter militärkuppen den 11 september 1973 till Sverige. 2021
              </p>
            </div>
            <h4>Radioteater</h4>
            <div>
              <h5>Näsan</h5>
              <p>
                Roller: Alla roller utom sjuksystern. Regi: Homero Alvarez. 2016
              </p>
            </div>
          </div>
          <div class="meritWrapper">
            <h4>Tolk</h4>
            <div>
              <p>Arbetar som kontakttolk för:</p>
              <p>Transvoice 2018 – nuvarande</p>
              <p>Språkservice 2019 – nuvarande</p>
            </div>
          </div>
          <div class="meritWrapper">
            <h4>Musik:</h4>
            <div>
              <p>Sjunger och komponerar låtar i bandet Dreaming of Space.</p>
              <p>Musikledare på Bambi. 2017 – nuvarande</p>
              <p>
                Komponerade musiken till Bara va kompis för Kompis Sverige. 2019
              </p>
              <p>
                Komponerade musiken till 4:e teaterns föreställning 20 sätt att
                överleva högstadiet. 2015
              </p>
            </div>
          </div>
          <div class="meritWrapper">
            <h4>Extra jobb</h4>
            <div>
              <p>Ledare på LSS läger Tallkrogen 2017, 2018, 2019</p>
              <p>Lekjumpaledare Stockholm stad 2008-2016</p>
              <p>Lärare och fritidsvikarie på Vikarieförmedlingen 2013</p>
              <p>Fritidsvikarie Sundbyberg kommun 2007</p>
              <p>Tidningsutdelare Stockholm city 2006 – 2007</p>
            </div>
          </div>
          <div class="meritWrapper">
            <h4>Övrigt</h4>
            <div>
              <p>Har ryska och spanska som modersmål.</p>
              <p>
                Varit Ersättare i Vård och omsorgsnämnden i Vänsterpartiet
                Sollentuna 2019
              </p>
              <p>EU-valledare för Vänsterpartiet i Sollentuna 2019</p>
              <p>Arbetat som volontär för Kompis Sverige.</p>
              <p>Driver den ideella föreningen Scenkonst nu.</p>
              <p>Spelar akustisk gitarr och piano.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pictures } from "@/media";
export default {
  name: "Cv",
  data() {
    return {
      pictures,
      // lägg så småningom in alla olika kategorier här istället för i markup
      tvOchFilm: [
        {
          header: "Save little William",
          body: `Roll: Utomjording. Regi: Aleksei Kokorin. Gerasimov Institute of Cinematography 2021`,
        },
        {
          header: "The Playlist",
          body: `Roll: Kontorsanställd. Regi: Per-Olav Sørensen. Yellowbird 2022`,
        },

        {
          header: "Motståndaren",
          body: `Roll: Rysk brottartränare (Voice over) Regi: Milad Alami.
                 Tangy 2022`,
        },
        {
          header: "Clas Ohlson reklam 3",

          body: "Roll: Clas Ohlson anställd. Regi: Tom Malmros BFR 2021",
        },
        {
          header: "Clas Ohlson reklam 2",
          body: "Roll: Clas Ohlson anställd. Regi: Tom Malmros BRF 2021",
        },

        {
          header: "Clas Ohlson reklam",
          body: "Roll: Clas Ohlson anställd. Regi: Tom Malmros BRF 2021",
        },
        {
          header: "Bäckström säsong 2",
          body: `
          Roll: Tsar Nikolaj II. Regi: Andreas Öhman.
          Yellowbird, ARD Degeto och Film i Väst 2022.`,
        },
        {
          header: "Drugdealer",
          body: `
          Roll: Knarklangare från Abchazien.
          Manus: Jonathan Unge och Isabella Rodriguez.
          Regissör: Isabella Rodriguez.
          French quarter film 2021`,
        },
        {
          header: "Eagels säsong 3",
          body: `
          Roll: Bartender
          Regi: Carl-Petter Montell
          New Stories 2021`,
        },
        {
          header: "Hyvlingsfällan",
          body: `Roll: Programledare Regi: Stefan Wrenfelt 2018`,
        },
        {
          header: "Johan Falk: Slutet",
          body: `Strix drama Roll: Kaganovich. Regi: Rikard Holm. 2015`,
        },
        {
          header: "Ikea (reklamfilm)",
          body: `Roll: Killen med chokladen. Regi: Jens Jonsson 2014`,
        },
        {
          header: "Kardo",
          body: `VGIK (Ryska filmhögskolan) Roll: Rysktalande man. Regi: Svetlana
                Sigaleva 2012`,
        },
        {
          header: "Aphelium",
          body: `Roll: Självmordsbombare. Regi: Mikis Mazarakiz 2006`,
        },
        {
          header: "Momentum (Kortfilm)",
          body: `Roll: Ung kille. Regi: Malin Berg, Andreas Tillnert och Fabian
                Yanez 2004`,
        },
        {
          header: "The Bumblebee (Kortfilm)",
          body: `Ung kille. Regi Mikis Mazarakiz 2003`,
        },
      ],
      regi: [
        {
          title: "Ge inte upp",
          body: `Regisserat och klippt videon till Dreaming of Space låten Ge
                inte upp i samarbete med Andreas Granér.`,
          year: "2019",
        },
        {
          title: "Bara vara vän",
          body: `   Regisserat, filmat och klippt kampanjfilmen Bara vara kompis i
                samarbete med Elina Blomberg till Kompis Sverige.`,
          year: "2019",
        },
        {
          title: "Frivilliga familjehem",
          body: `Regisserat och filmat en informationsfilm för Frivilliga
                familjehem tillsammans med Lina. E Johansson.`,
          year: "2018",
        },
        {
          title: "Jag är kompis",
          body: `Regisserat, filmat och klippt kampanjfilmen Jag är kompis i
                samarbete med Elina Blomberg till Kompis Sverige. `,
          year: "2017",
        },
        { title: "", body: ``, year: "" },
        { title: "", body: ``, year: "" },
      ],
    };
  },
  metaInfo() {
    return {
      title: "CV",
      meta: [
        {
          vmid: "description",
          name: "CV",
          content: "CV of actor/musician/film maker Evgeni Leonov",
        },
      ],
    };
  },
};
</script>

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
