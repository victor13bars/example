import React from 'react'
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "./../assets/image/Кот.jpg"
import socialImage from "./../assets/image/Кот2.jpg"

function Projects() {
    const social = {
        backgroundImage: 'url(' + socialImage + ')',
    };
    const todolist = {
        backgroundImage: 'url(' + todoImage + ')',
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social Network"} description={"lorem lorem ffffff dddddddddd vvvvvvvv jjkhkj ewre g"}/>
                    <Project style={todolist} title={"Todolist"} description={"lorem lorem ffffff dddddddddd vvvvvvvv gdfgfhfg                         rweret tertret tertert terte tertedf bcbcbfgbf 123232324 423423423423423423                                       hgjhgjjhgjhgjhgjhguj"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;