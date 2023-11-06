import {useState} from "react";
import cn from 'classnames';
import st from './toggle.module.css'

export const LangSwitcher = () => {
    const [lang, setLang] = useState('en');

    const handleClickEn = () => setLang('en');
    const handleClickRu = () => setLang('ru');
    console.log(lang)
    return (
        <div className={st.lang}>
            <span
                onClick={handleClickEn}
                className={cn({ [st.active]: lang === 'en' })}
            >
                EN
            </span>
            <span
                onClick={handleClickRu}
                className={cn( { [st.active]: lang === 'ru' })}
            >
                RU
            </span>
        </div>
    );
};

