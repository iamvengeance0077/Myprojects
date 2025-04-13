let x=document.querySelector(".play-music");
function playaudio(){
    x.play()
}


function settingsnav(){
    document.querySelector(".settingsoption").style='z-index:101;';
    document.querySelector(".closebutton").style='z-index:101;';
}

function closesettingsnav(){
    document.querySelector(".settingsoption").style='z-index:0;';
    document.querySelector(".closebutton").style='z-index:0;';
}
