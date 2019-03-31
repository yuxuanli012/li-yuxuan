$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1245897641',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '1245897641.1677ed0.9d8c5b8d07a64603a29027c918161de7',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});