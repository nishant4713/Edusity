import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png';
import program2 from '../../assets/program-2.png';
import program3 from '../../assets/program-3.png';
import program_icon1 from '../../assets/program-icon-1.png';
import program_icon2 from '../../assets/program-icon-2.png';
import program_icon3 from '../../assets/program-icon-3.png';
const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program1} alt=''></img>
        <div className='caption'>
            <img src={program_icon1}></img>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2} alt=''></img>
        <div className='caption'>
            <img src={program_icon2}></img>
            <p>Master's Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3} alt=''></img>
        <div className='caption'>
            <img src={program_icon3}></img>
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
