import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/meniu.css';

import { Burger } from './Burger';
import logo from '../images/logo.png';



export const Meniu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleToggleMenu = (isOpen) => {
        setMenuOpen(isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-bars')) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    //Home
    const [colorActiveHome, setColorActiveHome] = useState(false);

    const ChangeColorActiveHome = () => {
        setColorActiveHome(true);
        setColorActivePath(false);
        setColorActiveSkills(false)
        setColorActivePortfolio(false);
        setColorActiveContact(false);
    }
    //path

    const [colorActivePath, setColorActivePath] = useState(false);

    const ChangeColorActivePath = () => {
        setColorActivePath(true);
        setColorActiveHome(false);
        setColorActiveSkills(false)
        setColorActivePortfolio(false);
        setColorActiveContact(false);
    }
    //skills

    const [colorActiveSkills, setColorActiveSkills] = useState(false);

    const ChangeColorActiveSkills = () => {
        setColorActiveSkills(true);
        setColorActivePath(false);
        setColorActiveHome(false);
        setColorActivePortfolio(false);
        setColorActiveContact(false);
    }
    //portfolio

    const [colorActivePortfolio, setColorActivePortfolio] = useState(false);

    const ChangeColorActivePortfolio = () => {
        setColorActivePortfolio(true);
        setColorActiveSkills(false);
        setColorActivePath(false);
        setColorActiveHome(false);
        setColorActiveContact(false);
    }
    //contact

    const [colorActiveContact, setColorActiveContact] = useState(false);

    const ChangeColorActiveContact = () => {
        setColorActiveContact(true);
        setColorActivePortfolio(false);
        setColorActiveSkills(false);
        setColorActivePath(false);
        setColorActiveHome(false);
    }



    return (
        <div>
            <div className='desktop-menu'>
                <Link to="/">
                  <img src={logo} alt='logo' />
                </Link>
                
                <Burger isOpen={menuOpen} onToggle={handleToggleMenu} />
                <div ref={menuRef} className={`menu-items-hide ${menuOpen ? 'menu-items' : ''}`}>
                    <Link to="/" className={`item-menu ${colorActiveHome?'color-active':'color-nonactive'}`} onClick={() => {setMenuOpen(false); ChangeColorActiveHome()}}>Home</Link>
                    <Link to="/mypath" className={`item-menu ${colorActivePath?'color-active':'color-nonactive'}`} onClick={() => {setMenuOpen(false); ChangeColorActivePath()}}>My path</Link>
                    <Link to="/skills" className={`item-menu ${colorActiveSkills?'color-active':'color-nonactive'}`} onClick={() => {setMenuOpen(false); ChangeColorActiveSkills()}}>My skills</Link>
                    <Link to="/portfolio" className={`item-menu ${colorActivePortfolio?'color-active':'color-nonactive'}`} onClick={() => {setMenuOpen(false); ChangeColorActivePortfolio()}}>Portfolio</Link>
                    <Link to="/contact" className={`item-menu ${colorActiveContact?'color-active':'color-nonactive'}`} onClick={() => {setMenuOpen(false); ChangeColorActiveContact()}}>Contact</Link>
                </div>
            </div>
           
           
        </div>
    );
};
