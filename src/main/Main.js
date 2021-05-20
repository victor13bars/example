import React from 'react'
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from "./../assets/image/Дикпр.jpg"
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from "react-tilt";

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
    },
};

const Main = () => {
    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <span>I am Victor<span>Semashko</span></span>
                    <ReactTypingEffect text={"Frontend Developer."}/>
                </div>
                <Tilt className="Tilt"
                      options={{max:25}}>
                    <div className={style.photo}>
                        <div className={style.image}>

                        </div>
                    </div>
                </Tilt>
            </div>

        </div>
    );
}

export default Main;