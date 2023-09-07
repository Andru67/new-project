import Header from "./components/Header/Header";
import st from '../src/components/Header/headder.module.css'
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className='text-white'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
