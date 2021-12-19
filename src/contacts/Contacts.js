import React from 'react'
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from "react-reveal";
import axios from "axios";

const sendMessage = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target[0].value)
    // axios.get('https://my-nodejs-server-smtp.herokuapp.com')
    axios.post('https://my-nodejs-server-smtp.herokuapp.com/sendMessage',{
        name:e.target[0].value,
        email:e.target[1].value,
        message:e.target[2].value
    }).then(()=>{
        alert("Your message has benn sent")
    })
}

function Contacts() {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <Fade bottom>
            <div className={style.contactsContainer}>
                <Title text={"Contacts"}/>
                <form onSubmit={sendMessage} className={style.contactsForm} action="">
                    <input
                        type="text"
                        className={style.formArea}
                        placeholder="Name"
                        name="name"
                    />
                    <input
                        type="text"
                        className={style.formArea}
                        placeholder="e-mail"
                        name="email"
                    />
                    <textarea
                        className={style.messageArea}
                        placeholder="Message"
                        name="message"
                    />
                    <button type="submit" >Send message</button>
                </form>
            </div>
            </Fade>
        </div>
    );
}

export default Contacts;