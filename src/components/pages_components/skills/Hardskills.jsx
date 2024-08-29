import React, { useState } from 'react';
import './hardskills.css';

import htmlIncon from '../../../images/htmlIncon.svg';
import cssIcon from '../../../images/cssIcon.svg';
import jsIcon from '../../../images/jsIcon.svg';
import reactIcon from '../../../images/reactIcon.svg';
import nodeIcon from '../../../images/nodeIcon.svg';
import gitIcon from '../../../images/gitIcon.svg';


export const Hardskills = () => {

 //useState pentru html
    const [showHtml, setShowHtml] = useState(true);

const showHtmlSkills = () => {
    setShowHtml(!showHtml);
    setShowCss(true);
    setShowJs(true);
    setShowReact(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru css
const [showCss, setShowCss] = useState(true);

const showCssSkills = () => {
    setShowCss(!showCss);
    setShowHtml(true);
    setShowJs(true);
    setShowReact(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru JavaScript
const [showJs, setShowJs] = useState(true);

const showJsSkills = () => {
    setShowJs(!showJs)
    setShowHtml(true);
    setShowCss(true);
    setShowReact(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru react
const [showReact, setShowReact] = useState(true);

const showReactSkills = () => {
    setShowReact(!showReact);
    setShowHtml(true);
    setShowCss(true);
    setShowJs(true);
    setShowNode(true);
    setShowGit(true);
}

    //useState pentru nodeJS
const [showNode, setShowNode] = useState(true);

const showNodeSkills = () => {
    setShowNode(!showNode);
    setShowHtml(true);
    setShowCss(true);
    setShowJs(true);
    setShowReact(true);
    setShowGit(true);
}

    //useState pentru git
const [showGit, setShowGit] = useState(true);

const showGitSkills = () => {
    setShowGit(!showGit);
    setShowHtml(true);
    setShowCss(true);
    setShowJs(true);
    setShowReact(true);
    setShowNode(true);
}


    return(
       
        <div id='align-elements-hard-skills'>
            <h2>Hard skills</h2>
                
                <div className='skill-item-body' onClick={showHtmlSkills}>
                    

                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={htmlIncon} alt='HTML' className='skill-size-under'  />
                        </div>
                        <h3 className='name-skills'>HTML skills</h3>
                        <div className={showHtml?'html-arrow':'html-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>


                    <ul className={showHtml?'body-list-html-none':'body-list-html'}>
                        <li className='text-skills-presentation'>
                            {`Mastering the use of semantic elements such as <header>, <footer>, <nav>, <section>, and <article> to create well-structured and accessible webpages.`}</li>
                        <li className='text-skills-presentation'>
                            {`Styling and organizing text content using HTML elements like <h1>-<h6>, <p>, <strong>, and <em> to ensure clarity and emphasis in textual content.`}</li>
                        <li className='text-skills-presentation'>
                            {`Creating and styling ordered and unordered lists using <ul>, <ol>, <li>, as well as designing and structuring data with <table>, <tr>, <th>, and <td>.`}</li>
                        <li className='text-skills-presentation'>
                            {`Embedding images, videos, and audio files using <img>, <video>, and <audio>, while focusing on accessibility and performance through attributes like src, alt, and controls.`}</li>
                        <li className='text-skills-presentation'>
                            {`Designing and developing complex and user-friendly forms using elements like <form>, <input>, <textarea>, <select>, and <button>, with HTML5 validation features to ensure data integrity.`}</li>
                        <li className='text-skills-presentation'>
                            {`Creating effective navigation and linking strategies using <a> tags, and employing attributes like href, target, and rel for improved user experience and SEO.`}</li>
                            <li className='text-skills-presentation'>
                            {`Enhancing webpage visibility and search engine indexing by using appropriate meta tags and structuring HTML with best practices.`}</li>
                            <li className='text-skills-presentation'>
                            {`Understanding and implementing the correct structure of an HTML document using elements like <!DOCTYPE html>, <html>, <head>, and <body> to ensure proper page rendering.`}</li>
                    </ul>
                        
                </div>
                <div className='skill-item-body' onClick={showCssSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={cssIcon} alt='CSS' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>CSS skills</h3>
                        <div className={showCss?'css-arrow':'css-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showCss?'body-list-css-none':'body-list-css'}>
                        <li className='text-skills-presentation'>
                            {`Mastering the Flexbox layout model for creating flexible and responsive layouts, including alignment, distribution of space, and handling of flexible items within containers.`}</li>
                        <li className='text-skills-presentation'>
                            {`Utilizing CSS Grid to design complex, two-dimensional layouts with grid areas, rows, and columns, ensuring precise control over layout structures.`}</li>
                        <li className='text-skills-presentation'>
                            {`Implementing responsive design principles using media queries to create layouts that adapt seamlessly to various screen sizes and devices.`}</li>
                        <li className='text-skills-presentation'>
                            {`Writing and applying media queries to adjust CSS properties based on screen dimensions, orientations, and other device characteristics.`}</li>
                            <li className='text-skills-presentation'>
                            {`Designing and customizing form elements, such as input fields, buttons, and checkboxes, to create user-friendly and accessible forms.`}</li>
                            <li className='text-skills-presentation'>
                            {`Implementing smooth animations and transitions using @keyframes, transition, and animation properties to enhance user interaction and engagement.`}</li>
                            <li className='text-skills-presentation'>
                            {`Applying various CSS positioning techniques (relative, absolute, fixed, and sticky) to control the placement and layering of elements on a webpage.`}</li>
                            <li className='text-skills-presentation'>
                            {`Creating and styling reusable UI components like buttons, cards, and navigation menus, ensuring consistency across the user interface.`}</li>
                    </ul>
                </div>
                <div className='skill-item-body' onClick={showJsSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={jsIcon} alt='JS' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>JavaScript skills</h3>
                        <div className={showJs?'js-arrow':'js-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showJs?'body-list-js-none':'body-list-js'}>
                    <li className='text-skills-presentation'>
                        {`Arrays: Creating, manipulating, and iterating over arrays using built-in methods like map, filter, reduce, and forEach.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Objects: Defining and managing objects, including property access, object destructuring, and dynamic properties.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Functions: Writing and utilizing functions, including higher-order functions, callbacks, arrow functions, and understanding the scope and closures`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`DOM Manipulation: Direct interaction with the Document Object Model (DOM) using methods like getElementById, querySelector, and handling DOM nodes dynamically.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Adding and managing event listeners to handle user interactions efficiently, including concepts like event delegation and propagation.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Classes: Utilizing ES6 classes for object-oriented programming, with inheritance, constructors, and encapsulation.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Fetch API: Implementing asynchronous HTTP requests using the Fetch API for server communication, handling promises, and async/await patterns.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Template Literals: Leveraging template literals for cleaner and more readable string interpolation and multi-line strings.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Destructuring: Simplifying code with array and object destructuring for extracting values from arrays and objects.`}
                    </li>
                        
                    </ul>
                </div>
                <div className='skill-item-body' onClick={showReactSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={reactIcon} alt='REACT' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>React skills</h3>
                        <div className={showReact?'react-arrow':'react-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showReact?'body-list-react-none':'body-list-react'}>
                    <li className='text-skills-presentation'>
                        {`Developing reusable and modular components using both functional and class components.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Efficiently managing props and state within components to control data flow and component behavior.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Utilizing hooks such as useState and useEffect to manage state and side effects in functional components.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Configuring and managing routes in SPA (Single Page Application) using React Router.`}
                    </li>
                    </ul>
                </div>
                <div className='skill-item-body' onClick={showNodeSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={nodeIcon} alt='NODE' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>Node skills</h3>
                        <div className={showNode?'node-arrow':'node-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showNode?'body-list-node-none':'body-list-node'}>
                    <li className='text-skills-presentation'>
                        {`Creating and managing servers using Node.js and Express.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Handling HTTP requests such as GET, POST, PUT, and DELETE.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Using npm to manage project packages and dependencies.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Developing efficient HTTP servers using Node.js 'http' module and Express to handle requests and responses.`}
                    </li>
                   </ul>
                </div>
                <div className='skill-item-body' onClick={showGitSkills}>
                    <div className="skill-arrow">
                        <div className='skill-size-skill'>
                            <img src={gitIcon} alt='GIT' className='skill-size-under' />
                        </div>
                        <h3 className='name-skills'>GIT skills</h3>
                        <div className={showGit?'git-arrow':'git-arrow-rotate'}>
                            <div className='arrow-skill-left'></div>
                            <div className='arrow-skill-right'></div>
                        </div>
                    </div>
                    <ul className={showGit?'body-list-git-none':'body-list-git'}>
                    <li className='text-skills-presentation'>
                        {`Creating and managing repositories for projects.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Initial upload of projects to GitHub.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Updating repositories with the latest code changes.`}
                    </li>
                    <li className='text-skills-presentation'>
                        {`Using Git commands like commit, push, and pull to keep the code synchronized with the GitHub repository.`}
                    </li>
                     </ul>
                </div>
                
        </div>


    )}