import React, {useRef, useState} from 'react';
import style from './group.module.css'
import st from '../../Modal/Modal.module.css'
import ModalNew from '../../Modal/ModalNew';
import useOutsideAlerter from '../../../hooks/OutsideAlerter'


const BookConsultation = () => {

    const body = document.querySelector("body")
    const [showModal, setShowModal] = useState(false)
    const handleShow = () => {
        setShowModal(true);
        body.classList.add('lock')                                   // блок скрола
    }
    const handleHide = () => {
        setShowModal(false)
        body.classList.remove('lock')
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, handleHide);                        // закрытие модалки


    const modal = showModal ? (
        <ModalNew>

            <div className={st.modal_wrap}>
                {/*<div>
                    With a portal, we can render content into a different
                    part of the DOM, as if it were any other React child.
                </div>
                This is being rendered inside the #modal-container div.
                <button onClick={handleHide}>Hide modal</button>*/}
                <div
                    className={st.modal_close}
                    onClick={handleHide}
                >
                    &times;
                </div>
                <div className={st.modal_container}>
                    <div  className={st.modal_window} ref={wrapperRef}>
                        <div className={st.modal_h1}>
                            <h1>Leave your contacts</h1>
                        </div>
                        <div className={st.modal_text}>
                            <p>we will contact you within three hours</p>
                        </div>
                        <form>
                            <div className={st.modal_name}>
                                <input className={st.modal_input} placeholder='Name'/>
                                <div className={st.line}></div>
                            </div>
                            <div className={st.modal_phone}>
                                <input className={st.modal_input} placeholder='Phone'/>
                                <div className={st.line}></div>
                            </div>
                            <div className={st.buu}>
                                <input className={st.modal_send} placeholder='Send'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </ModalNew>
    ) : null;

    return (
        <>
            <button className={style.rectangle} onClick={handleShow}>
                Book a consultation
            </button>
            {modal}
        </>
    );
};

export default BookConsultation;