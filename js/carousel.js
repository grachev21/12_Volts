window.onload = function(){
  
    // Получаем переменную блока который нужно передвинуть
    var slides = document.getElementsByClassName('carousel-item'),

    // Добавляет класс active
    addActive = function(slide) {
      slide.classList.add('active')
      function text_info(){
        let el = slide.getElementsByClassName("block-info-carousel")[0]
        el.classList.remove('opacity-block');
      }

      setTimeout(text_info, 1000);
    },

    // Удаляет класс active
    removeActive = function(slide) {
      slide.classList.remove('active')
    };

    addActive(slides[0]);
    
    setInterval(function (){

      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 2000, slides[i]); 
          break;
        }

        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style', i);
          setTimeout(removeActive, 1000, slides[i]); 
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 8000);
}
    
