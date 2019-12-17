$( document ).ready(function() {
/* First Slider */
    $('.slider-one')
    .not(".slick-intialized")    
    .slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next"
    });

    /* Second Slider */

    $('.slider-two').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: ".site-slider-two .prev",
        nextArrow: ".site-slider-two .next"
      });

        $.getJSON('https://my-json-server.typicode.com/klarv2/ecommerce-html-css-js/db', function(data){
             $.each(data.products, function(i, p){
                $('.products').append('<div class="col-md-4 product">'+
                                        '<a href="#">'+
                                            '<img src="'+ p.imageUrl +'" alt="'+ p.name +'">' +
                                            '<h2>'+ p.name +'</h2>' +
                                            '<p class="price">'+ p.price +'</p>' +
                                        '</a>' +
                                    '</div>')
            
        });
    })
});