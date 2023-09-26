import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { activities } from './constants';

function CustomSlide(props) {
	const { title, image, description } = props;
	return (
		<Box className='flex flex-col justify-center text-center items-center bg-[#FFFDF5]'>
			<div className='w-full h-40 sm:h-48 flex justify-center items-center overflow-hidden rounded-xl'>
				<img src={image} alt='Activities' className='w-full object-cover' loading='lazy' />
			</div>
			<span className='font-montserrat text-lg sm:text-xl px-3 py-5 font-extrabold'>{title}</span>
			<p className='text-base px-3 sm:text-lg font-montserrat'>{description}</p>
		</Box>
	);
}

function CustomArrow(props) {
	const { direction, onClick } = props;
	return direction === 'left' ? (
		<ArrowBackIosNew
			className='absolute top-16 -left-10 text-[2.2rem] sm:top-[5rem] sm:-left-14 sm:text-[3rem]'
			onClick={onClick}
		/>
	) : (
		<ArrowForwardIos
			className='absolute top-16 -right-10 text-[2.2rem] sm:top-[5rem] sm:-right-14 sm:text-[3rem]'
			onClick={onClick}
		/>
	);
}

export default function ActivitiesSlider({ className }) {
	const settings = {
		fade: true,
		// lazyLoad: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnHover: true,
		// swipeToSlide: true,
		// afterChange: function (index) {
		//     console.log(
		//         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
		//     );
		// }
		// beforeChange: (current, next) => this.setState({ activeSlide: next }),
		// afterChange: current => this.setState({ activeSlide2: current })
		prevArrow: <CustomArrow direction='left' />,
		nextArrow: <CustomArrow direction='right' />,
	};
	return (
		<div className={`w-3/4 sm:w-3/5 mx-auto ${className}`}>
			<Slider {...settings}>
				{activities.map((activity) => (
					<CustomSlide
						key={activity.title}
						title={activity.title}
						image={activity.image}
						description={activity.description}
					/>
				))}
			</Slider>
		</div>
	);
}
