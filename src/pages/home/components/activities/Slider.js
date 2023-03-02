import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { activities } from "./constants";
import { Box } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const CustomSlide = (props) => {
    const { title, image, description } = props
    return (
        <Box className='flex flex-col justify-center text-center items-center bg-[#FFFDF5]'>
            <img src={image} alt="Activities" className="w-full" />
            <span className="font-proxima-nova text-base sm:text-xl px-3 py-5 font-extrabold">{title}</span>
            <p className="text-sm px-3 sm:text-lg font-proxima-nova">{description}</p>
        </Box>
    );
}

const CustomArrow = (props) => {
    const { direction, onClick } = props;
    return (
        direction === "left" ?
            <ArrowBackIosNew
                className="absolute top-[4.2rem] -left-10 text-[2.2rem] sm:top-[7rem] sm:-left-[3.62rem] sm:text-[4rem]"
                onClick={onClick}
            />
            :   
            <ArrowForwardIos
                className="absolute top-[4.2rem] -right-[2.32rem] sm:top-[7rem] sm:-right-14 sm:text-[4rem]"
                onClick={onClick}
            />
    );
}

export const ActivitiesSlider = () => {
    const settings = {
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
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />
    };
    return (
        <div className="w-3/4 sm:w-3/5 mx-auto">
            <Slider {...settings} >
                {activities.map((activity, i) => (
                    <CustomSlide key={i} title={activity.title} image={activity.image} description={activity.description} />
                ))}
            </Slider>
        </div>
    );
}