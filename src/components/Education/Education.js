import React, { Component } from 'react';
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
    const { UniversityName, specialization, MonthOfPassing, YearOfPassing, Achievements } = education
    return (
        <>
        <div className='parent'>

        <h2>Education</h2>

        <div className="nine">
                    
                       <div className="columns">
                        <i>University Name:</i>
                          <h3>{UniversityName}</h3>
                          <br />
                          <p className="info">
                            <i>specialization:</i>
                            <br />

                          <h4>{specialization}</h4>
                          <span>&bull;</span> <em className="date">{MonthOfPassing} {YearOfPassing}</em></p>
                          <br />
                          <p>
                            <i>Achievements: </i>
                            <br />
                          <h5 id='ach'>{Achievements}</h5>
                          <h5>Published one Research Paper On NLP</h5>
                          </p>
                       </div>
            </div>        
      </div>
      </>
    );
  }


export default Education
