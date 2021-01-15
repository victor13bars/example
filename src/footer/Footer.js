import React from 'react'
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "../projects/project/Project";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Victor Semashko</h2>
                <div className={style.footer}>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                    <div className={style.network}></div>
                </div>
                <span>@2021 ВСе права защищены</span>

            </div>
        </div>
    );
}

export default Footer;