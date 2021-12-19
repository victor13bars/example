import React from 'react'
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faVk} from '@fortawesome/free-brands-svg-icons';

import Project from "../projects/project/Project";
import Title from "../common/components/title/Title";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Title text={"Victor Semashko"}/>
                <div className={style.footer}>
                    <div className={style.network}>
                        <a href="https://t.me/semashko_victor">
                            <FontAwesomeIcon icon={faTelegramPlane}/>
                        </a>
                    </div>
                    <div className={style.network}>
                        <a href="#">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                    </div>
                    <div className={style.network}>
                        <a href="https://www.linkedin.com/in/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D1%81%D0%B5%D0%BC%D0%B0%D1%88%D0%BA%D0%BE-a1684b211/">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </div>
                    <div className={style.network}>
                        <a href="https://vk.com/id137833438">
                            <FontAwesomeIcon icon={faVk}/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved.</span>

            </div>
        </div>
    );
}

export default Footer;