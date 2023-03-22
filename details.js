import { videos } from "./data.js";

const videoIdStg = JSON.parse(sessionStorage.getItem("videoId")) || 0;
const videoId = Number(videoIdStg);
console.log(videoId);

const reproductor = videos.find(item => item.id === videoId);

const videoContenedor = document.querySelector(".video");
videoContenedor.innerHTML = `${reproductor.reproduction}`

const profile = document.querySelector(".chanelProfile")
profile.innerHTML = `
    <img class="chanel" src=${reproductor.image} >
`

const videoDetails = document.querySelector(".characteristics");
videoDetails.innerHTML = `
<h1 class="titleVideo">${reproductor.title}</h1>
<div class="videoInfo">
<p>${reproductor.views} - </p>
<p>${reproductor.date}</p>
</div>
`;

const PintarvideosSugeridos = (contenedor, listaVideos, id) => {

    const sugeridosContainer = document.createElement("section");

    sugeridosContainer.classList.add("suggested");

    const videosSugeridos = listaVideos.filter((element) => element.id !== id);

    videosSugeridos.forEach(element => {
        sugeridosContainer.innerHTML += `
        <article class="videoCard">
        <figure class="miniaturaList" ><img class="miniaturaList" src=${element.miniatura} alt=${element.title} /></figure>
        <section class="infoList" >
          <h3>${element.title}</h3>
            <div>
             
             <span>${element.chanel}</span>
            </div>
        </section>
        </article>
        `;

        contenedor.appendChild(sugeridosContainer);
    });
}

document.addEventListener(`DOMContentLoaded`, () =>{
    const videoContent = document.querySelector(".sugeridos");
    PintarvideosSugeridos(videoContent, videos, videoId);
   });
