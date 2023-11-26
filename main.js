let currentLevel = 0;

let playing0 = false;
let playing1 = false;
let playing2 = false;
let playing3 = false;

var show0 = true;
var show1 = true;
var show2 = true;
var show3 = true;
var show4 = true;


let bg1, bg2, bg3;
let musicPlayed1 = false;
let musicPlayed2 = false;
let musicPlayed3 = false;
let sequence1 = ['s', 'a', 'd'];
let playerSequence1 = [];
let sequence2 = ['a', 's', 'd'];
let playerSequence2 = [];
let sequence3 = ['d', 's', 'a'];
let playerSequence3 = [];

let index1 = 0;
let intervalId1;
let index2 = 0;
let intervalId2;
let index3 = 0;
let intervalId3;

let drawRect1 = false;
let drawRect2 = false;
let drawRect3 = false;
let drawRect4 = false;
let drawRect5 = false;
let drawRect6 = false;
let drawRect7 = false;
let drawRect8 = false;
let drawRect9 = false;

//narrative part
let img1, img2, l1, imgforest, imgfire, imgwin, imgfinal;

var j, k, l;
var i, o, p;
var z, x, c;
var wind1, wind2, wind3;
var bird1, bird2, bird3;
var music1, music2, music3;
var miniaudio;
let isMiniAudioPlaying = false;

document.getElementById('sound').addEventListener('click', 
function preload() {
  miniaudio = loadSound('sound/mini.mp3');
  bg1 = loadSound('sound/1/background.mp3');
  bg1.setVolume(0.05);
  wind1 = loadSound('sound/1/wind1.mp3');
  wind2 = loadSound('sound/1/wind2.mp3');
  wind3 = loadSound('sound/1/wind3.mp3');
  wind1.setVolume(0.3);
  wind2.setVolume(0.3);
  wind3.setVolume(0.3);
  bg2 = loadSound('sound/2/background.mp3');
  bg2.setVolume(0.05);
  bird1 = loadSound('sound/2/bird1.mp3');
  bird2 = loadSound('sound/2/bird2.mp3');
  bird3 = loadSound('sound/2/bird3.mp3');
  bg3 = loadSound('sound/3/background.mp3');
  bg3.setVolume(0.05);
  music1 = loadSound('sound/3/music1.mp3');
  music2 = loadSound('sound/3/music2.mp3');
  music3 = loadSound('sound/3/music3.mp3');
  music1.setVolume(0.3);
  music2.setVolume(0.3);
  music3.setVolume(0.3);
  event.stopPropagation();
  }                                                 
);

   document.getElementById('next').addEventListener('click', function() {
     switchLevel();
  }
);

function setup() {

  img1 = loadImage('narrative/Group 1.png');
  img2 = loadImage('narrative/mini.png');
  l1 = loadImage('narrative/l1.png');
  imgforest = loadImage('narrative/forest.png');
  imgfire = loadImage('narrative/fire.png');
  imgwin = loadImage('narrative/win.png');
  imgfinal = loadImage('narrative/arrive.png');
  // originalWidth1 = img1.width;
  // originalHeight1 = img1.height;
  // originalWidth2 = img2.width; 
  // originalHeight2 = img2.height;
  // // Resize the image proportionally to fit the screen
  // resizeImageToFitScreen();
  
 
  if (currentLevel === 0) {
    setuplevel0();   
  } else if (currentLevel === 1) {
    setuplevel1();
  } else if (currentLevel === 2) {
    setuplevel2();
  } else if (currentLevel === 3) {
    setuplevel3();
  } else if (currentLevel === 4) {
    setuplevel4();
  } else if (currentLevel === 5) {
    setuplevel5();
  } else if (currentLevel === 6) {
    setuplevel6();
  } else if (currentLevel === 7) {
    setuplevel7();
  }
}

function draw() {
  if (currentLevel === 0) {
    drawlevel0();
  } else if (currentLevel === 1) {
    drawlevel1();
  } else if (currentLevel === 2) {
    drawlevel2();
  } else if (currentLevel === 3) {
    drawlevel3();
  } else if (currentLevel === 4) {
    drawlevel4();
  } else if (currentLevel === 5) {
    drawlevel5();
  } else if (currentLevel === 6) {
    drawlevel6();
  } else if (currentLevel === 7) {
    drawlevel7();
  }
}

function setuplevel0() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);

}

function setuplevel1() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);
}

function setuplevel2() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);
}

function setuplevel3() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);
}

function setuplevel4() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);
}

function setuplevel5() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);
}

function setuplevel6() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);
}

function setuplevel7() {
  createCanvas(windowWidth-20, windowHeight - 60);
  background(0);
}

function instruction0() {
  image(img1, windowWidth/3,windowHeight/4);
}

function drawlevel0() {
  background(0);
  if (show0 == true){
    instruction0();
  } 
}

