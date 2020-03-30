import React, { Fragment, useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../styles/NavbarStyle';
import logoAnimation from '../assets/img/logoAnimation.mp4';
import logo from '../assets/img/logo_white.png';

const Navbar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleTabsChange = (e, newValue) => {
    setValue(newValue);
  };

  const routes = [
    {
      name: 'Home',
      link: '#home',
      activeIndex: 0
    },
    {
      name: 'Portfolio',
      link: '#portfolio',
      activeIndex: 1
    },
    {
      name: 'Contact',
      link: '#contact',
      activeIndex: 2
    }
  ];

  const tabs = (
    <Tabs value={value} onChange={handleTabsChange} indicatorColor='primary'>
      {routes.map((route, index) => (
        <Tab
          key={`${route}-${index}`}
          className={classes.tab}
          label={route.name}
          component='button'
          href={route.link}
          disableRipple
        />
      ))}
    </Tabs>
  );

  const drawer = (
    <Fragment>
      <IconButton onClick={() => setOpenDrawer(true)}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        elevation={10}
        open={openDrawer}
        anchor='right'
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}>
        <List className={classes.drawerContainer} disablePadding>
          {routes.map((route, index) => (
            <ListItem
              disableRipple
              key={`${route}--${index}`}
              button
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              // component='button'
              href={route.link}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              className={classes.listItem}>
              <ListItemText
                primary={route.name}
                className={classes.drawerItem}
                disableTypography
              />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Fragment>
  );

  useEffect(() => {
    [...routes].forEach(route => {
      switch (window.location.pathname) {
        case route.link:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          break;
        default:
          break;
      }
    });

    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <AppBar postion='static' color='primary' className={classes.appbar}>
        <Toolbar>
          <IconButton className={classes.logoContainer} disableRipple>
            <img src={logo} alt='logo' className={classes.logo} />
          </IconButton>
          <div className={classes.rightMenu}>{matchesSM ? drawer : tabs}</div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Navbar;
