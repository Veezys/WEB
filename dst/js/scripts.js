(function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });
    })(jQuery);

function toggleTab (item) {
   $(item).each(function (i) {
    $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
   });
};

toggleTab('.catalog-item__link');       
toggleTab('.catalog-item__back');


//Modal
$('.modals__close').on('click', function() {
  $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('[data-modal=consultation]').on('click', function () {
  $('.overlay, #consultation').fadeIn('slow');
})

$('.button_mini').on('click', function () {
  $('.overlay, #order').fadeIn('slow');
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 1000) {
    $('.pageUp').fadeIn('slow');
  } else {
    $('.pageUp').fadeOut('slow')
  }
})
