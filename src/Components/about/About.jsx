import React, { Fragment } from 'react';
import abot from './assets/about.png'
import './about.css'
const About = () => {
  return <Fragment>
      <div className='row'>
          <div className='col-sm-4'>
              <img src={abot} className='about-content-img'/>
          </div>
          <div className='col-sm-8'>
              <div className='about-content-div'>
                  <h2>About</h2>
              <p>Digital Village Hackathon is a national level initiative for students to compete in solving pressing problems in the domain of precision agriculture, under the project “Digital Village: A Data-Driven Approach to Precision Agriculture in Small Farms”.</p>

                <p>The students would have the opportunity to work on challenges faced in the field of precision agriculture and use various technologies in the domain of machine learning, deep learning, computer vision, data science, etc. to create world class solutions that will have practical applications in agriculture.</p>
              </div>
          </div>
      </div>
  </Fragment>;
};

export default About;