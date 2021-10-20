

// //test
// // draw_rect(width-12, height-12, 12, 12);

// function draw_rect(x,y,l,h)
// {
//     // var draw = c.getContext("2d");
//     // ctx.beginPath();
//     draw.fillRect(x,y,l,h);
//     // ctx.stroke();
// }
//     // var bars = 217;
    
//     // var delay = 0, // accrued delay
//     // speed = 10; // drawing speed (milliseconds per render)
    
//     // for(var l = 0; l < 600; ++l)
//     // {   
//     //     setTimeout(ctx.fillRect.bind(ctx,0,50 + 100 , l*speed, 12),delay);
//     //     delay += 217 * 8;
//     // }

// //snake



// var draw = c.getContext("2d");
// var i=12;
// var j=12;
// //global variables
// window.a=0;
// window.b=0;
// window.c=0;
// window.d=0;
// //code and prev code press
// // vitesse
// var vitesse = 500;
// var prevCode ;
// var code ;

// function Animation_rect(i,j)
// {
    
//     if(i<=width-13 && i>=0 && j<=height-13 && j>=0)
//     {
//         draw.clearRect(0,0,width,height);
//         draw_rect(i,j,12,12);
//         draw_rect(i+13,j,12,12);
//         draw_rect(i+13*2,j,12,12);
  
//     }
        
// }

// function KeyPress(e)
// {
    
//         code = e.keyCode;
        
//         if(String.fromCharCode(code)=="D" && prevCode!="D")
//             {
                
//                 prevCode="D" ;
//                 clearIntervals(b,c,d);
//                 a=setInterval(function(){
//                     Animation_rect(i+=13,j);
//                     if(i<=width-13 && i>=0 && j<=height-13 && j>=0)
//                     {
//                         draw.clearRect(0,0,width,height);
//                         draw_rect(i,j,12,12);
//                         draw_rect(i+=13,j,12,12);
//                         draw_rect(i+=13,j,12,12);
                        
                        

  
//                     }
                    
//                 }
//                     ,vitesse); 
                
                    
//             }
//         else if(String.fromCharCode(code)=="S" && prevCode!="S")
//             {
//                 prevCode="S" ;
//                 clearIntervals(a,c,d);
//                 b = setInterval(function(){
                    
//                     if(i<=width-13 && i>=0 && j<=height-13 && j>=0)
//                     {
//                         draw.clearRect(0,0,width,height);
//                         draw_rect(i,j,12,12);
//                         draw_rect(i+13,j,12,12);
//                         draw_rect(i+13*2,j,12,12);
//                         //

//                         draw.clearRect(0,0,width,height);
                        
//                         draw_rect(i+13,j,12,12);
//                         draw_rect(i+13*2,j,12,12);
//                         draw_rect(i+13*2,j+=13,12,12);
//                         //
//                         draw.clearRect(0,0,width,height);
//                         draw_rect(i+13*2,j+=13,12,12);
//                         draw_rect(i+13*2,j+=13,12,12);
//                         draw_rect(i+13*2,j+=13,12,12);
                        
  
//                     }
//                 },vitesse);
                
                    
//             }
//         else if(String.fromCharCode(code)=="Q" && prevCode!="Q")
//             {
//                 prevCode="Q" ;
//                 clearIntervals(a,b,d);
//                 c = setInterval(function(){Animation_rect(i-=13,j)},vitesse);
                
                    
//             }
//         else if(String.fromCharCode(code)=="Z" && prevCode!="Z")
//             {
//                 prevCode="Z" ;
//                 clearIntervals(a,b,c);
//                 d = setInterval(function(){Animation_rect(i,j-=13)},vitesse);
                
                    
//             }

    
          
               
// }

// function clearIntervals(a,b,c)
// {
//     clearInterval(a);
//     clearInterval(b);
//     clearInterval(c);
// }


var c = document.querySelector(".canvas");
c.height = 598;
c.width = 598 ;
var height = c.height;
var width = c.width;
//begin drawing
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.fillStyle="orange";

