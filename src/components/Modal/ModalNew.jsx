import {useEffect} from 'react';
import ReactDOM from 'react-dom'


const modalRootEl = document.getElementById('modal-root');


const ModalNew = ({children}) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRootEl.appendChild(el);

        return () => modalRootEl.removeChild(el)
    }, [el]);


    return ReactDOM.createPortal(
        children,
        el,
    );

}

export default ModalNew

/*

const modalRootEl = document.getElementById('modal-root');

// Let's create a Modal component that is an abstraction around
// the portal API.
class ModalNew extends React.Component {
    constructor(props) {
        super(props);
        // Create a div that we'll render the modal into. Because each
        // Modal component has its own element, we can render multiple
        // modal components into the modal container.
                // Создайте див, в который мы превратим модал. Поскольку каждый компонент
                // Модал имеет свой элемент, мы можем сделать несколько
                // модальных компонентов...
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
              // Добавить элемент в DOM при монтировании. Мы сделаем
              // в модальный контейнерный элемент (смотрите вкладку HTML).
        modalRootEl.appendChild(this.el);
    }

    componentWillUnmount() {
        // Remove the element from the DOM when we unmount
              // Удалить элемент из DOM при размонтировании
        modalRootEl.removeChild(this.el);
    }

    render() {
        // Use a portal to render the children into the element
              // Используйте портал для превращения детей в элемент
        return ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
                 // Любой допустимый потомок React: JSX, строки, массивы и т.д.
            this.props.children,
            // A DOM element
            this.el,
        );
    }
}

export default ModalNew
*/
