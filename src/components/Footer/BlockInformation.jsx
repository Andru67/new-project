import React from 'react';
import st from './footer.module.css'

const BlockInformation = () => {
    return (
        <div>
            <div className={st.label}>Informationy</div>
            <ul>
                <li className={st.li}>
                    <a>Video</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Podcasts</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Laws</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Questions and answers</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Books</a>
                </li>
            </ul>
            <ul>
                <li className={st.li}>
                    <a>Articles</a>
                </li>
            </ul>

        </div>
    );
};

export default BlockInformation;