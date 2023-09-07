import {useEffect} from "react";

// закрытие ьщдалки при клике вне окна
export default function useOutsideAlerter(ref, colback) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                colback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [colback, ref]);
}