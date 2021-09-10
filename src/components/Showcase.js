import React from 'react';
import LazyLoad from 'react-lazyload';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useStyles from '../styles/ShowcaseStyle';
import ShowcaseCard from './ShowcaseCard';

// import portfolio_1 from '../assets/img/portfolio_1.png';
// import portfolio_2 from '../assets/img/portfolio_2.png';
// import portfolio_3 from '../assets/img/portfolio_3.png';

const projects = [
	// 15
	{
		delay: '500',
		title: 'Minnesota Air',
		description:
			'Minnesota Air is a family-owned business serving the HVAC industry.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1623627555/Resume/z94bkgnlzsufscrvdam3.png',
		gifLink: '',
		liveDemo: 'https://mnair.com/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Wordpress', 'Custom Built'],
	},
	// 14
	{
		delay: '700',
		title: 'Pinky Swear',
		description:
			'Helping kids with cancer and their families with financial and emotional support since 2003.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1623627555/Resume/ppvbwreayh3bhgin7zyl.png',
		gifLink: '',
		liveDemo: 'https://pinkyswear.org/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Wordpress', 'Custom Built'],
	},
	// 13
	{
		delay: '900',
		title: 'Student Angler Tournament Trail',
		description:
			'At SATT our goal is to grow the future of fishing and create a lasting impact for students and families.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/v1631242854/Resume/wsjy5ep24vwdcuhhbnl7.png',
		gifLink: '',
		liveDemo: 'https://www.mnsatt.org/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Wordpress', 'Toolset', 'Jotform', 'Custom Built'],
	},
	// 12
	{
		delay: '500',
		title: 'Student Angler',
		description:
			'Dedicated to increasing fishing opportunities and environmental awareness for students, youth, and schools.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1623627555/Resume/xghpbl38uowi0apd8eqw.png',
		gifLink: '',
		liveDemo: 'https://studentangler.org/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Wordpress', 'Toolset', 'Jotform', 'Custom Built'],
	},

	// 11
	{
		delay: '700',
		title: 'Riley Sports',
		description: `For over 40 years, Riley Sports has been at the forefront of innovation and safety in the sports industry.`,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1623627555/Resume/d9u5x6r5jmhtlb8r1axs.png',
		gifLink: '',
		liveDemo: 'https://rileysport.com/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Wordpress', 'Custom Built'],
	},

	// 10
	{
		delay: '900',
		title: 'Ice Team',
		description: `We were there at the beginning of the Ice Fishing Revolution™ . . . because we helped start it, and we are cutting no corners to ensure the sport continues to grow.`,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1631242854/Resume/j4mncprwidzghcvebiln.png',
		gifLink: '',
		liveDemo: 'https://iceteam.com/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Wordpress', 'Custom Built'],
	},

	// 9
	{
		delay: '500',
		title: 'The MN Table',
		description: `We are passionate about the convenience of delivering quality meals from our chef’s Minneapolis kitchen to your doorstep!`,
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1623627555/Resume/oeghulopk4wn46zjtpau.png',
		gifLink: '',
		liveDemo: 'https://labels.themntable.com',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['React', 'Redux', 'Chakra UI'],
	},
	// 8
	{
		delay: '700',
		title: 'Abra Auto Midwest',
		description:
			'Abra have been taking the hassle out of car accident repairs. We offer complete auto body and glass repair services.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1623627555/Resume/jge6dlhdrgidkn0z35cp.png',
		gifLink: '',
		liveDemo: 'https://abraautomidwest.com/pages/shop-requests',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Wordpress', 'Custom Built'],
	},

	// 7
	{
		delay: '500',
		title: 'Tiger4GInternet',
		description:
			'Ultra-Fast & Reliable Internet Speeds + Limitless Data + Hassle-Free Pricing.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1631242854/Resume/fcihjauowin2te97de50.png',
		gifLink: '',
		liveDemo: 'https://tiger4ginternet.com/',
		videoDemo: '',
		sourceCode: 'https://github.com/Suonx002/happynails',
		techStacks: ['React', 'Redux', 'Material-UI'],
	},

	// 6
	{
		delay: '500',
		title: 'Happy Nails Studio 2',
		description:
			'Happy Nails Studio 2 is a local nail salon located in Lebanon, PA. They are a small business that want their website live for customer to view their services.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dk9fdcnnp/image/upload/c_scale,q_60,w_600/v1623627555/Resume/msbwyfcnbcnyplu5jpmx.png',
		gifLink: '',
		liveDemo: 'https://happynailsstudio2.com/',
		videoDemo: '',
		sourceCode: 'https://github.com/Suonx002/happynails',
		techStacks: ['Material-UI', 'React', 'Next.js'],
	},
	// 5
	{
		delay: '700',
		title: 'OmniVis',
		description:
			'OmniVis is a biotechnology company focused on user-centered disease detection devices. OmniVis makes handheld devices to rapidly detect for dangerous pathogens, anywhere in the world.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1591715338/resume/omnivisTech_guhugb.png',
		gifLink: '',
		liveDemo: 'https://www.omnivistech.com/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['Html', 'Css', 'Javascript', 'Squarespace'],
	},
	// 4

	{
		delay: '900',
		title: 'DisneySolo',
		description:
			'Disney Solo is a movie application that allows users to search for their favorite movies, watch trailers, now playing, discover trending films, etc.',
		// imageLink: portfolio_1,
		imageLink:
			'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1589058820/resume/disney_solo.png',
		gifLink: '',
		liveDemo: 'https://disneysolo.netlify.com/',
		videoDemo: '',
		sourceCode: 'https://github.com/Suonx002/DisneySolo',
		techStacks: ['React', 'Redux', 'Sass'],
	},
	// 3
	{
		delay: '900',
		title: 'EntryLevel',
		description:
			'Entry Level is a career website that aggregates entry-level positions, benefiting students, career changers by optimizing the front end experience.',
		// imageLink: portfolio_3,
		imageLink:
			'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1589058819/resume/entry_level.png',
		gifLink: '',
		liveDemo: 'https://entrylevel.io/',
		videoDemo: '',
		sourceCode: '',
		techStacks: ['React', 'Context API', 'Semantic UI', 'PostgreSQL'],
	},

	// 2
	{
		delay: '700',
		title: 'WebResources',
		description:
			'Web Resources is an application that allows beginner and intermediate programmers to share learning resources such as online courses and tutorials.',
		imageLink:
			'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1589058820/resume/web_resources.png',
		gifLink:
			'https://res.cloudinary.com/dlzglgofe/image/upload/v1589062359/resume/video.gif',
		liveDemo: 'https://webresources.herokuapp.com/',
		videoDemo: 'https://www.youtube.com/watch?v=jFMEIAF24bE',
		sourceCode: 'https://github.com/Suonx002/WebResources',
		techStacks: [
			'React',
			'Redux',
			'Node',
			'Material-UI',
			'Express',
			'MongoDB',
			'Mongoose',
		],
	},

	// 1
	{
		delay: '500',
		title: 'DailyNews',
		description:
			'DailyNews has many news articles from different sources such as CNN, BuzzFeed, and ESPN. This application allow users to fetch top headlines articles.',
		imageLink:
			'https://res.cloudinary.com/dlzglgofe/image/upload/c_scale,q_60,w_600/v1591715335/resume/dailyNews_yzhlkr.png',
		gifLink: '',
		liveDemo: '',
		videoDemo: 'https://www.youtube.com/watch?v=pVBFykvvu1w',
		sourceCode: 'https://github.com/Suonx002/dailyNews',
		techStacks: [
			'React',
			'Redux',
			'Node',
			'Material-UI',
			'Express',
			'MongoDB',
			'Mongoose',
		],
	},
];

const Showcase = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<div id='portfolio'>
			<Grid
				container
				direction='column'
				className={classes.showCaseContainerMargin}>
				<Grid
					item
					style={{ marginBottom: '2rem' }}
					data-aos='fade-in'
					data-aos-offset='0'
					data-aos-easing='ease-in-quart'
					data-aos-duration='500'>
					<Typography variant='h3'>Portfolio</Typography>
				</Grid>
				{/* portoflio container */}

				<LazyLoad height={200} offset={matchesXS ? 75 : 150}>
					<Grid item container justify='center' alignItems='center'>
						{/* portfolio itself */}
						{projects.map((project) => (
							<ShowcaseCard
								key={project.title}
								project={project}
								style={{ padding: '0.5rem' }}
							/>
						))}
					</Grid>
				</LazyLoad>
			</Grid>
		</div>
	);
};

export default Showcase;
