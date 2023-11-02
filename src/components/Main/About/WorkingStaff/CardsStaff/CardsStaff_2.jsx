import React from 'react';
import st from './cardsStaff.module.css';
import {CardsStaff_1} from "./CardsStaff_1";
import {CardsStaff_Prototype} from "./CardsStaff_Prototype";
import PhotoRobert from './../../../../../assets/img/staff/Robert.png'


export const CardsStaff_2 = ({}) => {

    return (
        <div>
            <CardsStaff_Prototype
                photo={PhotoRobert}
                name={'Robert'}
                occupation={'Founder in'}
                from={' Apple inc.'}
                text={'Founded in 2007, Sparch is specializing in providing innovative services' +
                    ' such as website design, brand identity and marketing\n'}
            />
        </div>
    );
}
