const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();

const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "./music/Song1.mp3",
    title: "Kannoram",
    artist: "Stephen Zechariah",
    imgSrc: "./img/a1.jfif",
  },
  {
    songSrc: "./music/Song2.mp3",
    title: "Nenje Nenje",
    artist: "GV Prakash",
    imgSrc: "./img/a2.jfif",
  },
  {
    songSrc: "./music/Song3.mp3",
    title: "Nesamaguren",
    artist: "Stephen Zechariah",
    imgSrc: "./img/a3.jfif",
  },
  {
    songSrc: "./music/Song4.mp3",
    title: "Oo Solriya Oo Oo solriya",
    artist: "Andrea Jeremiah",
    imgSrc: "./img/a4.jfif",
  },
  {
    songSrc: "./music/Song5.mp3",
    title: "Changes",
    artist: "xxx tentacion",
    imgSrc: "./img/a5.jfif",
  },
  {
    songSrc: "./music/Song6.mp3",
    title: "Moonlight",
    artist: "xxx tentacion",
    imgSrc: "./img/a5.jfif",
  },
  {
    songSrc: "./music/Song7.mp3",
    title: "SAD",
    artist: "xxx tentacion",
    imgSrc: "./img/a5.jfif",
  },
  {
    songSrc: "./music/Song8.mp3",
    title: "Hope",
    artist: "xxx tentacion",
    imgSrc: "./img/a5.jfif",
  },
  {
    songSrc: "./music/Song9.mp3",
    title: "Naa Ready",
    artist: "Anirudh",
    imgSrc: "./img/a.jfif",
  },
  {
    songSrc: "./music/Song10.mp3",
    title: "Pathala Pathala",
    artist: "Kamal Haasan",
    imgSrc: "./img/a7.webp",
  },
  {
    songSrc: "./music/Song11.mp3",
    title: "Porkanda Singam",
    artist: "Ravi G",
    imgSrc: "./img/a7.webp",
  },
  {
    songSrc: "./music/Song12.mp3",
    title: "Kutti Story",
    artist: "Anirudh",
    imgSrc: "./img/a8.jpg",
  },
  {
    songSrc: "./music/Song13.mp3",
    title: "Vaathi Coming",
    artist: "Anirudh",
    imgSrc: "./img/a8.jpg",
  },
  {
    songSrc: "./music/Song14.mp3",
    title: "Vaathi Raid",
    artist: "Anirudh",
    imgSrc: "./img/a8.jpg",
  },
  {
    songSrc: "./music/Song15.mp3",
    title: "Rajini Murugan",
    artist: "Siva Karthikeyan",
    imgSrc: "./img/a9.jpg",
  },
  {
    songSrc: "./music/Song16.mp3",
    title: "Un Mela Oru Kannu",
    artist: "Jithin Raj",
    imgSrc: "./img/a9.jpg",
  },
  {
    songSrc: "./music/Song17.mp3",
    title: "Enama Ippadi",
    artist: "D.Imman",
    imgSrc: "./img/a9.jpg",
  },
  {
    songSrc: "./music/Song18.mp3",
    title: "Thalapathy Thalapathy",
    artist: "Haricharan",
    imgSrc: "./img/a10.jfif",
  },
  {
    songSrc: "./music/Song19.mp3",
    title: "Vanganna vanakangana",
    artist: "Joseph Vijay",
    imgSrc: "./img/a10.jfif",
  },
  {
    songSrc: "./music/Song20.mp3",
    title: "yaar intha saalai oram",
    artist: "GV prakash",
    imgSrc: "./img/a10.jfif",
  },
];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;

mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  songImg.style.transform = `rotate(${xAxis}deg)`;
  controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});
