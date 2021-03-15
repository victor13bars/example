import React from 'react'
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from "./../assets/image/Дикпр.jpg"

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi Friends</span>
                    <h1>I am Victor Semashko</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

export default Main;