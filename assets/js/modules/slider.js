class Slider {
    constructor(module) {
        this.slider = module;
    }

    init() {
        this.runSlick()
    }

    runSlick() {
        $(this.slider).slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            focusOnSelect: true,
            infinite: false,
        });
    }
}

export default Slider;