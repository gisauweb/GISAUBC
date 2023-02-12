import React from "react";
import Slider from "react-slick";
import activity_1 from "assets/activities/img_1.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlide = (props) => {
    const {index} = props
    return (
        <div {...props} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} className='bg-black text-white'>
            <p>Activities</p>
            <img src={activity_1} className="pl-2"/>
            <p>Hahihu</p>
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

const CustomNextArrow = (props) => {
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
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };
    return (
        <div className="w-1/4 mx-auto mt-40">
            <Slider {...settings} >
                <CustomSlide index={1} />
                <CustomSlide index={2} />
                <CustomSlide index={3} />
            </Slider>
        </div>
    );
}