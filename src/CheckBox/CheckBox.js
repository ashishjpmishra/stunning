import React from 'react';

import ArrowDown from '../assets/arrow-down.png';
import ArrowUp from '../assets/arrow-up.png';
import TickImage from '../assets/tick-gray.png';
import TickBlue from '../assets/tick-blue.png';
import UserPink from '../assets/user-pink.png';
import UserOrange from '../assets/user-orange.png';
import UserBlue from '../assets/user-blue.png';
import UserRed from '../assets/user-red.png';

import classes from './CheckBox.module.css';

const CheckBox = ()=> {
    return(
        <div>
            <div className={classes.CheckboxCard}>
              <img className={classes.Tick} src={TickImage} alt="tick image"/>
              <h4>Dmm design</h4>
              <img className={classes.Tick} src={UserPink} />
              <p>20 Dec</p>
              <div className={classes.Colour1}></div>
            </div>
            <div className={[classes.CheckboxCard , classes.CheckBoxWhite].join(" ")}>
              <img className={classes.Tick} src={TickBlue} alt="tick image"/>
              <h4>Blurr animation</h4>
              <img className={classes.Tick} src={UserOrange} />
              <p>22 Dec</p>
              <div className={classes.Colour2}></div>
            </div>
            <div className={classes.CheckboxCard}>
              <img className={classes.Tick} src={TickImage} alt="tick image"/>
              <h4>Illustration</h4>
              <img className={classes.Tick} src={UserBlue} />
              <p>26 Dec</p>
              <div className={classes.Colour3}></div>
            </div>
            <div className={classes.CheckboxCard}>
              <img className={classes.Tick} src={TickImage} alt="tick image"/>
              <h4>Refunds</h4>
              <img className={classes.Tick} src={UserRed} />
              <p>28 Dec</p>
              <div className={classes.Colour4}></div>
            </div>
        </div>
    )
}

export default CheckBox;