const snake =
{

    l : 12,
    h : 12,
    dx: 0,
    dy: 0,
    tabX : [],
    tabY : [],
    

}

// initialiser le tableau des carres X and Y
var total = 2  ;
for(var i=0 ; i<total ; i++)
{
    snake.tabX[i]=13 * i;
    snake.tabY[i]=0;  
}
function snake0()
{
    snake.tabX[0]=0;
    snake.tabY[0]=0;  
}
snake0();

// initialiser les intervals
var Int1 , Int2 , Int3 ,Int4;
var e1 ,e2,e3,e4;
////-----
var PrevKey ;
var counter=false ;
var move=false ;
// fooooooooooooooood
var foodX,foodY,foodPrevY,foodPrevX;
var ctx_food = c.getContext("2d");
ctx_food.beginPath();

food();

var eat = false ;
//death
var death = false ;
//---
var upd = setInterval(update,0);
function update()
{
    
    for(var i=0 ; i<total ; i++)
    {   
        ctx.fillRect(snake.tabX[i],snake.tabY[i],snake.l,snake.h);
        
    }
    
    if(snake.tabX[total-1]==foodX && snake.tabY[total-1]==foodY )
    {
       
        ctx_food.clearRect(foodPrevX,foodPrevY,snake.l,snake.h);
        console.log("hihi");
        // test confoder food avec tabX,Y (un carré) 
        // counter=true;
        food();
        
        eat = true ;
    }
    // makhassh les tab X et Y mn ghir dernieres elements du tab (total-1) y tconfodaw m3a food 
    else
    {
        for(var i=0 ; i<total-1 ; i++)
        {
            if(snake.tabX[i] === foodX  && snake.tabY[i] === foodY)
            {
                ctx_food.clearRect(foodPrevX,foodPrevY,snake.l,snake.h);
                food();
                break;
            }
        }
        
    }
    
    // snake death
    
        for(var i=0 ; i<total ; i++)
        {
            for(var j=i+1 ; j<total ; j++)
            {
                if(snake.tabX[i] == snake.tabX[j] && snake.tabY[i] == snake.tabY[j])
                {
                    console.log("you lost");
                    alert("you lost");
                    fct_ClearIntervals(Int1,Int2,Int3,Int4);
                    fct_ClearIntervals(e1,e2,e3,e4);
                    ctx_food.clearRect(0,0,width,height);
                    snake0();
                    total=1;
                    //clear the food and draw it again
                    ctx_food.clearRect(foodPrevX,foodPrevY,snake.l,snake.h);
                    food(); 
                    //prev Key
                    PrevKey="";
                }
            
            }
        }
    
    
}



//event
document.addEventListener("keypress",KeyPress);

