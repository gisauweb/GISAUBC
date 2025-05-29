import aboutImg from 'assets/home-page/about/about.png';
import aboutMobileImg from 'assets/home-page/about/about_mobile.png';
import sunshineImg from 'assets/home-page/about/sunshine.svg';
import { useMediaQuery } from 'react-responsive';
import SubHeading from 'shared/components/SubHeading';
// import { useNavigate } from 'react-router-dom';
// import Button from 'shared/components/button/Button';

function About() {
	// const navigate = useNavigate();
	const isMobile = useMediaQuery({ query: '(max-width: 1039px) ' });
	// const handleClickButton = () => {
	// 	navigate('about');
	// };

	return (
		<div className='flex flex-col w-full lg:text-left justify-center items-center lg:items-start'>
			<div className='relative flex flex-col lg:flex-row-reverse justify-between items-center'>
				<a href='/about' className='lg:w-2/3'>
					<img
						src={isMobile ? aboutMobileImg : aboutImg}
						alt='GISAU Executives'
						className='w-full mx-auto rounded-3xl'
						loading='lazy'
					/>
				</a>

				<div className='w-full md:w-1/2 h-full md:pr-16'>
					<SubHeading text='WHO WE ARE' isLeft isMirror icon={sunshineImg} />
					<p className='font-oswald text-xl md:text-3xl/10 font-extrabold my-7'>
						Halo! We are GISAU, a student-led club promoting Indonesian culture based in the UBC Vancouver
						campus.
					</p>
					<p className='font-proxima text-sm'>
						We aim to foster an inclusive, close-knitted, and connected community that exemplifies the
						signature Indonesian warmth and welcomes the diverse UBC society of Indonesian and
						non-Indonesian students alike.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
