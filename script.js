console.log("welcome to spotify");
// initialise the variable
let songIndex=0;
let audioElement=new Audio('music/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs=[
    { songName:"runaway ,aurora",filePath:"music/1.mp3",coverPath:"covers/1.jpg"},
    { songName:"Brodha v,athma rama",filePath:"music/2.mp3",coverPath:"covers/2.jpg"},
    { songName:"faded ,Alen walker",filePath:"music/3.mp3",coverPath:"covers/3.jpg"},
    { songName:"In the end,Pagla Songs",filePath:"music/4.mp3",coverPath:"covers/4.jpg"},
    { songName:"In to your arms",filePath:"music/5.mp3",coverPath:"covers/5.jpg"},
    { songName:"see you again ,wiz khalifa",filePath:"music/6.mp3",coverPath:"covers/6.jpg"},
    { songName:"spectrum, Alen walker",filePath:"music/7.mp3",coverPath:"covers/7.jpg"},
    { songName:"what ever it takes",filePath:"music/8.mp3",coverPath:"covers/8.jpg"}

]

songItems.forEach((element,i )=> {
    
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML= songs[i].songName;
});

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
          
      element.classList.add('fa-circle-play');
      element.classList.remove('fa-circle-pause');
    })
}

Array.from( document.getElementsByClassName('songItemPlay')).forEach((element)=>{
          element.addEventListener('click',(e)=>{
            makeAllPlays();
            songIndex = parseInt(e.target.id);
           e.target.classList.remove('fa-circle-play');
           e.target.classList.add('fa-circle-pause');
           audioElement.src =`music/${songIndex+1}.mp3`;
           masterSongName.innerText = songs[songIndex].songName;
           audioElement.currentTime = 0;
           audioElement.play();
           gif.style.opacity=1;
           masterPlay.classList.remove('fa-circle-play');
           masterPlay.classList.add('fa-circle-pause');
          })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src =`music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src =`music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})