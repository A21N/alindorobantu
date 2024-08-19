import React, { useState } from 'react';
import './pages_css/portfolio.css';
import todoapp from '../../images/todoapp.png';
import mcdonalds from '../../images/mcdonalds-image.png';
import thiswebsite from '../../images/thiswebsite.png';
import imagegalery from '../../images/image-gallery.png';
import calculator from '../../images/simple_calculator.png';
import gitbutton from '../../images/gitbutton.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import react from '../../images/react.png';

import { Link } from 'react-router-dom';

export const Portfolio = () => {


    //useState for starter projects button
    const [starterProjects, setStarterProjects] = useState(true);

    const changeStarterProjects = () => {
        setStarterProjects(!starterProjects);
        setChalangeProjects(true)
    }

    //useState for chalanging projects button
    const [chalangeProjects, setChalangeProjects] = useState(true);

    const changeChalangeProjects = () => {
        setChalangeProjects(!chalangeProjects);
        setStarterProjects(true);
    }


    return(

        <div id='background-protofolio-items'>
        <div className='my-portfolio'>

        <div className='portfolio-sides'>
            <div className={`${'type-of-project-starter'} ${starterProjects?'background-starter':'background-starter-none'}`} onClick={changeStarterProjects}>
                <h3 className={starterProjects?'color-starter':'color-starter-none '}>Starter projects</h3>
            </div>
            <div className={`${'type-of-project-chalanging'} ${chalangeProjects?'background-chalange':'background-chalange-none'}`} onClick={changeChalangeProjects}>
                 <h3 className={chalangeProjects?'color-chalange':'color-chalange-none'}>Challenging projects</h3>
            </div>
        </div>

        <div className={starterProjects?'starter-project-none':'starter-project'}>
            <div className='portfolio-items'>
                
              
                <div className='portofolio-item'>
                <h2 className='title-projects-color'>Image gallery</h2>
                    <img src={imagegalery} alt='galery' id='size-portofolio' />
                    <p className='color-link-project'><a href={`https://alindorobantu.com/projects/image_gallery/image-gallery.html`} target={`_blank`}>{`Open App -->`}</a></p>
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                        </div>
                        <a href={`https://github.com/A21N/image_gallery.git`} target={`_blank`}>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                        </a>
                    </div>
                </div>

                <div className='portofolio-item'>
                <h2 className='title-projects-color'>Simple calculator</h2>
                <a href={`https://alindorobantu.com/projects/calculator/index.html`} target={`_blank`}>
                    <img src={calculator} alt='galery' id='size-portofolio' />
                    </a>
                    <p className='color-link-project'><a href={`https://alindorobantu.com/projects/calculator/index.html`} target={`_blank`}>{`Open App -->`}</a></p>
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                        </div>
                        <a href={`https://github.com/A21N/simpleCalculator.git`} target={`_blank`}>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                        </a>
                    </div>
                </div>

                <div className='portofolio-item'>
                <h2 className='title-projects-color'>To-Do-App</h2>
                    <a href={`https://alindorobantu.com/projects/to-do-list/index.html`} target={`_blank`}>
                        <img src={todoapp} alt='to-do=app' id='size-portofolio' />
                    </a>
                    <p className='color-link-project'> <a href={`https://alindorobantu.com/projects/to-do-list/index.html`} target={`_blank`}>{`Open App -->`}</a></p>
                    
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                        </div>
                        <a href={`https://github.com/A21N/to-do-list.git`} target={`_blank`}>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div className={chalangeProjects?'chalange-project-none':'chalange-project'}>
            <div className='portfolio-items'>
                <div className='portofolio-item'>
                <h2 className='title-projects-color'>This website</h2>
                        <Link to="/" target='_blank'>
                            <img src={thiswebsite} alt='this-website' id='size-portofolio' />
                        </Link>
                        
                        <p className='color-link-project'><Link to="/" target='_blank'>{`Open App -->`}</Link></p>
                        
                    
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                            <img src={react} alt='react' className='tech-size' />
                        </div>
                        <a href={`https://github.com/A21N/alindorobantu.git`} target={`_blank`}>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                        </a>
                    </div>
                </div>
                <div className='portofolio-item'>
                <h2 className='title-projects-color'>McDonalds clone</h2>
                <a href={`https://mcdonalds.alindorobantu.com/`} target={`_blank`}>
                    <img src={mcdonalds} alt='mcdonalds' id='size-portofolio' />
                    </a>
                    <p className='color-link-project'><a href={`https://mcdonalds.alindorobantu.com/`} target={`_blank`}>{`Open App -->`}</a></p>
                    <div className='buttons-portfolio'>
                        <div className='tech-used'>
                            <img src={html} alt='html' className='tech-size' />
                            <img src={css} alt='css' className='tech-size' />
                            <img src={js} alt='js' className='tech-size' />
                            <img src={react} alt='react' className='tech-size' />
                        </div>
                        <a href={`https://github.com/A21N/mcdonalds.git`} target={`_blank`}>
                        <img src={gitbutton} alt='button github' className='button-git' title='view code on github!'/>
                        </a>
                    </div>
                </div>
                    
            </div>

        </div>
    </div>
    </div>
    );
}