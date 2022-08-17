var instB = new Image();
var faceB = new Image();
var twB = new Image();
var spB = new Image();
var youB = new Image();
var whatB = new Image();
var instW = new Image();
var faceW = new Image();
var twW = new Image();
var spW = new Image();
var youW = new Image();
var whatW = new Image();

var logoB = new Image();
var logoW = new Image();

var traco = new Image();

instB.src = 'static/img/instagram-black.svg';
faceB.src = 'static/img/facebook-black.svg';
twB.src = 'static/img/twitter-black.svg';
spB.src = 'static/img/spotify-black.svg';
youB.src = 'static/img/youtube-black.svg';
whatB.src = 'static/img/whatsapp-black.svg';
instW.src = 'static/img/instagram-white.svg';
faceW.src = 'static/img/facebook-white.svg';
twW.src = 'static/img/twitter-white.svg';
spW.src = 'static/img/spotify-white.svg';
youW.src = 'static/img/youtube-white.svg';
whatW.src = 'static/img/whatsapp-white.svg';

logoB.src = 'static/img/logo-header-black.png'
logoW.src = 'static/img/logo-header-white.png'

traco.src = 'static/img/traco.png'

var array_fonts = [];

function makeArray(){
    array_fonts = [];
    array_fonts[0] = {fontB : faceB, fontW : faceW, x:30, y:30, black: false, linkText:"https://www.facebook.com/CentroUniversitarioUnifacvest"}
    array_fonts[1] = {fontB : twB,   fontW : twW,   x:60, y:30, black: false, linkText:"https://twitter.com/UNIFACVESTPLAY"}
    array_fonts[2] = {fontB : instB, fontW : instW, x:90, y:30, black: false, linkText:"https://www.instagram.com/unifacvestplay"}
    array_fonts[3] = {fontB : youB,  fontW : youW,  x:120,y:30, black: false, linkText:"https://www.youtube.com/channel/UCFWHKim0mysvaDrwBIM5NIA"}
    array_fonts[4] = {fontB : whatB, fontW : whatW, x:150,y:30, black: false, linkText:"https://web.whatsapp.com/send?phone=554932254114"}
    array_fonts[5] = {fontB : spB,   fontW : spW,   x:180,y:30, black: false, linkText:"https://open.spotify.com/show/5VQBdaklhIoCHRKtr6nEb2"}
    array_fonts[6] = {fontB : traco, fontW : traco, x:215,y:30, black: false, linkText:""}
    array_fonts[7] = {fontB : logoB, fontW : logoW, x:230,y:30, black: false, linkText:"https://www.unifacvest.edu.br"}

}

function makeArray2(){
    array_inLink = [];
    array_inLink[0] = {inLink: false}
    array_inLink[1] = {inLink: false}
    array_inLink[2] = {inLink: false}
    array_inLink[3] = {inLink: false}
    array_inLink[4] = {inLink: false}
    array_inLink[5] = {inLink: false}
    array_inLink[6] = {inLink: false}
    array_inLink[7] = {inLink: false}

}

makeArray();
makeArray2();

const canvas2 = document.getElementById('cnv');
const ctx3 = canvas2.getContext('2d');
const image = document.getElementById('1');

var blackOpaque = "rgba(45,62,80,0.09)";
var blackOpaque2 = "rgb(226,53,58)";
var x = 0;
var y = 0;
var starttime = 2

var box7 = new Image();
box7.src = 'static/img/11.fw.png';

var box8 = new Image();
box8.src = 'static/img/10.png';

var box9 = new Image();
box9.src = 'static/img/16.fw.png';

var canvas = document.getElementById("cnv");
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
var ctx    = canvas.getContext("2d");

function fillBlack(ctx) {
  ctx.beginPath();
  ctx.rect(30, 0, canvas.width, 35);
  ctx.fillStyle = blackOpaque;
  ctx.fill();
}

function fillBlack2(ctx) {
  ctx.beginPath();
  ctx.rect(30, 0, canvas.width, 45);
  ctx.fillStyle = blackOpaque2;
  ctx.fill();
}

var left = 0;
var onRight = false;
window.left = canvas.width;

function drawSquare(ctx, fromRight, dist, duration,timestamp, fromTop) {
    var runtime = timestamp - starttime    
    if (x < 2){
        var top = fromTop !== undefined ? fromTop : canvas.height / 2 - (box9.width / 2);
        ctx.drawImage(box7,0,0);
        ctx.drawImage(box9,fromRight,top);
        
        if ( !onRight && window.left >= 30) {
            window.left -= 20;
            fillBlack(ctx);
        } else {
            onRight = true;
            x = 2; 
        } 
     } else{
        if (y < 2) {
            ctx.drawImage(box8,0,top); 
            var top = fromTop !== undefined ? fromTop : canvas.height / 2 - (box8.width / 2);
            ctx.drawImage(box8,fromRight-20,top); 
            if ( left <= (canvas.width - box8.width) && onRight ) {
                window.left += 20;
            } else {
                onRight = false;
                y = 2;
            }
        }
    }
    if (runtime < duration){
        requestAnimationFrame(function(timestamp){
            drawSquare(ctx, window.left, dist, duration, timestamp)
        })
    }
}

