import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';

// import Fade from '@material-ui/core/Fade';

import useStyles from '../styles/HomepageStyle';
import webDeveloperIcon from '../assets/img/web_developer.svg';

const Homepage = () => {
	const classes = useStyles();
	const theme = useTheme();

	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
	return (
		<div className={classes.homepageContainer}>
			{/* <Grow
        in
        mountOnEnter
        unmountOnExit
        timeout={{
          enter: matchesSM ? 0 : 1000,
          exit: matchesSM ? 0 : 1000,
        }}> */}

			<Grid container justify='space-between'>
				<Grid
					item
					container
					md={6}
					direction='column'
					data-aos='fade'
					data-aos-offset='200'
					data-aos-easing='ease-in-quart'
					data-aos-duration='400'>
					<Grid
						item
						// style={{ maxWidth: '100%' }}
					>
						<Typography variant='h2'>I'm Vuthy Suon,</Typography>
					</Grid>
					<Grid item className={classes.gridItemMarginBottom}>
						<Typography variant='h3' className={classes.infoText}>
							a web developer based in Minneapolis, MN.
						</Typography>
					</Grid>
					<Grid item className={classes.gridItemMarginBottom}>
						<Button
							// rel='noopener noreferrer'
							// role='button'
							// aria-label='Email'
							// href='mailto:hello@vuthysuon.com'
							// target='_blank'
							variant='outlined'
							color='secondary'
							size={matchesXS ? 'medium' : 'large'}
							component={Link}
							// href={route.link}
							to={'portfolio'}
							spy={true}
							smooth={true}
							offset={-100}
							duration={600}
							className={classes.getInTouch}>
						See My Work
						</Button>
					</Grid>
				</Grid>

				<Grid
					item
					className={classes.webDeveloperContainer}
					md={6}
					style={{ marginTop: matchesSM && '2rem' }}
					data-aos='fade'
					data-aos-offset='200'
					data-aos-easing='ease-in-quart'
					data-aos-duration='800'>
					<img
						src={webDeveloperIcon}
						alt='web developer'
						className={classes.webDeveloperIcon}
					/>
				</Grid>
			</Grid>
			{/* </Grow> */}
		</div>
	);
};

export default Homepage;
