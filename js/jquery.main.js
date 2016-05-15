$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });
} );

var Slider = function (obj) {

    //private properties
    var _self = this,
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };

    if (_obj.hasClass('container_wrap')) {
        var _slider = new Swiper(_obj, {
            nextButton: '.clients_next',
            prevButton: '.clients_prev',
            loop: true,
            loopedSlides: 1,
            slidesPerView: 1

        });

    }

    //public properties

    //public methods

    _init();
};
