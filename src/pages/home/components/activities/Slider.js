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
        <Box className='flex flex-col justify-center text-center items-center bg-[#FFFDF5] h-full'>
            <span className="font-proxima-nova text-sm font-extrabold">{title}</span>
            <img src={image} className="py-3 h-full w-full" />
            <p className="pt-3 leading-none text-[12px]">{description}</p>
        </Box>
    );
}

const CustomArrow = (props) => {
    const { direction, onClick } = props;
    return (
        direction === "left" ?
            <ArrowBackIosNew
                className="absolute top-24 -left-10"
                fontSize="large"
                onClick={onClick}
            />
            :   
            <ArrowForwardIos
                className="absolute top-24 -right-10"
                fontSize="large"
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
        <div className="w-2/3 mx-auto">
            <Slider {...settings} >
                {activities.map((activity, i) => (
                    <CustomSlide key={i} title={activity.title} image={activity.image} description={activity.description} />
                ))}
            </Slider>
        </div>
    );
}