function KeyPress(e)
{
   
    
    if(e.key.toUpperCase() === "Z" && PrevKey!="Z" && PrevKey!="S")
    {
        
        // clear other intervals
        fct_ClearIntervals(Int1,Int2,Int3,Int4);
        fct_ClearIntervals(e1,e2,e3,e4);
        //---------
         
        Int1 = setInterval(function(){
            ctx.clearRect(snake.tabX[0],snake.tabY[0],snake.l,snake.l);
            for(var i=0 ; i<total-1 ; i++)
            {
                
                snake.tabX[i]=snake.tabX[i+1];
                snake.tabY[i]=snake.tabY[i+1];
                
            }

            if(snake.tabY[total-1]<=0 )
            {
                snake.tabY[total-1]=height-13;
            }
            else
            {
                snake.tabY[total-1]=snake.tabY[total-1]-13;
            }
            PrevKey="Z";
        },100);

        
        //---------
        e1 = setInterval(function(){
        if(eat)
        {
            
            total++;
            snake.tabX[total-1]=snake.tabX[total-2];
            snake.tabY[total-1]=snake.tabY[total-2]-13;
            eat = false ;
        }
        },100)
        
        
    }
    if(e.key.toUpperCase() === "S" && PrevKey!="S" && PrevKey!="Z")
    {
        
        // clear other intervals
        fct_ClearIntervals(Int1,Int2,Int3,Int4);
        fct_ClearIntervals(e1,e2,e3,e4);
        
        //---------
         
        Int2 = setInterval(function(){
            
            ctx.clearRect(snake.tabX[0],snake.tabY[0],snake.l,snake.l);
        for(var i=0 ; i<total-1 ; i++)
        {
            snake.tabX[i]=snake.tabX[i+1];
            snake.tabY[i]=snake.tabY[i+1];
        }
        
        if(snake.tabY[total-1]>=height-13)
        {
            snake.tabY[total-1]=0;
        }
        else
        {
            snake.tabY[total-1]=snake.tabY[total-1]+13;
        }
        PrevKey="S";
    },100);
    
    
    
        //---------
        e2 = setInterval(function(){
        if(eat)
        {
            
            total++;
            snake.tabX[total-1]=snake.tabX[total-2];
            snake.tabY[total-1]=snake.tabY[total-2]+13;
            eat = false ;
        }},100)
        
        
    }
    if(e.key.toUpperCase() === "D" && PrevKey!="D" && PrevKey!="Q")
    {
        
        // clear other intervals
        fct_ClearIntervals(Int1,Int2,Int3,Int4);
        fct_ClearIntervals(e1,e2,e3,e4);
        //---------
         
        Int3 = setInterval(function(){
        
            ctx.clearRect(snake.tabX[0],snake.tabY[0],snake.l,snake.l);
        for(var i=0 ; i<total-1 ; i++)
        {
            snake.tabX[i]=snake.tabX[i+1];
            snake.tabY[i]=snake.tabY[i+1];
        }
        
        if(snake.tabX[total-1]>=width-13)
        {
            snake.tabX[total-1]=0;
        }
        else
        {
            snake.tabX[total-1]=snake.tabX[total-1]+13;
        } 
            

        PrevKey="D";

        },100);

        
        //---------
        e3 = setInterval(function(){
        if(eat)
        {
            
            total++;
            snake.tabX[total-1]=snake.tabX[total-2]+13;
            snake.tabY[total-1]=snake.tabY[total-2];
            eat = false ;
        }},100);
        
    }
    if(e.key.toUpperCase() === "Q" && PrevKey!="Q" && PrevKey!="D") 
    {
        
        // clear other intervals
        fct_ClearIntervals(Int1,Int2,Int3,Int4);
        fct_ClearIntervals(e1,e2,e3,e4);
        //---------


        Int4 = setInterval(function(){
        
        ctx.clearRect(snake.tabX[0],snake.tabY[0],snake.l,snake.l);   
        for(var i=0 ; i<total-1 ; i++)
        {
            snake.tabX[i]=snake.tabX[i+1];
            snake.tabY[i]=snake.tabY[i+1];
        }
        if(snake.tabX[total-1]<=0)
            {
                snake.tabX[total-1]=width-13;
            }
            else
            {
                snake.tabX[total-1]=snake.tabX[total-1]-13;
            }
            PrevKey="Q";
        },100);

        
        //---------
        e4 = setInterval(function(){
        if(eat)
        {
            
            total++;
            snake.tabX[total-1]=snake.tabX[total-2]-13;
            snake.tabY[total-1]=snake.tabY[total-2];
            eat = false ;
        }},100)
    }

}


// function to clear all intervals
function fct_ClearIntervals(a,b,c,d)
{
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    clearInterval(d);
}


//food


function food()
{
    foodX= 13*Math.round(Math.random()*44);
    foodY= 13*Math.round(Math.random()*44);
    

    // test confoder food avec tabX,Y (un carré) 
    // if(counter)
    // {
    //     counter=false;
    //     foodX=snake.tabX[1];
    //     foodY=snake.tabY[1];
    // }
    foodPrevX = foodX;
    foodPrevY = foodY;
    ctx.fillStyle = "orange";
    ctx_food.fillStyle = "orange";  
    ctx_food.fillRect(foodX,foodY,snake.l,snake.h);
              
      console.log("Allo");
   
    
    
    
    
}

    