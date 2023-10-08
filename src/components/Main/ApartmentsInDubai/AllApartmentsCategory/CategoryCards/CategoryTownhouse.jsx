import React, {useState} from 'react';
import cn from 'classnames';
import styles from './categoryCards.module.css';
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";


export const CategoryTownhouse = () => {
    const [showText, setShowText] = useState(false);

    const contentClassNames = cn(styles.content, {[styles.showText]: showText});

    const handleClick = () => setShowText(prev => !prev);

    return (
        <div className={cn(styles.wrap, styles.backgraund_townhouse)}>
            <div className={contentClassNames}>
                <h3 onClick={handleClick}>Townhous333</h3>

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
import React from 'react';
import st from './categoryCards.module.css';
import cn from 'classnames'
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";

export const CategoryTownhouse = ({}) => {

    return (
        <div className={st.pictures}>
            <div className={cn(st.townhouse, st.general)}>
                <h3>Townhouse</h3>
                <MoreLink path={'#'} className={st.category_link}/>
            </div>
        </div>

    );
}
*/
