import React from 'react';
import Slider from "./About/Slider/Slider";
import Contact from "./Contact/Contact";
import {Route, Routes} from "react-router-dom";
import Blog from "./Blog/Blog";
import About from "./About/About";


const Main = () => {
    return (
        <div className='wrapper'>
            <Routes>
                <Route path='/' element={<Slider/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>

        </div>
    );
};

export default Main;