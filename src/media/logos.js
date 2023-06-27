export function getLogoByName(name) {
  return logos.find(logo => logo.name === name ) 
}
export const logos = [
      { name:"hamburger" ,
        src:"public/logos/hamburger.png",
          },
        { name:"mail" ,
          href: "mailto:evgenileonov1987@gmail.com",
          src: "public/logos/mail.png",
          type: "logolink"},
          
        { name:"facebook" ,
            href:"https://www.facebook.com/evgeni.leonov" ,
            src: "public/logos/facebook.png",
            type: "logolink"},
        { name:"instagram",
              href:"https://www.instagram.com/gagarinleonov/" ,
              src:"public/logos/instagram.png" ,
              type: "logolink"},
        { name:"spotify" ,
                href: "https://open.spotify.com/album/6WX0djbY030PdzVXdA6pSV",
                src:"public/logos/spotify.png" ,
                type: "logolink"},
         {name: "youtube",
          href:"https://www.youtube.com/channel/UCkkFoTv_sk6_oVkLrV_tjrg",
          src:"public/logos/youtube.png",
          type: "logolink"}
    ]