import React from 'react';
import Home from '../../pages/home/Home';
import Footer from '../../components/shared/Footer';
const HomeLayout = () => {
    return (
        <div className='w-full    '>
            <Home/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;