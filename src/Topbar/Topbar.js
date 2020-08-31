import React from 'react';
import Logo from '../assets/stunning-logo.png';

import classes from './Topbar.module.css';


const Topbar = () => {
    return(
        <div className={classes.TopbarWrapper}>
          <div className={classes.LogoContainer}>
              <img className={classes.AppLogo} src={Logo} alt="stunning logo"/>
          </div>
          <div className={classes.Menu}>
              <span className={classes.MenuItems}>Home</span>
              <span className={classes.MenuItems}>About</span>
              <span className={classes.MenuItems}>Blog</span>
              <span className={classes.MenuItems}>Jobs</span>
          </div>
          <div>
              <button  className={classes.ButtonSection}>Your Account</button>
          </div>
        </div>
    )
}

export default Topbar;