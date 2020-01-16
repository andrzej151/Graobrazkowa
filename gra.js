window.onload = function(){
    Game.init();
};



Game = {
    init:function(){
        
        Game.document.createElement('img');
        Game.img1 = new Image();
        Game.img1.src = 'img2.png';
        Game.img1.width = 500;
        Game.img2 = document.createElement('img');
        Game.img2.src = 'img2.png';
        Game.img2.width = 500;
        Game.img2.addEventListener('mouseup', mauseclick, false);
        Game.points=[new Point(10,51,3),new Point(10,41,3)];
       
        
        
        Game.gra = document.getElementById('gra');
        Game.gra.appendChild(Game.img1);
        Game.gra.appendChild(Game.img2);
       
    

   
}
}


   function mauseclick(ev){
    const y = ev.clientY-Game.img2.top;
    const x = ev.clientX-Game.img2.left;
       let check = document.createElement('div');
       check.classList.add("check")
       check.style.transform = "translateX(" + ev.clientX + "px) translateY(" + ev.clientY + "px)";
       
       Game.gra.appendChild(check);
       
     
	}
    
  

