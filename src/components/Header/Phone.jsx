import React from 'react';
import st from './headder.module.css'

const Phone = () => {
    return (
        <div>
           <a href='tel: +7 (212) 674-25-10'  className={st.phone}>+7 (212) 674-25-1*</a>
        </div>
    );
};

export default Phone;