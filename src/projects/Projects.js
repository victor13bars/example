import React from 'react'
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"Social Network"} description={"lorem lorem ffffff dddddddddd vvvvvvvv jjkhkj ewre gedgd dsgdfg gddfg fdhhf dfhdfhd"}/>
                    <Project title={"Todolist"} description={"lorem lorem ffffff dddddddddd vvvvvvvv gdfgfhfg rweret tertret tertert terte tertedf bcbcbfgbf"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;