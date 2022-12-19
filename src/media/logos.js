export function getLogoByName(name) {
  return logos.find(logo => logo.name === name ) 
}
export const logos = [
      { name:"hamburger" ,
        src:"./logos/hamburger.png",
          },
        { name:"mail" ,
          href: "mailto:evgenileonov1987@gmail.com",
          src: "./logos/mail.png",
          type: "logolink"},
          
        { name:"facebook" ,
            href:"https://www.facebook.com/evgeni.leonov" ,
            src: "./logos/facebook.png",
            type: "logolink"},
        { name:"instagram",
              href:"https://www.instagram.com/gagarinleonov/" ,
              src:"./logos/instagram.png" ,
              type: "logolink"},
        { name:"spotify" ,
                href: "https://open.spotify.com/album/6WX0djbY030PdzVXdA6pSV",
                src:"./logos/spotify.png" ,
                type: "logolink"},
         {name: "youtube",
          href:"https://www.youtube.com/channel/UCkkFoTv_sk6_oVkLrV_tjrg",
          src:"./logos/youtube.png",
          type: "logolink"}
    ]