import React, {useState} from 'react';
import st from './categoryCards.module.css';
import cn from "classnames";
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";


export const CategoryApartments = ({}) => {
    const [showText, setShowText] = useState(false)
    const textClassName = cn(st.category_link, st.category_link2)
    const click = () =>  setShowText(prev => !prev)
        /*{
        if (!showText) {
            setShowText(true)
        } else {setShowText(false)}
        }*/

    return (
        <div className={st.pictures} onClick={click}>
            {!showText
                ?
                <div className={cn(st.apartments, st.general)}>
                    <h3>Apartments</h3>
                    <MoreLink path={'#'} className={st.category_link}/>
                </div>
                :
                <div className={st.wrap}>
                    <h3>Apartments</h3>
                    <p className={st.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie
                        integer aliquam
                        consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                    <MoreLink path={'#'} className={textClassName} iconClassName={st.svg} />
                </div>
            }
        </div>

    );
}
