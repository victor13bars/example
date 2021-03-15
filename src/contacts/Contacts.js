import React from 'react'
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";



function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"}/>
                <form className={style.contactsForm} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <button type="submit" className={style.button}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;