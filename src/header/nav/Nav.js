import React from 'react'
import style from './Nab.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<a href="">Главная</a>*/}
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
    );
}

export default Nav;