
    // funcion para que la flecha tire pa arriba

    $(document).ready(function(){
        $('.ir-arriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 1000);
        });
      });
      
      