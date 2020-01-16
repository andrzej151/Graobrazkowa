function Point(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
    this.show=false;
    
    
};

Point.prototype.find=function(x,y){
    console.log("ok");
    
}




$(document).ready(function(){
    let img1="/img2.png";
    let img2="/img2.png";
  
    $('<img />').attr('src', "" + img1 + "")         
                        .width('100%').height('100%')
                        .appendTo($('#imgOk')); 
    
    $('<img />').attr('src', "" + img2 + "")         
                        .width('100%').height('100%')
                        .appendTo($('#imgDif')); 
    
    $('#imgDif').click(function(e){
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
        $('<div />').addClass("check").css('top', "" + y + "px")
            .css('left', "" + x + "px")
                        .appendTo($('#imgDif')); 
        
    });

});




