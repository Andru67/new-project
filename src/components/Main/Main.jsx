import React from 'react';
import AboutHeader from "./About/AboutHeader/AboutHeader";
import Contact from "./Contact/Contact";
import {Route, Routes} from "react-router-dom";
import Blog from "./Blog/Blog";
import About from "./About/About";
import GoBack from "./Blog/GoBack";
import ApartmentsInDubai from "./ApartmentsInDubai/ApartmentsInDubai";


const Main = () => {

    return (
        <div className='wrapper'>
            <Routes>
                <Route path='/' element={<AboutHeader/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blog/:id' element={<GoBack/>}/>
                <Route path='/apartments-in-dubai' element={<ApartmentsInDubai/>}/>

            </Routes>

        </div>
    );
};

export default Main;