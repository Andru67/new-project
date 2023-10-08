import React, {useState} from 'react';
import cn from 'classnames';
import styles from './categoryCards.module.css';
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";


export const CategoryApartments = () => {
    const [showText, setShowText] = useState(false);

    const contentClassNames = cn(styles.content, {[styles.showText]: showText});

    const handleClick = () => setShowText(prev => !prev);

    return (
        <div className={cn(styles.wrap, styles.backgraund_apartments)}>
            <div className={contentClassNames}>
                <h3 onClick={handleClick}>Apartments</h3>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer
                    aliquam consectetur. Faucibus vitae dui massa tellus magna sit.
                </p>
                <div className={styles.link}>
                    <MoreLink path="#"/>
                </div>

            </div>
        </div>
    );
};


/*
import React, {useState} from 'react';
import st from './categoryCards.module.css';
import cn from "classnames";
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";


export const CategoryApartments = ({}) => {
    const [showText, setShowText] = useState(false)
    const textClassName = cn(st.category_link, st.category_link2)
    const click = () =>  setShowText(prev => !prev)
        /!*{
        if (!showText) {
            setShowText(true)
        } else {setShowText(false)}
        }*!/

    return (
        <div className={st.pictures} >
            {!showText
                ?
                <div className={cn(st.apartments, st.general)}>
                    <h3 onClick={click}>Apartments</h3>
                    <MoreLink path={'#'} className={st.category_link}/>
                </div>
                :
                <div className={st.wrap}>
                    <h3 onClick={click}>Apartments</h3>
                    <p className={st.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie
                        integer aliquam
                        consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                    <MoreLink path={'#'} className={textClassName} iconClassName={st.svg} />
                </div>
            }
        </div>

    );
}
*/