function PaintIcons(){
    var a = [];
    var u;
    for (var i = 0;i < array_fonts.length;i++){
        a[i] = array_fonts[i];
    }
    for (var i = 0; i < array_fonts.length; i++) {
            ctx.fillStyle = "white"
            ctx.font='18px fontawesome';
            u = a[i];
            if (!u.black){
                if (u.fontW != logoW){
                    if (u.fontW != traco){
                        ctx.drawImage(u.fontW,u.x,u.y-18,18,18);
                    } else {
                        ctx.drawImage(u.fontW,u.x,u.y-14,2,10);
                    }
                    
                } else {
                    ctx.drawImage(u.fontW,u.x,u.y-22,100,28);
                }
                
            } else {
                if (u.fontB != logoB){
                    if (u.fontB != traco){
                        ctx.drawImage(u.fontB,u.x,u.y-18,18,18);
                    } else {
                        ctx.drawImage(u.fontB,u.x,u.y-14,2,10);
                    }
                } else {
                    ctx.drawImage(u.fontB,u.x,u.y-22,100,28);
                }
            }            
        }    
}

var tempo;

function tempo1(){
    canvas.width = canvas.getBoundingClientRect().width;
    tempo = canvas.width * 6000 / 2560; 
}

tempo1();

//se quiser tirar o efeito comente esse e descomente o debaixo
requestAnimationFrame(function(timestamp){
    starttime = timestamp || new Date().getTime(); 
    drawSquare(ctx, canvas.width, 1, tempo,timestamp) 
});

/*
drawSquare(ctx,canvas.width);
*/

PaintIcons();

function RepaintIcons(){
        window.left = canvas.width;
        canvas.width = canvas.getBoundingClientRect().width;
        canvas.height = canvas.getBoundingClientRect().height;
        ctx    = canvas.getContext("2d");
        fillBlack2(ctx);
        ctx.drawImage(box7,0,0);
        ctx.drawImage(box8,0,0);
        requestAnimationFrame(function(){
            PaintIcons()
        });   
}

  
window.addEventListener('resize', function(event){
    window.left = canvas.width;
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    ctx    = canvas.getContext("2d");
    fillBlack2(ctx);
    ctx.drawImage(box7,0,0);
    ctx.drawImage(box8,0,0);
    PaintIcons(0);   
});


//se quiser tirar o efeito comente esse e descomente o debaixo
setTimeout(function() {
    RepaintIcons();
}, tempo-300);

/*
setTimeout(function() {
    RepaintIcons();
}, 1);
*/


var linkText;
var linkWidth = 18;
var linkHeight = 18;
var logoWidth = 100;
var logoHeight = 28;
var inLink = false;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

function draw(){

  if(canvas.getContext){

    document.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
  }
}

var re = 0;
var re2 = -1;
var allfalse = true;

function on_mousemove (ev) {

  var x, y;

  var pos = getMousePos(canvas, ev);

  x = pos.x;
  y = pos.y;

  for (var i = 0; i < array_fonts.length;i++ ) {
      if (i != 6){
        if (i == 7){
            if((x>=array_fonts[i].x) && (x <= (array_fonts[i].x + logoWidth)) 
            && 
           (y<=array_fonts[i].y) && (y>= (array_fonts[i].y-logoHeight)) && !array_inLink[i].inLink){
             
                for (var j = 0; j < array_fonts.length;j++){
                    if (j != i){
                        array_inLink[j].inLink = false;
                    } else {
                        array_inLink[j].inLink = true;
                    }
                }
                linkText=array_fonts[i].linkText;   
                if (re2 != i){
                    RepaintIcons();
                    re += 1;
                    break;
                }
                re = 0;
                break;
        }  
        inLink = false;
        array_fonts[i].black = false;  
        } else {
            if((x>=array_fonts[i].x) && (x <= (array_fonts[i].x + linkWidth)) 
            && 
           (y<=array_fonts[i].y) && (y>= (array_fonts[i].y-linkHeight)) && !array_inLink[i].inLink){
             
                for (var j = 0; j < array_fonts.length;j++){
                    if (j != i){
                        array_inLink[j].inLink = false;
                    } else {
                        array_inLink[j].inLink = true;
                    }
                }
                linkText=array_fonts[i].linkText;   
                if (re2 != i){
                    RepaintIcons();
                    re += 1;
                    break;
                }
                re = 0;
                break;
        }  
        inLink = false;
        array_fonts[i].black = false; 
        } 
    }
        
    }

    for (var j = 0; j < array_inLink.length;j++){
        if (array_inLink[j].inLink){
            document.body.style.cursor = "pointer";
            array_fonts[j].black = true;             
            inLink = true;
            array_inLink[j].inLink = false;
            re2 = j;
            allfalse = false;
            break;
        } 
        allfalse = true;       
    }

    if (!inLink){
        document.body.style.cursor = "";
        re += 1;
        for (var j = 0; j < array_inLink.length;j++){
            array_fonts[j].black = false; 
        }    
    }
   
    if ((re <= 1) && allfalse){
        RepaintIcons();
        re2 = -1;
    }
}

function on_click(e) {
  if (inLink)  {
    window.open(linkText,"_blank");
  }
}


//se quiser tirar o efeito comente esse e descomente o debaixo
setTimeout(function() {
    draw();
}, 2000);

/*
setTimeout(function() {
    draw();
}, 2);
*/
