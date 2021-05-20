import React from 'react'
import style from './Skill.module.scss';

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.rhombus}>
                <div className={style.icon}>
                {props.icon}
                </div>
            </div>
            <h3>{props.title}</h3>
        </div>
    );
}

export default Skill;