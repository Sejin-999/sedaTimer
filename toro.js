//defalt value setting  
let whoct = 1;
let state = 0;
let time = 60;
var timerid = 0;
let sukYN = 2;
let sukNN = 2;
let btnCH = 0;
/*
let sukBtn = document.getElementById('sukyee-title');
sukBtn.addEventListener('click',sukBtnCH);
function sukBtnCH(){
  let sukBtnCHvar = document.getElementById('sukyee'); 
  if(btnCH === 0 ){
    sukBtnCHvar.innerHTML=``;
  }
}
*/
// who check start
/*누가 발언하는지 체크 + 시간확인*/
function whocheck(){
  let who = document.getElementById("title-who");
  switch (whoct){
    case 1 : who.innerHTML =`<span id="title-who-agree">찬성 1 입론 <span class="title-who-agreeM">시간 : 3분</span></span>`; whoct++; break;
    case 2 : who.innerHTML =`<span id="title-who-agree">반대 2 질의 <span class="title-who-agreeM">시간 : 2분</span></span>`; whoct++; break;
    case 3 : who.innerHTML =`<span id="title-who-agree">반대 1 입론 <span class="title-who-agreeM">시간 : 3분</span></span>`; whoct++; break;
    case 4 : who.innerHTML =`<span id="title-who-agree">찬성 1 질의 <span class="title-who-agreeM">시간 : 2분</span></span>`; whoct++; break;
    case 5 : who.innerHTML =`<span id="title-who-agree">찬성 2 입론 <span class="title-who-agreeM">시간 : 3분</span></span>`; whoct++; break;
    case 6 : who.innerHTML =`<span id="title-who-agree">반대 1 질의 <span class="title-who-agreeM">시간 : 2분</span></span>`; whoct++; break;
    case 7 : who.innerHTML =`<span id="title-who-agree">반대 2 입론 <span class="title-who-agreeM">시간 : 3분</span></span>`; whoct++; break;
    case 8 : who.innerHTML =`<span id="title-who-agree">찬성 2 질의 <span class="title-who-agreeM">시간 : 2분</span></span>`; whoct++; break;
    case 9 : who.innerHTML =`<span id="title-who-agree">자유토론 <span class="title-who-agreeM">시간 : 6분</span></span>`; whoct++; break;
    case 10 : who.innerHTML =`<span id="title-who-agree">찬성 1 최종발언 <span class="title-who-agreeM">시간 : 1분</span></span>`; whoct++; break;
    case 11 : who.innerHTML =`<span id="title-who-agree">찬성 2 최종발언 <span class="title-who-agreeM">시간 : 1분</span></span>`; whoct++; break;
    case 12 : who.innerHTML =`<span id="title-who-agree">반대 1 최종발언 <span class="title-who-agreeM">시간 : 1분</span></span>`; whoct++; break;
    case 13 : who.innerHTML =`<span id="title-who-agree">반대 2 최종발언 <span class="title-who-agreeM">시간 : 1분</span></span>`; whoct++; break;
    case 14 : who.innerHTML =`<span id="title-who-agree">고생하셨습니다!</span>`; whoct++; break;
  }
  if(whoct <1 || whoct >14){
    alert("토론이 마무리 되었습니다.");
  }
}
//who check end

//sukyee timer start
function timerStart(){
  state = 1;
  decrement();
}

function timerReset(){
  time=61;
  document.getElementById("timeset").innerHTML=`<p id="timeset">${min}:${sec}</p>`
}

function increment(){
  if(state === 1){
    timerid =  setTimeout(() => {
      time++;
      var min = Math.floor(time % 3600 /60);
      var sec = time%3600%60;
      if(min <10){
       min = "0" + min; 
      }if(sec <10){
        sec = "0" + sec;
      }
      document.getElementById("timeset").innerHTML=`<p id="timeset">${min}:${sec}</p>`
      increment();
    }, 1000);
  }
}

function decrement(){
  if(state === 1){
    timerid =  setTimeout(() => {
      time--;
      var min = Math.floor(time % 3600 /60);
      var sec = time%3600%60;
      if(min <10){
       min = "0" + min; 
      }if(sec <10){
        sec = "0" + sec;
      }
      document.getElementById("timeset").innerHTML=`<p id="timeset">${min}:${sec}</p>`
      if(time === 10){
        alert("10초남았습니다.");
      }else if(time < 0){
          document.getElementById("timeset").innerHTML = '<p id="timeset">종료되었습니다!</p>'
        }
      else{
          decrement();
      }
    }, 1000);
  }
}


// sukyee timer end

// sukyee check count start

let sukY = document.getElementById('sukyee-check-btn-Y');
let sukN = document.getElementById('sukyee-check-btn-N');


sukY.addEventListener('click',sukCY);

sukN.addEventListener('click',sukCN);

function sukCY(){
  if(sukYN <= 0 ){
    alert("찬성팀 숙의시간 사용완료");
  }
  else{
    sukYN--;
    sukY.innerText = `${sukYN}`;
  }
}

function sukCN(){
  if(sukNN <= 0 ){
    alert("반대팀 숙의시간 사용완료");
  }
  else{
    sukNN--;
    sukN.innerText = `${sukNN}`;
  }
}

//sukyee check count end