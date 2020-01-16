    (function () {

  
  var draggedEl,
      onDragStart,
      onDrag,
      onDragEnd,
      grabPointY,
      grabPointX,
      createNote,
      addNoteBtnEl;
  
  onDragStart = function (ev) {
    var boundingClientRect;
    if (ev.target.className.indexOf('bar') == -1) {
      return;
    }
    
    draggedEl = this;
    
    boundingClientRect = draggedEl.getBoundingClientRect();
    
    grabPointY = boundingClientRect.top - ev.clientY;
    grabPointX = boundingClientRect.left - ev.clientX;
  };
  
  onDrag = function (ev) {
    if (!draggedEl) {
      return;
    }
    
    var posX = ev.clientX + grabPointX,
        posY = ev.clientY + grabPointY;
    
    if (posX < 0) {
      posX = 0;
    }
    
    if (posY < 0) {
      posY = 0;
    }
    
    draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
  };
  
  onDragEnd = function () { 
    draggedEl = null;
    grabPointX = null;
    grabPointY = null;
  };
  
  createNote = function () {
    var sticker = document.createElement('div'),
        bar = document.createElement('div'),
        textarea = document.createElement('textarea');
        textarea.addEventListener('focus', function(){this.innerHTML="wpisz text";}, false);
        textarea.addEventListener('blur', function(){this.innerHTML="papa";}, false);
      
    var transformCSS = "translateX(" + Math.random() * 300 + "px) translateY(" + Math.random() * 300 + "px)";
    
    sticker.style.transform = transformCSS; 
    
    bar.classList.add('bar');
    sticker.classList.add('sticker');
    
    sticker.appendChild(bar);
    sticker.appendChild(textarea); 
    
    sticker.addEventListener('mousedown', onDragStart, false);
    
    document.body.appendChild(sticker);
  };
  
  createNote(); 
  
  addNoteBtnEl = document.querySelector('.addNote');
  addNoteBtnEl.addEventListener('click', createNote, false);
  document.addEventListener('mousemove', onDrag, false);
  document.addEventListener('mouseup', onDragEnd, false);
})();