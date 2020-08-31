import React from 'react';
import classes from './HeaderSection.module.css';


const HeaderSection = () => {
    return(
        <div className={classes.Workplace}>
            <h1 className={classes.Header}>Stunning Workplace<span className={classes.PurpleDot}>.</span></h1>
            <p>With Stunning, remote teams can organize projects, manage shifting priorities, and get work done.</p>
            <button  className={[classes.ButtonSection , classes.SecondButton].join(" ")}>New Account</button>
          </div>
    )
}

export default HeaderSection;