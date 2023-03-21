import { videos } from "./data.js";

const videoIdStg = JSON.parse(sessionStorage.getItem("videoId")) || 0;
const videoId = Number(videoIdStg);
console.log(videoId);

const reproductor = videos.find(item => item.id === videoId);

const videoContenedor = document.querySelector(".video");
videoContenedor.innerHTML = `${reproductor.reproduction}`