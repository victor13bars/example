import React from 'react'
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faVk} from '@fortawesome/free-brands-svg-icons';

import Project from "../projects/project/Project";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Victor Semashko</h2>
                <div className={style.footer}>
                    <div className={style.network}>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className={style.network}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className={style.network}>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                    <div className={style.network}>
                        <FontAwesomeIcon icon={faVk} />
                    </div>
                </div>
                <span>@2021 Вcе права защищены</span>

            </div>
        </div>
    );
}

export default Footer;