import React from 'react'
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import htmlIcon from "./../assets/icon/files.svg"
import jsIcon from "./../assets/icon/js.svg"
import reactIcon from "./../assets/icon/atom.svg"

function Skills() {
    const html = {
        backgroundImage: 'url(' + htmlIcon + ')',
    };
    const js = {
        backgroundImage: 'url(' + jsIcon + ')',
    };
    const reactIc = {
        backgroundImage: 'url(' + reactIcon + ')',
    };
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill style={js} title={"JS"} description={"lorem lorem ffffff dddddddddd vvvvvvvv"} />
                    <Skill style={html} title={"HTML"} description={"lorem lorem ffffff dddddddddd vvvvvvvv"}/>
                    <Skill style={reactIc} title={"REACT"} description={"lorem lorem ffffff dddddddddd vvvvvvvv"}/>
                    <Skill style={js} title={"JS"} description={"lorem lorem ffffff dddddddddd vvvvvvvv"}/>
                    <Skill style={html} title={"HTML"} description={"lorem lorem ffffff dddddddddd vvvvvvvv"}/>
                    <Skill style={reactIc} title={"REACT"} description={"lorem lorem ffffff dddddddddd vvvvvvvv"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;