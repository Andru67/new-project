import React from 'react';
import st from './slicerAbout.module.css'
import {ReactComponent as Sing} from "../../../../assets/img/Arrow.svg";
import iconF from '../../../../assets/img/icons/icons-columm.svg'
import cn from "classnames";

const SlicerAbout = () => {
    return (
        <div className={st.slider}>
            <div className={st.slider_space_top}>
                <img src={iconF} alt={''} className={st.slider_icons}/>
            </div>

            <div className={st.slider_logo_border}>
                <div className={st.slider_logo_line}></div>

                <div className={st.slider_logo_text}>
                    <p className={st.slider_logo_text_p}>Lorem ipsum</p>
                    <h3 className={st.slider_logo_text_h3}>Welcome Home </h3>
                    <h3 className={st.slider_logo_text_h3}><span
                        className={st.slider_logo_text_h3_span}>To</span> Luxury</h3>
                    <p className={st.slider_logo_link}>Book a consultation<Sing/></p>
                </div>
                <div className={st.slider_logo_line}></div>
            </div>
            <div className={st.slider_space_buttons}>
                <div className={st.slider_space_buttons_bloc}>
                    <div className={st.slider_space_button_prev}>
                        <div>PREV</div>
                        <div>|</div>
                        <div>NEXT</div>
                    </div>

                </div>
                <div className={cn(st.slider_space_buttons_bloc, st.back)}>
                    <div className={st.slider_space_buttons_bloc_num}>01</div>
                    <div className={st.slider_space_buttons_bloc_text}>
                        <div>Lorem Ipsum</div>
                        <div> Dolorem apset</div>
                    </div>

                </div>
                <div className={cn(st.slider_space_buttons_bloc, st.back)}>
                    <div className={st.slider_space_buttons_bloc_num}>02</div>
                    <div className={st.slider_space_buttons_bloc_text}>
                        <div>Lorem Ipsum</div>
                        <div> Dolorem apset</div>
                    </div>
                </div>
                <div className={cn(st.slider_space_buttons_bloc, st.back)}>
                    <div className={st.slider_space_buttons_bloc_num}>03</div>
                    <div className={st.slider_space_buttons_bloc_text}>
                        <div>Lorem Ipsum</div>
                        <div> Dolorem apset</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SlicerAbout;