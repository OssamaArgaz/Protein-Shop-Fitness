var latest_deals_cards = $('.related-product-cards');

latest_deals_cards.owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 3500,
    margin: 10,
    nav:true,
    navText:["<i class='icofont-arrow-left'></i>",
            "<i class='icofont-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        },
        1150:{
            items:4
        }
    }
});
latest_deals_cards.on('mouseover', function(){
    latest_deals_cards.trigger('stop.owl.autoplay');
});
latest_deals_cards.on('mouseout', function(){
    latest_deals_cards.trigger('play.owl.autoplay');
});




// latest-deals-card-info
document.addEventListener('DOMContentLoaded', function() {
  var popoverElements = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

  popoverElements.map(function(popoverEl){
    return new bootstrap.Popover(popoverEl);
  });
});