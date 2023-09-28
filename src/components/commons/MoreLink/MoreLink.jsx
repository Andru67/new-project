import React from 'react';
import st from './moreLink.module.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Sing} from '../../../assets/img/Arrow.svg';

export const MoreLink = ({path, className}) => {

    return (
        <div>
            <Link to={path} className={className}>learn more<Sing/></Link>
        </div>
    );
}

// export default MoreLink;