function drawlevel1() {
  background(0);
  image(img2, windowWidth/3,windowHeight/8);
    if (!miniaudio.isPlaying() && !isMiniAudioPlaying) {
    miniaudio.play();
    miniaudio.setVolume(0.3);
    isMiniAudioPlaying = true;
    }    
}

function drawlevel2() {
  background(0);
  image(l1, windowWidth/3,windowHeight/8);
}

function drawlevel3() {
  background(0);
  
  if (playing1) {
    // Check if the player sequence is correct
    if (arraysEqual1()) {
      image(imgwin, windowWidth/3,windowHeight/4);
    }
  }

  // Left rectangle
  if (drawRect1) {
    j = map(wind1.currentTime(), 0, wind1.duration() , 0, height);
    fill(105, 100);
    rect(0, 0, 200, j);
  }
  
  // Middle rectangle
  if (drawRect2) {
    k = map(wind2.currentTime(), 0, wind2.duration() , 0, height);
    fill(135, 100);
    rect(200, 600, 200, -k);
  }
  
  // Right rectangle
  if (drawRect3) {
    l = map(wind3.currentTime(), 0, wind3.duration() , 0, height);
    fill(165, 100);
    rect(400, 0, 200, l);
  }
}

function drawlevel4() {
  background(0);
  image(imgforest, windowWidth/3,windowHeight/4);
}

function drawlevel5() {
  background(0);
  
  if (playing2) {
    // Check if the player sequence is correct
    if (arraysEqual2()) {
      image(imgwin, windowWidth/3,windowHeight/4);
    }
  }

  // Top rectangle
  if (drawRect4) {
    i = map(bird1.currentTime(), 0, bird1.duration() , 0, width);
    fill(105, 100);
    rect(0, 0, i, 200);
  }
  
  // Middle rectangle
  if (drawRect5) {
    o = map(bird2.currentTime(), 0, bird2.duration() , 0, width);
    fill(135, 100);
    rect(600, 200, -o, 200);
  }
  
  // Bottom rectangle
  if (drawRect6) {
    p = map(bird3.currentTime(), 0, bird3.duration() , 0, width);
    fill(165, 100);
    rect(0, 400, p, 200);
  }
}

function drawlevel6() {
  background(0);
  image(imgfire, windowWidth/3,windowHeight/4);
}

function drawlevel7() {
  background(0);

  if (playing3) {
    // Check if the player sequence is correct
    if (arraysEqual3()) {
      image(imgfinal, windowWidth/3,windowHeight/4);
    }
  }

  // Top rectangle
  if (drawRect7) {
  z = map(music1.currentTime(), 0, music1.duration(), 0, 300);
  push();
  fill(z/2, 200);
  translate(width/2, 150);
  rectMode(CENTER);
  rotate(40);
  rect (0,0,z,z);
  pop();
  }
  
  // Middle rectangle
  if (drawRect8) {
  x = map(music2.currentTime(), 0, music2.duration(), 0, 300);
  push();
  fill(x/2, 200);
  translate(width/2, 300);
  rectMode(CENTER);
  rotate(40);
  rect (0,0,x,x);
  pop();
  }
  
  // Bottom rectangle
  if (drawRect9) {
  c = map(music3.currentTime(), 0, music3.duration(), 0, 300);
  push();
  fill(c/2, 200);
  translate(width/2, 450);
  rectMode(CENTER);
  rotate(40);
  rect (0,0,c,c);
  pop();
  }
}

function playWind(key) {
  if (currentLevel === 3) {
  switch (key) {
    case 'a':
      wind1.play();
      break;
    case 's':
      wind2.play();
      break;
    case 'd':
      wind3.play();
      break;
    }
  }
}

function playBird(key) {
  if (currentLevel === 5) {
  switch (key) {
    case 'a':
      bird1.play();
      break;
    case 's':
      bird2.play();
      break;
    case 'd':
      bird3.play();
      break;
    }
  }
}

function playMusic(key) {
  if (currentLevel === 7) {
  switch (key) {
    case 'a':
      music1.play();
      break;
    case 's':
      music2.play();
      break;
    case 'd':
      music3.play();
      break;
    }
  }
}

function arraysEqual1() {
  console.log(playerSequence1.length);
  for (let i = 0; i < playerSequence1.length; i++) {
    if (sequence1[i] !== playerSequence1[i]) {
      let key = playerSequence1[i];
      playerSequence1 = [];
      if(key === sequence1[0]) {
        playerSequence1.push(key);
      }
      return false;
    }
  }

  if (sequence1.length !== playerSequence1.length) return false;
  return true;
}

function arraysEqual2() {
  console.log(playerSequence2.length);
  for (let i = 0; i < playerSequence2.length; i++) {
    if (sequence2[i] !== playerSequence2[i]) {
      let key = playerSequence2[i];
      playerSequence2 = [];
      if(key === sequence2[0]) {
        playerSequence2.push(key);
      }
      return false;
    }
  }

  if (sequence2.length !== playerSequence2.length) return false;
  return true;
}

