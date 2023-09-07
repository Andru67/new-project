import React from 'react';
import st from './footer.module.css'

const BlockServices = () => {
    return (
        <div>
            <div className={st.label}>Services</div>
            <ul>
                <li className={st.li}>
                    <a>Property management in Dubai, UAE</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Sell ​​property in Dubai, UAE</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Rent property in Dubai, UAE</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Investments in Dubai, UAE</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Real estate for cryptocurrency in Dubai</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Moving to Dubai, UAE</a>
                </li>
            </ul>
        </div>
    );
};

export default BlockServices;