import React from 'react'
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import {faFileCode} from '@fortawesome/free-solid-svg-icons'
import Fade from "react-reveal";

const Skills = () => {

    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title text={"Skills"}/>
                    <div className={style.skills}>
                        <Skill icon={<FontAwesomeIcon icon={faJs} rotation={-90} />} title={"JS, TS"}/>
                        <Skill icon={<FontAwesomeIcon icon={faReact} />}
                               title={"React, Redux"}/>
                        <Skill icon={<FontAwesomeIcon icon={faFileCode}  />} title={"HTML & CSS"}/>
                        <Skill icon={<FontAwesomeIcon icon={faFileCode}  />} title={"HTML & CSS"}/>
                        <Skill icon={<FontAwesomeIcon icon={faFileCode}  />} title={"HTML & CSS"}/>
                        <Skill icon={<FontAwesomeIcon icon={faFileCode}  />} title={"HTML & CSS"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;