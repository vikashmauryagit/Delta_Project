
  $(document).ready(function(){
    var $grid = $('.grid').isotope({
      itemSelector: '.all'
    });

    $('.filters ul li').click(function(){
      $('.filters ul li').removeClass('active');
      $(this).addClass('active');
      
      var selector = $(this).attr('data-filter');
      $grid.isotope({ filter: selector });
      return false;
    });
  });

  

  

  
  
