
import communicationIcon from '../../../images/communicationIcon.svg';
import teamIcon from '../../../images/teamIcon.svg';
import criticalIcon from '../../../images/criticalIcon.png';
import solvingIcon from '../../../images/solvingIcon.png';
import flexibilityIcon from '../../../images/flexibilityIcon.png';
import timeIcon from '../../../images/timeIcon.svg';

import React, { useState } from 'react';

import './softskills.css';


export const Softskills = () => {

    //useState pentru communication
const [showComm, setShowComm] = useState(true);

const showCommSkills = () => {
    setShowComm(!showComm);
    setShowTeamwork(true);
    setShowCritical(true);
    setShowProblem(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru Teamword
const [showTeamwork, setShowTeamwork] = useState('true');

const showTeamSkills = () => {
    setShowTeamwork(!showTeamwork)
    setShowComm(true);
    setShowCritical(true);
    setShowProblem(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru Critical thinking
const [showCritical, setShowCritical] = useState(true);

const showCriticalSkills = () => {
    setShowCritical(!showCritical);
    setShowTeamwork(true)
    setShowComm(true);
    setShowProblem(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru problem soilving
const [showProblem, setShowProblem] = useState(true);

const showProblemSkills = () => {
    setShowProblem(!showProblem);
    setShowCritical(true);
    setShowTeamwork(true)
    setShowComm(true);
    setShowFlexibility(true);
    setShowTime(true);
}

//useState pentru Flexibility
const [showFlexibility, setShowFlexibility] = useState(true);

const showFlexibilitySkills = () => {
    setShowFlexibility(!showFlexibility);
    setShowProblem(true);
    setShowCritical(true);
    setShowTeamwork(true)
    setShowComm(true);
    setShowTime(true);
}

//useState pentru time management
const [showTime, setShowTime] = useState(true);

const showTimeSkills = () => {
    setShowTime(!showTime);
    setShowFlexibility(true);
    setShowProblem(true);
    setShowCritical(true);
    setShowTeamwork(true)
    setShowComm(true);
}

    return(
        <div id='align-elements-soft-skills'>
            <h2>Soft skills</h2>
                

            <div className='skill-item-body' onClick={showCommSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={communicationIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Communication</h3>
                    <div className={`${showComm?'communication-arrow':'communication-arrow-rotate'}`}>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showComm?'body-list-comunication-none':'body-list-comunication'} >
                <li class="text-skills-presentation">
                    <p>I have developed strong communication skills, which enable me to collaborate effectively with development and design teams to ensure the delivery of high-quality solutions. I am an advocate of clear and concise dialogue, thus facilitating the integration of client requirements into the final products.</p>
                </li>
                </ul>
            </div>


            <div className='skill-item-body' onClick={showTeamSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={teamIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Teamwork</h3>
                    <div className={`${showTeamwork?'communication-arrow':'communication-arrow-rotate'}`}>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showTeamwork?'body-list-team-none':'body-list-team'}>
                <li class="text-skills-presentation">
                    <p>Working in diverse teams has taught me how to collaborate effectively with colleagues to achieve common goals. I am capable of taking on different roles within a team and contributing to the project's success by sharing knowledge and providing continuous support.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showCriticalSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={criticalIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Critical thinking</h3>
                    <div className={`${showCritical?'communication-arrow':'communication-arrow-rotate'}`}>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showCritical?'body-list-critical-none':'body-list-critical'}>
                <li class="text-skills-presentation">
                    <p>Critical thinking enables me to identify and analyze technical challenges, offering innovative solutions to complex problems. I am able to evaluate alternatives and choose the most effective approach for developing web application functionalities.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showProblemSkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={solvingIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Problem solving</h3>
                    <div className={`${showProblem?'communication-arrow':'communication-arrow-rotate'}`}>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showProblem?'body-list-problem-none':'body-list-problem'}>
                <li class="text-skills-presentation">
                    <p>I have a strong ability to solve technical problems quickly and efficiently. My capacity to diagnose and fix code errors allows me to enhance the performance and functionality of web applications.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showFlexibilitySkills} >
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={flexibilityIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Flexibility</h3>
                    <div className={`${showFlexibility?'communication-arrow':'communication-arrow-rotate'}`}>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showFlexibility?'body-list-flexibility-none':'body-list-flexibility'}>
                <li class="text-skills-presentation">
                    <p>I am open to change and adaptable to new requirements. My ability to quickly learn new technologies and adjust to different working methods contributes to the success of dynamic projects.</p>
                </li>
                </ul>
            </div>

            <div className='skill-item-body' onClick={showTimeSkills}>
                <div className="skill-arrow">
                    <div className='skill-size-skill'>
                        <img src={timeIcon} alt='comunication skill' className='skill-size-under' />
                    </div>
                    <h3 className='name-skills'>Time management</h3>
                    <div className={`${showTime?'communication-arrow':'communication-arrow-rotate'}`}>
                        <div className='arrow-skill-left'></div>
                        <div className='arrow-skill-right'></div>
                    </div>
                </div>
                <ul className={showTime?'body-list-time-none':'body-list-time'}>
                <li class="text-skills-presentation">
                    <p>Efficient time management helps me prioritize tasks and meet deadlines. I ensure that projects are delivered on time without compromising quality through meticulous planning and organization.</p>
                </li>
                </ul>
            </div>

        </div>
    )
}