/* First Slider */
$('.slider-one')
.not(".slick-initialized")    
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});


$.getJSON('https://github.com/klarv2/ecommerce-html-css-js/blob/master/db.json', function(data){
    data.header('Access-Control-Allow-Origin', '*');
    $.each(data, function(i, c){
        
        console.log(data)

            /* $(".products").append('<div class="col-md-2 product pt-md-5 pt-4"><img src="'
                                    + p[1] +'" alt="'+ p[0] +
                                    '"></div><span class="border site-btn btn btn-span">' 
                                    + p[0] + '</span>' );*/
      });
})