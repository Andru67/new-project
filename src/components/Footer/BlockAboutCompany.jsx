import React from 'react';
import st from './footer.module.css'

const BlockAboutCompany = () => {
    return (
        <div>
            <div className={st.label}>About company</div>
            <ul>
                <li className={st.li}>
                    <a>Jobs</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Story</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Licenses</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Why are we</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Real estate agency</a>
                </li>
            </ul>

        </div>
    );
};

export default BlockAboutCompany;