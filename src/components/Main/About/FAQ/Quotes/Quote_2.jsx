import React, {useState} from 'react';
import st from './collaps.module.css';
import cn from "classnames";
import {ReactComponent as Sign} from './../../../../../assets/img/Arrow.svg';
import {Quotes_Prototype} from "./Quotes_Prototype";


export const Quote_2 = ({}) => {

    const label = 'TA huge collection of inspirational quotes, thoughts of greatest minds in history'

    const text =
        'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,\n' +
        ' rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,\n' +
        ' eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a\n' +
        ' dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a\n' +
        ' scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.\n' +
        ' Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.\n' +
        ' Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque\N' +
        ' accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque\N' +
        ' elementum purus non nisl pharetra consequat. Nunc in venenatis orci.\n'

    return (
        <div>
            <Quotes_Prototype text={text} label={label}/>
        </div>
    );
}
