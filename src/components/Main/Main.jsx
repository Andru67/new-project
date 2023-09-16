import React from 'react';
import Slider from "./About/Slider/Slider";
import Contact from "./Contact/Contact";
import {Route, Routes, useParams} from "react-router-dom";
import Blog from "./Blog/Blog";
import About from "./About/About";
import LearnMor from "./Blog/LearnMor";


const Main = () => {

    return (
        <div className='wrapper'>
            <Routes>
                <Route path='/' element={<Slider/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blog/:id' element={<LearnMor/>}/>
            </Routes>

        </div>
    );
};

export default Main;