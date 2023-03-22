import { videos } from "./data.js";

console.log(videos);

const contenedor = document.querySelector(".videoContainer");
console.log(contenedor);

const printVideos = (contenedor, videos) => {
    contenedor.innerHTML = "";

    videos.forEach((Element) => {
        contenedor.innerHTML += `
        <article class="videoCard">
        <div class="article__video">
        <img class="iframe"  src="${Element.miniatura}" alt="${Element.title}" name=${Element.id}>
           <div class="time" >${Element.duration}</div>
         </div> 
         <div class="footer">
         <figure class="profile" > <img src=${Element.image}> </figure>
         <div class="infoContents">
         <h2 class="videoTitle" name=${Element.id} >${Element.title}</h2>
         <p>${Element.chanel}</p>
         <div class="information">
         <p>${Element.views}</p>
         <p>${Element.date}<p>
         </div>
         </div>
         </div>
        </article>
        `
        
    })
};

document.addEventListener(`DOMContentLoaded`, () =>{
    printVideos(contenedor, videos);
})

document.addEventListener(`click`, (event) => {
    if(event.target.classList.contains("videoTitle") || event.target.classList.contains("iframe")){
        console.log(event.target);

        const id = event.target.getAttribute("name");
        sessionStorage.setItem("videoId", JSON.stringify(id));
        window.location.href="details.html";
    }
})


// Para filtrar por categorias

const filter = ["all"];

videos.forEach(element => {
    if(!filter.includes(element.category)){
        filter.push(element.category);
    }
})

filter.forEach(element => {
    const filtro = document.getElementsByName(element)[0];

    filtro.addEventListener("click", () => {
        const videosFiltrados = 
        element === "all"
        ? videos
        : videos.filter(
            (item) => item.category === element
             );

             printVideos(contenedor, videosFiltrados)
    })
})
