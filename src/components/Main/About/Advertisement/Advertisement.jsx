import React from 'react';
import st from './advertisement.module.css';
import Advertisement_1 from "../../../../assets/img/Advertisement 1.png";
import Advertisement_2 from "../../../../assets/img/Advertisement 2.png";

export const Advertisement = ({}) => {


    return (
        <div className={st.block_advertisement}>
            <p className={st.block_advertisement_description}>“Don’t limit yourself. Many people limit themselves to
                what they
                think they can do. You can go as far as your mind lets you. What you believe, remember, you can
                achieve.” <span className={st.span}>— Mary Kay Ash</span></p>
            <div className={st.block_advertisement_wrap}>
                <div className={st.block_advertisement_title}>
                    <img src={Advertisement_1} alt={''} className={st.img}/>
                    <p>Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit,
                        rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor,
                        eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a
                        dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a
                        scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam
                        mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin
                        at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium
                        tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl
                        pharetra consequat. Nunc in venenatis orci.
                    </p>
                </div>
                <div className={st.block_advertisement_title}>
                    <img src={Advertisement_2} alt={''} className={st.img}/>
                    <p>Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut ullamcorper dapibus ante, eu
                        tincidunt orci feugiat vel. Curabitur eget lectus lectus. Pellentesque malesuada, felis at
                        accumsan interdum, nisl mi fermentum est, eu suscipit dui lorem a dui. Aliquam rhoncus risus
                        in leo vestibulum efficitur. Suspendisse tortor quam, faucibus a lacinia a, bibendum vitae
                        quam. Suspen disse et metus et orci rutrum dictum eu eu nibh. Suspendisse blandit in diam in
                        rhoncus. Nam volutpat hendrerit enim, sed aliquet quam gravida at. Nullam dictum sagittis
                        nisi, eu porta sem mollis eu. Nulla faucibus sed ipsum sed sodales. Curabitur varius iaculis
                        felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum elementum, nulla magna
                        tincidunt urna, a venenatis dolor arcu sed leo.</p>
                </div>
            </div>
        </div>
    );
}
