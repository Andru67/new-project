import React, {useState} from 'react';
import st from './quotes.module.css';
import {ReactComponent as Sign} from './../../../../../assets/img/Arrow.svg';
import cn from "classnames";


// const Quotes = [
const items = [
    {
        index: 1,
        label: 'The largest and oldest Quotations Page on the Web with about 30 categories',
        text: 'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,\n' +
            ' rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,\n' +
            ' eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a\n' +
            ' dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a\n' +
            ' scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.\n' +
            ' Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.\n' +
            ' Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque\N' +
            ' accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque\N' +
            ' elementum purus non nisl pharetra consequat. Nunc in venenatis orci.\n'
    },
    {
        index: 2,
        label: 'TA huge collection of inspirational quotes, thoughts of greatest minds in history',
        text: 'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,\n' +
            ' rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,\n' +
            ' eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a\n' +
            ' dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a\n' +
            ' scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.\n' +
            ' Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.\n' +
            ' Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque\N' +
            ' accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque\N' +
            ' elementum purus non nisl pharetra consequat. Nunc in venenatis orci.\n'
    },
    {
        index: 3,
        label: 'Quotations from the great works of literature',
        text: 'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,\n' +
            ' rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,\n' +
            ' eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a\n' +
            ' dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a\n' +
            ' scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.\n' +
            ' Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.\n' +
            ' Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque\N' +
            ' accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque\N' +
            ' elementum purus non nisl pharetra consequat. Nunc in venenatis orci.\n'
    },
    {
        index: 4,
        label: 'Read quotes and sayings from famous people in history',
        text: 'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,\n' +
            ' rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,\n' +
            ' eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a\n' +
            ' dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a\n' +
            ' scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.\n' +
            ' Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.\n' +
            ' Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque\N' +
            ' accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque\N' +
            ' elementum purus non nisl pharetra consequat. Nunc in venenatis orci.\n'
    },
    {
        index: 5,
        label: 'Collected quotes from Albert Einstein',
        text: 'Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,\n' +
            ' rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,\n' +
            ' eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a\n' +
            ' dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a\n' +
            ' scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget.\n' +
            ' Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra.\n' +
            ' Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque\N' +
            ' accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque\N' +
            ' elementum purus non nisl pharetra consequat. Nunc in venenatis orci.\n'
    },
]
export const Quotes = ({}) => {
    const [activeIndex, setActiveIndex] = useState(-1) // -1 = null

    const handleClick = (index) => {
        setActiveIndex((prev) => (prev === index ? -1 : index))
    }

    return (
        <div>
            {items.map((item, index) => (
                <div className={st.wrapper} key={index}>
                    <div className={st.label} onClick={() => handleClick(index)}>
                        {/*{item.index}*/}
                        {item.label}
                        {activeIndex === index
                            ?
                            <Sign className={cn(st.sing, st.turnSing)}/>
                            :
                            <Sign className={st.sing}/>
                        }
                    </div>
                    {activeIndex === index && <div className={st.text}>{item.text}</div>}
                </div>
            ))}
        </div>
    );
}
