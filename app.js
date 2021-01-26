function change(){
    document.querySelector("h1").innerHTML = "Created by S M Jishanul Islam";
}

function changeFace(){
    let sum = 0;
    let face1 = Math.floor(Math.random() * 6 + 1);
    let face2 = Math.floor(Math.random() * 6 + 1);
    sum = face1 + face2;
    document.querySelector("#dice").src = `images/${face1}.png`;
    document.querySelector("#dice2").src = `images/${face2}.png`;
    if(face1 > face2){
        document.querySelector(".para").innerHTML = `Player 1 wins! Total of two : ${sum}`;
    }else if(face1 < face2){
        document.querySelector(".para").innerHTML = `Player 2 wins! Total of two : ${sum}`;
    }else if(face1 === face2){
        document.querySelector(".para").innerHTML = `Draw! Total of two : ${sum}`;
    }
}