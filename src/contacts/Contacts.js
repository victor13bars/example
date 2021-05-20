import React from 'react'
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from "react-reveal";



function Contacts() {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <Fade bottom>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <form className={style.contactsForm} action="">
                    <input type="text" className={style.formArea} placeholder="Name"/>
                    <input type="text" className={style.formArea} placeholder="e-mail"/>
                    <textarea className={style.messageArea} placeholder="Message"/>
                    <button type="submit" >Send message</button>
                </form>
            </div>
            </Fade>
        </div>
    );
}

export default Contacts;