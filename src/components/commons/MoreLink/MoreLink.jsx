import React from 'react';
import st from './moreLink.module.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Sing} from '../../../assets/img/Arrow.svg';
import cn from "classnames";

export const MoreLink = ({path, className, iconClassName}) => {
    const wrapClasses = cn(st.link, className)
    const iconClasses = cn(st, iconClassName)

    return (
        <div>
            <Link to={path} className={wrapClasses}>learn more<Sing className={iconClasses}/></Link>
        </div>
    );
}

// export default MoreLink;
