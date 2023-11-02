import React from 'react';
import {CardsStaff_Prototype} from "./CardsStaff_Prototype";
import PhotoPoul from './../../../../../assets/img/staff/Paul.png'


export const CardsStaff_1 = ({}) => {

    return (
        <div>
            <CardsStaff_Prototype
                photo={PhotoPoul}
                name={'Poul'}
                occupation={'Owner in'}
                from={'Paul.com'}
                text={'Projects for many large domestic and foreign corporations,\n' +
                    'enterprises in many elds such as nance, banking, F&B, education, communication.'}
            />
        </div>
    );
}
