import React from 'react'
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.button} href="">Посмотреть</a>
            </div>
            <div className={style.title}>{props.title}</div>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;