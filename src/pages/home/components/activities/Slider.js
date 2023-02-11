import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlide = (props) => {
    return (
        <div {...props}>
            <h3>{index}</h3>
        </div>
    );
}

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

export const SimpleSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        // lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        // swipeToSlide: true,
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }
        // beforeChange: (current, next) => this.setState({ activeSlide: next }),
        // afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <CustomSlide index={1} />
                <CustomSlide index={2} />
                <CustomSlide index={3} />
                <CustomSlide index={4} />
                <CustomSlide index={5} />
                <CustomSlide index={6} />
            </Slider>
        </div>
    );
}