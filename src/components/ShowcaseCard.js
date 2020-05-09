import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useStyles from '../styles/ShowcaseCardStyle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ShowcaseCard = ({ project }) => {
  const {
    title,
    description,
    imageLink,
    liveDemo,
    videoDemo,
    sourceCode,
    techStacks,
    gifLink,
  } = project;

  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => setOpenDialog(false);
  const handleDialogOpen = () => setOpenDialog(true);

  return (
    <Grid
      item
      container
      direction='column'
      alignItems='center'
      justify='center'
      lg={4}
      md={6}>
      <Grid item className={classes.gridContainerItem}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component={'a'}
              href={liveDemo}
              rel='noopener noreferrer'
              target='_blank'
              className={classes.mediaContainer}
              image={imageLink}
              title={title}
            />

            <CardContent>
              <Typography gutterBottom variant='h6'>
                {title}
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                component='p'
                style={{
                  height: matchesSM ? 'auto' : '100px',
                }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions>
            <Button
              role='button'
              aria-label='Live Demo'
              size={matchesXS ? 'medium' : 'large'}
              color='primary'
              href={liveDemo}
              rel='noopener noreferrer'
              target='_blank'
              variant='contained'>
              Live Demo
            </Button>
            <Button
              role='button'
              aria-label='View More'
              size={matchesXS ? 'medium' : 'large'}
              color='primary'
              variant='outlined'
              onClick={handleDialogOpen}>
              View More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleDialogClose}
          aria-labelledby={`dialog-slide-${title}`}
          aria-describedby={`dialog-slide-${description}`}
          className={classes.dialogContainer}>
          <DialogTitle
            id={`dialog-slide-${title}`}
            className={classes.dialogTitle}>
            {title}
          </DialogTitle>
          <Divider />
          <DialogContent>
            <img
              src={gifLink.length > 1 ? gifLink : imageLink}
              alt={title}
              className={classes.dialogImageContainer}
            />

            <DialogContentText id={`dialog-slide-${description}`}>
              {project.description}
            </DialogContentText>
            <div className={classes.stack}>
              <Typography className={classes.stackTitle}>
                Tech Stacks
              </Typography>
              <ul className={classes.techList}>
                {techStacks.map((tech) => (
                  <li className={classes.techItem} key={uuidv4()}>
                    <Typography variant='body1'>
                      {tech[0].toUpperCase() + tech.slice(1)}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
          <Divider />
          <DialogActions className={classes.dialogActions}>
            <Button
              role='button'
              aria-label='Live Demo'
              style={{ marginRight: matchesXS ? '0' : '0.5rem' }}
              className={classes.dialogButton}
              size={matchesXS ? undefined : 'large'}
              onClick={handleDialogClose}
              href={liveDemo}
              rel='noopener noreferrer'
              target='_blank'
              color='primary'
              variant='outlined'>
              Live Demo
            </Button>
            {videoDemo && videoDemo.length > 1 && (
              <Button
                role='button'
                aria-label='Video Demo'
                style={{ marginRight: matchesXS ? '0' : '0.5rem' }}
                className={classes.dialogButton}
                size={matchesXS ? undefined : 'large'}
                href={videoDemo}
                rel='noopener noreferrer'
                target='_blank'
                onClick={handleDialogClose}
                color='primary'
                variant='outlined'>
                Video Demo
              </Button>
            )}
            {sourceCode && sourceCode.length > 1 && (
              <Button
                role='button'
                aria-label='Source Code'
                className={classes.dialogButton}
                size={matchesXS ? undefined : 'large'}
                onClick={handleDialogClose}
                href={sourceCode}
                rel='noopener noreferrer'
                target='_blank'
                color='primary'
                variant='outlined'>
                Source Code
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default ShowcaseCard;
