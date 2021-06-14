import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import useStyles from '../styles/ContactStyle';

const Contact = (props) => {
	const classes = useStyles();
	const { setValue } = props;

	return (
		<div id='contact'>
			<Grid
				container
				direction='column'
				justify='center'
				alignItems='center'
				className={classes.contactContainer}>
				<Grid
					item
					className={classes.contactItem}
					data-aos='fade'
					data-aos-offset='200'
					data-aos-easing='ease-in-quart'
					data-aos-duration='500'>
					<Typography variant='h2'>Get In Touch</Typography>
				</Grid>
				<Grid
					item
					className={classes.contactItem}
					style={{ maxWidth: 450 }}
					data-aos='fade'
					data-aos-offset='200'
					data-aos-easing='ease-in-quart'
					data-aos-duration='700'>
					<Typography variant='body1' className={classes.contactInfo}>
						Let's connect and build many more awesome projects! :)
					</Typography>
				</Grid>
				<Grid
					item
					className={classes.contactItem}
					data-aos='fade'
					data-aos-offset='200'
					data-aos-easing='ease-in-quart'
					data-aos-duration='900'>
					<Button
						role='button'
						aria-label='Email'
						rel='noopener noreferrer'
						href='mailto:hello@vuthysuon.com'
						target='_blank'
						variant='outlined'
						color='secondary'
						size='large'
						className={classes.contactBtn}>
						Say Hello!
					</Button>
				</Grid>
			</Grid>
			<div
				className={classes.goBackHomeContainer}
				data-aos='fade'
				data-aos-offset='0'
				data-aos-easing='ease-in-quart'
				data-aos-duration='700'>
				<IconButton
					role='button'
					aria-label='icon'
					size='medium'
					className={classes.iconContainer}
					color='secondary'
					onClick={() => {
						scroll.scrollToTop();
						setValue(0);
					}}>
					<ExpandLessIcon className={classes.icon} />
				</IconButton>
			</div>
		</div>
	);
};

export default Contact;
