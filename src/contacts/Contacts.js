import React from 'react'
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";



function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>

                <form className={style.contactsForm} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <a className={style.button} href="">Отправить</a>
            </div>
        </div>
    );
}

export default Contacts;