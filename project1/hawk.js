var pic=new Image()
class hawk{
   
    constructor()
    {
        this.canvsa=document.getElementById("mycanvas")
        this.pic=new Image()
        this.width=this.canvsa.width
       this.hight=this.canvsa.height
       this.ctx=this.canvsa.getContext('2d')
        this.g=0.15
        this.v=0
        this.x=parseInt(this.width/2)
        this.y=parseInt(this.width/2)
    }
    
    
    
    update()
    {
        this.pic.src="1.jpg" 
        this.pic.hight=0.5
        this.pic.width=0.5
        this.ctx.clearRect(0,0,this.width,this.hight)
        
        this.ctx.beginPath()
        this.ctx.drawImage(this.pic,this.x,this.y);
        
        this.ctx.arc(this.x,this.y,25,0,Math.PI*2,false)
        this.ctx.strokeStyle='blue'
        this.ctx.stroke()
        
    }
    returnY(){
        return this.y
    }
   
}

var id
function animate() {
    requestAnimationFrame(animate)
   
    let stop = hawk.y
   //console.log(stop)
    if (stop< hawk.hight) {
        hawk.v += hawk.g
        hawk.y += hawk.v
        hawk.update()
    }
        
      
}

animate()

function up(e)
{
   var code=e.keyCode||e.which
   if(code===32)
   {
       hawk.y-=30
       hawk.v=0
       hawk.g=0.15
   }
}

var cvs =document.getElementById("mycanvas");
var ctx = cvs.getContext("2d");
var up1 = new Image();
var down = new Image();
var score=0

up1.src = "up.png";
down.src = "down.png";

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

function drawpi(){
     
    
    for(var i = 0; i < pipe.length; i++){
        
        extra = up1.height+200;
        
       

        ctx.drawImage(up1,pipe[i].x,pipe[i].y);
        ctx.drawImage(down,pipe[i].x,pipe[i].y+extra);
             
        pipe[i].x--;
         //console.log(pipe[i].x)
        if( pipe[i].x == 130 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*up1.height)-up1.height
            });  
        }
        
        //console.log(up1.hight)
        if(hawk.y<0||hawk.y>500||(hawk.y>pipe[i].y+extra+60||hawk.y<pipe[i].y+up1.height-70))
        {
          if(score==0)
          {
              location.reload()
          }
           else
           {    let close=document.getElementById("hit")
                close.style.display="none"
               cvs.style.display="none"
               document.querySelector("#score").innerText = "Game Over \n You scored "+ score;
               break;
           }
       
            
        }
        if(pipe[i].x == 20){
            score++;
          
         }
    }
    ctx.font = "30px Arial"
    requestAnimationFrame(drawpi);
     
    
    ctx.fillText("Score : "+score,10,cvs.height-400);
}
drawpi();
