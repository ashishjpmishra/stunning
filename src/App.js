import React from 'react';
import LandingImage from './assets/landing-section-image.png'


import Topbar from './Topbar/Topbar';
import HeaderSection from './HeaderSection/HeaderSection';
import CheckBox from './CheckBox/CheckBox';

import classes from './App.module.css';



function App() {
  return (
    <div className="App">
      <section className={classes.LandingSection}>
        <Topbar />
      <section className={classes.MainSection}>
        <div className={classes.UpperSection}>
          <div>
            <HeaderSection />
          </div>
          <div className={classes.LandingImage}>
            <img src={LandingImage} alt="landing image" />
          </div>
        </div>
        <div className={classes.CheckboxSection}>
            <CheckBox />
        </div>
      </section>
      </section>
    </div>
  );
}

export default App;
