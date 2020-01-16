
class Punkt {
    constructor(x,y,r) {
        this.x=x;
        this.y=y;
        this.r=r;
        this.show=false;
        
        this.box=$('<div />').addClass("point")
                        .appendTo($('#points')); 
        
    }
    
    find(x,y){
        
        
        return Math.abs((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y))<this.r;
    }
    
    
    
};


const showPoint = function(p){
        
        
        
       $('<div />').addClass("check").css('top', "" + p.y + "px")
            .css('left', "" + p.x + "px")
                        .appendTo($('#imgDif'));   
    }



let points = Array();




$(document).ready(function(){
    //zmienne
    const img1="img2.png";
    const img2="img2.png";
    const images=$('#imgDif');
    
  
    //dodanie obrazkow
    $('<img />').attr('src', "" + img1 + "")         
                        .width('100%').height('100%')
                        .appendTo($('#imgOk')); 
    
    $('<img />').attr('src', "" + img2 + "")         
                        .width('100%').height('100%')
                        .appendTo($('#imgDif')); 
    
 
    
    
 
    // klikniecie
    $('#imgDif').click(function(e){
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
       
        
        points.forEach((p, i)=>{
            console.log(p+" "+ p.find(x,y));
            if(p.find(x,y))
                {
                    console.log("ten");
                    showPoint(p);
                    
                }
            else{
                if(i>=points.length-1)
                    {
                        
                        points.push(new Punkt(x,y,10));
                       
                    }
            }
        })
        
       
        
        
        
        
        
    });

});




