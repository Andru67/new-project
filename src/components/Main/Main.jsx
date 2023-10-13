import React from 'react';
import SlicerAbout from "./About/SlicerAbout/SlicerAbout";
import Contact from "./Contact/Contact";
import {Route, Routes, useParams} from "react-router-dom";
import Blog from "./Blog/Blog";
import About from "./About/About";
import LearnMore from "./Blog/LearnMore";
import ApartmentsInDubai from "./ApartmentsInDubai/ApartmentsInDubai";


const Main = () => {

    return (
        <div className='wrapper'>
            <Routes>
                <Route path='/' element={<SlicerAbout/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blog/:id' element={<LearnMore/>}/>
                <Route path='/apartments-in-dubai' element={<ApartmentsInDubai/>}/>

            </Routes>

        </div>
    );
};

export default Main;