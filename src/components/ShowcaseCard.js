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
    source,
    techStacks
  } = project;

  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
      md>
      <Grid item className={classes.gridContainerItem}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              className={classes.mediaContainer}
              image={imageLink}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant='h4'>
                {title}
              </Typography>
              <Typography variant='h6' color='textSecondary' component='p'>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Divider />
          <CardActions>
            <Button
              size={matchesXS ? 'small' : undefined}
              color='primary'
              variant='contained'>
              Live Demo
            </Button>
            <Button
              size={matchesXS ? 'small' : undefined}
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
              src={imageLink}
              alt={title}
              className={classes.dialogImageContainer}
            />
            <DialogContentText id={`dialog-slide-${description}`}>
              {project.description}
            </DialogContentText>
            <div className={classes.stack}>
              <Typography variant='h6'>Tech Stacks</Typography>
              <ul className={classes.techList}>
                {techStacks.map(tech => (
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
          <DialogActions>
            <Button
              className={classes.dialogButton}
              size={matchesXS ? 'small' : undefined}
              onClick={handleDialogClose}
              color='primary'
              variant='outlined'>
              Live Demo
            </Button>
            <Button
              className={classes.dialogButton}
              size={matchesXS ? 'small' : undefined}
              onClick={handleDialogClose}
              color='primary'
              variant='outlined'>
              Video Demo
            </Button>
            <Button
              className={classes.dialogButton}
              size={matchesXS ? 'small' : undefined}
              onClick={handleDialogClose}
              color='primary'
              variant='outlined'>
              Source Code
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default ShowcaseCard;