function arraysEqual3() {
  console.log(playerSequence3.length);
  for (let i = 0; i < playerSequence3.length; i++) {
    if (sequence3[i] !== playerSequence3[i]) {
      let key = playerSequence3[i];
      playerSequence3 = [];
      if(key === sequence3[0]) {
        playerSequence3.push(key);
      }
      return false;
    }
  }

  if (sequence3.length !== playerSequence3.length) return false;
  return true;
}

function playSequence1() {
  index1 = 0;
  intervalId1 = setInterval(function () {
    if (index1 < sequence1.length) {
      let key = sequence1[index1];
      playWind(key);
      index1++;
    } else {
      clearInterval(intervalId1);
    }
  }, 2000);
}

function playSequence2() {
  index2 = 0;
  intervalId2 = setInterval(function () {
    if (index2 < sequence2.length) {
      let key = sequence2[index2];
      playBird(key);
      index2++;
    } else {
      clearInterval(intervalId2);
    }
  }, 1000);
}

function playSequence3() {
  index3 = 0;
  intervalId3 = setInterval(function () {
    if (index3 < sequence3.length) {
      let key = sequence3[index3];
      playMusic(key);
      index3++;
    } else {
      clearInterval(intervalId3);
    }
  }, 3000);
}

function replaySequence1() {
  clearInterval(intervalId1); 
  playSequence1(); 
}

function replaySequence2() {
  clearInterval(intervalId2); 
  playSequence2(); 
}

function replaySequence3() {
  clearInterval(intervalId3); 
  playSequence3(); 
}

function mouseClicked(){
  
if (currentLevel === 3) {
    if (!playing1) {
      playing1 = true;
      show1 = false;
      if (!musicPlayed1) {
        bg1.loop();
        musicPlayed1 = true;
      }
    playerSequence1 = [];
    playSequence1();
    }
  }
  if (currentLevel === 5) {
    if (!playing2) {
      playing2 = true;
      show2 = false;
      if (!musicPlayed2) {
        bg2.loop();
        musicPlayed2 = true;
      }
    playerSequence2 = [];
    playSequence2();
    }
  }
  if (currentLevel === 7) {
    if (!playing3) {
      playing3 = true;
      show3 = false;
      if (!musicPlayed3) {
        bg3.loop();
        musicPlayed3 = true;
      }
      playerSequence3 = [];
      playSequence3();
    }
  }
}

function switchLevel() {
  currentLevel++;
  
  if (currentLevel === 1) {   
    if (!playing0) {
    show0 = false;
  }
}
 
  if (currentLevel === 2) {   
    miniaudio.stop();
}
  
  if (currentLevel === 3) {

    // Add event listeners to the buttons
  document.getElementById('buttonA').addEventListener('click', function() {
      playWind('a');
      playerSequence1.push('a');
      drawRect1 = true;
  });
  document.getElementById('buttonS').addEventListener('click', function() {
      playWind('s');
      playerSequence1.push('s');
      drawRect2 = true;
  });
  document.getElementById('buttonD').addEventListener('click', function() {
      playWind('d');
      playerSequence1.push('d');
      drawRect3 = true;
  });
  document.getElementById('buttonB').addEventListener('click', function() {
    replaySequence1();
  });
  }
  
  if (currentLevel === 4) {
    bg1.stop();
    wind1.stop();
    wind2.stop();
    wind3.stop();
    clearInterval(intervalId1);
  }

  if (currentLevel === 5) {
    //add new eventlistener
    document.getElementById('buttonA').addEventListener('click', function() {
      playBird('a');
      playerSequence2.push('a');
      drawRect4 = true;
    });
    document.getElementById('buttonS').addEventListener('click', function() {
      playBird('s');
      playerSequence2.push('s');
      drawRect5 = true;
    });
    document.getElementById('buttonD').addEventListener('click', function() {
      playBird('d');
      playerSequence2.push('d');
      drawRect6 = true;
    });
    document.getElementById('buttonB').addEventListener('click', replaySequence2);
  }

    if (currentLevel === 6) {
    bg2.stop();
    bird1.stop();
    bird2.stop();
    bird3.stop();
    clearInterval(intervalId2);
}

    if (currentLevel === 7) {
    //add new eventlistener
    document.getElementById('buttonA').addEventListener('click', function() {
      playMusic('a');
      playerSequence3.push('a');
      drawRect7 = true;
    });
    document.getElementById('buttonS').addEventListener('click', function() {
      playMusic('s');
      playerSequence3.push('s');
      drawRect8 = true;
    });
    document.getElementById('buttonD').addEventListener('click', function() {
      playMusic('d');
      playerSequence3.push('d');
      drawRect9 = true;
    });
    document.getElementById('buttonB').addEventListener('click', replaySequence3);
    document.getElementById('next').addEventListener('click', function() {
    window.location.href = 'https://bramvankooten.github.io/VG4R/';});
  } 
}
