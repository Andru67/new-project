import React, {useState} from 'react';
import st from './collaps.module.css';
import cn from "classnames";
import {ReactComponent as Sign} from './../../../../../assets/img/Arrow.svg';


export const Quotes_Prototype = ({label, text}) => {
    const [showText, setShowText] = useState(false)
    const [turnSing, setTurnSing] = useState(false)
    const handleClick = () => {
        setShowText(prev => !prev)
        setTurnSing(prev => !prev)
    }
    const contentClassName = cn(st.text, {[st.showText]: showText})
    const contentClassName2 = cn(st.sing, {[st.turnSing]: turnSing})


    // const label = 'The largest and oldest Quotations Page on the Web with about 30 categories'

   /* const text =
        'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,\n' +
        ' rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,\n' +
        ' eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a\n' +
        ' dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a\n' +
        ' scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.\n' +
        ' Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.\n' +
        ' Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque\N' +
        ' accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque\N' +
        ' elementum purus non nisl pharetra consequat. Nunc in venenatis orci.\n'
*/

    return (
        <div className={st.wrapper}>
            <div className={st.label} onClick={handleClick} >
                {label}
                <Sign className={contentClassName2}/>
            </div>
            <div className={contentClassName}>
                <div>
                    {text}
                </div>

            </div>
        </div>

    );
}
