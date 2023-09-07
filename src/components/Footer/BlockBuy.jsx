import React from 'react';
import st from './footer.module.css'

const BlockBuy = () => {
    return (
        <div>
            <div className={st.label}>Buy</div>
            <ul>
                <li className={st.li}>
                    <a>Apartment in Dubai</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>House in Dubai</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Apartments in Dubai</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Loft in Dubai</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Penthouse in Dubai</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Villa in Dubai</a>
                </li>
            </ul>
        </div>
    );
};

export default BlockBuy;