import React, {useState} from 'react'
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const BurgerNav = () => {
    const [menuIsOpen,setBurger] = useState(false)

    let onBurgerBtnClick = () => {
        setBurger(!menuIsOpen);
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link activeClass={style.active}
                      to="main"
                      spy={true}
                      smooth={true}
                      duration={700}
                      offset={-70}>Main</Link>
                {/*<a href="#skills">Скиллы</a>*/}
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={1}>Skills</Link>
                {/*<a href="#projects">Проекты</a>*/}
                <Link activeClass={style.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      offset={1}>Projects</Link>
                {/*<a href="#contacts">Контакты</a>*/}
                <Link activeClass={style.active}
                      to="contacts" spy={true}
                      smooth={true}
                      duration={1300}
                      offset={1}>Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    );
}

export default BurgerNav;