import React from 'react';
import LazyLoad from 'react-lazyload';

// import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import {
	withStyles,
	// ,useTheme
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import sprite from '../assets/img/sprite.svg';

import useStyles from '../styles/AboutMeStyle';

const LightTooltip = withStyles((theme) => ({
	tooltip: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[1],
		fontSize: 13,
	},
}))(Tooltip);

const icons = [
	{
		name: 'HTML5',
		link: 'html-5',
		delay: '900',
	},
	{
		name: 'CSS3',
		link: 'css3',
		delay: '1000',
	},
	{
		name: 'Bootstrap',
		link: 'bootstrap',
		delay: '1100',
	},
	{
		name: 'Chakra UI',
		link: 'chakra',

		delay: '1200',
	},
	{
		name: 'Material UI',
		link: 'material-ui',
		delay: '1300',
	},
	{
		name: 'Javascript',
		link: 'javascript',
		delay: '1400',
	},
	{
		name: 'React',
		link: 'react-native',
		delay: '1500',
	},

	{
		name: 'Wordpress',
		link: 'wordpress',
		delay: '1600',
	},
	{
		name: 'Firebase',
		link: 'firebase',
		delay: '1700',
	},
	{
		name: 'Node',
		link: 'nodejs',
		delay: '1800',
	},

	{
		name: 'PostgresSQL',
		link: 'postgresql',
		delay: '1900',
	},
	{
		name: 'MongoDB',
		link: 'mongodb',
		delay: '2000',
	},
];

const AboutMe = () => {
	const classes = useStyles();
	// const theme = useTheme();

	// const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid
			id='aboutme'
			container
			justify='space-between'
			className={classes.aboutMeContainerMargin}>
			<Grid
				item
				container
				md={5}
				direction='column'
				className={classes.gridItemContainerMargin}>
				<Grid item className={classes.gridItemMarginBottom}>
					<Typography
						variant='h3'
						data-aos='fade-in'
						data-aos-offset='0'
						data-aos-easing='ease-in-quart'
						data-aos-duration='300'>
						About Me
					</Typography>
				</Grid>
				<Grid
					item
					className={classes.aboutMeInfo}
					style={{ marginBottom: '2rem' }}
					data-aos='fade-in'
					data-aos-offset='0'
					data-aos-easing='ease-in-quart'
					data-aos-duration='500'>
					<Typography variant='body1' className={classes.infoText}>
						Hi, I am a web developer with a passion for building professional
						and modern web applications. I have a background in Computer Science
						and Information Technology Infrastructure. I am self-driven, an
						adaptable learner, and am constantly striving to challenge myself
						with complex projects.
					</Typography>
				</Grid>
			</Grid>
			<Grid item container md={6} direction='column'>
				<Grid item className={classes.gridItemMarginBottom}>
					<Typography
						variant='h3'
						data-aos='fade-in'
						data-aos-offset='0'
						data-aos-easing='ease-in-quart'
						data-aos-duration='700'>
						Experience With
					</Typography>
				</Grid>
				<Grid item container>
					<LazyLoad height={200} offset={0}>
						{icons.map((icon, index) => (
							<Grid
								item
								key={`${icon}-${index}`}
								xs={6}
								sm={3}
								data-aos='fade-in'
								data-aos-offset='0'
								data-aos-easing='ease-in-quart'
								data-aos-duration={icon.delay}>
								<Paper className={classes.cardContainer} elevation={2}>
									<LightTooltip title={icon.name}>
										<svg className={classes.svgIcon}>
											<use href={`${sprite}#icon-${icon.link}`} />
										</svg>
									</LightTooltip>
								</Paper>
							</Grid>
						))}
					</LazyLoad>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AboutMe;
