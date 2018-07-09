import React from 'react';
import "./Contacts.css"
const Contacts = () => {
    return (
            <section className="contacts_block section">
                <h1>Contacts</h1>
                <div className="number_block">
                    <h3>Phone number</h3>
                    <div>0555458223</div>
                    <div>0777458223</div>
                </div>
                <div className="mail_block">
                    <h3>Mail</h3>
                    <div>cookie@gmail.com</div>
                    <div>cookie@mail.ru</div>
                </div>
                <div className='adress_block'>
                    <h3>Adress</h3>
                    <div>
                        Toktogula 51B
                    </div>
                </div>
            </section>
    );
};

export default Contacts;
